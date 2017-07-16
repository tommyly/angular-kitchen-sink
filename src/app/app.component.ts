import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./state-management/state/main-state";
import { INCREMENT } from "./state-management/actions/main-action-creator";
import { AdaptiveCard, TextBlock, CardElement } from "microsoft-adaptivecards" ;
import { uuid } from "uuid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  defaultTemplate = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "body": [
      {
        "type": "Container",
        "speak": "",
        "items": []
      }
    ]
  };

  html: string;
  text: string;
  adaptiveCard: AdaptiveCard = new AdaptiveCard();
  addedElements: CardElement[] = [];
  selectedElement: CardElement;
  selectedText: string;

  constructor (private store:Store<State>) {

    store.select('mainReducer')
      .subscribe( (data: State) => {
      });

      this.store.dispatch({ type: INCREMENT });
  }

  addTextElement() {
      console.log(`adding text element ${ this.text }`)

      let textBlock: TextBlock = new TextBlock();
      textBlock.id =  this.generateRandomId();
      textBlock.text = this.text;

      this.addElementToAdaptiveCard(textBlock);
  }

  addElementToAdaptiveCard(cardElement: TextBlock ) {
      this.adaptiveCard.addItem(cardElement);
      this.adaptiveCard.parse(this.defaultTemplate);
      this.html = this.adaptiveCard.render().innerHTML;
      this.addedElements.push(cardElement);
  }

  onClick() {
    this.store.dispatch({ type: INCREMENT });
  }

  generateRandomId(): string {
    return (Math.floor(Math.random() * 99999)).toString();
  }

  selectElement($event: MouseEvent) {
      let target = $event.target as HTMLElement;
      console.log(`selected ${ target.id }`);

      for (let element of this.addedElements)
      {
          if (element.id === target.id) {
            target.style.border = "2px solid purple";
            this.selectedElement = element;
            this.selectedText = (this.selectedElement as TextBlock).text;
          } 
      }
  }

  applyChanges() {
      if (this.selectedElement == null) {
        return;
      }

      let changedElement = this.selectedElement as TextBlock;
      changedElement.text = this.selectedText;
      this.html = this.adaptiveCard.render().innerHTML;
    }
}
