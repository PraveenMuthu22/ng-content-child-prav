import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterContentInit {
  @ContentChild('header') text: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.text.nativeElement.innerText);
  }
}
