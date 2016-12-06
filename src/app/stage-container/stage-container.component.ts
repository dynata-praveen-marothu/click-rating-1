import { Component } from '@angular/core';

@Component({
  selector: 'app-stage-container',
  templateUrl: './stage-container.component.html',
  styleUrls: ['./stage-container.component.css']
})
export class StageContainerComponent {


  activeidx   : number = 0;


  cards = [
    {idx: 0, label: "APPLE", bidx: null},
    {idx: 1, label: "MICROSOFT", bidx: null},
    {idx: 2, label: "FACEBOOK", bidx: null},
    {idx: 3, label: "GOOGLE", bidx: null}
  ]

  buckets = [
    {idx: 0, label: "Very Dissatisfied"},
    {idx: 1, label: "Dissatisfied"},
    {idx: 2, label: "No Opinion"},
    {idx: 3, label: "Satisfied"},
    {idx: 4, label: "Very Satisfied"}
  ]


  config = {

    stageWidth    :650,
    stageHeight   :400,

    cardTop       :35,
    cardWidth     :100,
    cardHeight    :30,
    cardPadding   :10,

    bucketTop     :120,
    bucketWidth   :110,
    bucketHeight  :100,
    bucketPadding :10

  }


  bucketClickReceived(event){

    if( this.activeidx >= this.cards.length  ) return;

    this.cards[this.activeidx].bidx=event.idx;
    this.activeidx++
  }


}


