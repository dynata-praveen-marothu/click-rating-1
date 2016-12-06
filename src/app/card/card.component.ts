import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges{

  @Input() card;
  @Input() config;
  @Input() activeidx;

  left:number;
  top:number;
  width:number;
  height:number;
  opacity:number;


  ngOnInit() {

    let pos=this.getCardPosition();


    this.top      = pos.top;
    this.left     = pos.left;
    this.width    = this.config.cardWidth;
    this.height   = this.config.cardHeight;
    this.opacity  = this.activeidx == this.card.idx ? 1 : 0.3;


  }

  ngOnChanges(changes: SimpleChanges) {

    let pos=this.getCardPosition();

    this.left     = pos.left;
    this.top      = pos.top;
    this.opacity  = this.card.idx > this.activeidx ? 0.3 : 1;

  }

  getCardPosition()
  {
    let left = this.card.idx * ( this.config.cardWidth + this.config.cardPadding) + 100;
    let top  = this.config.cardTop;

    if(this.card.bidx != null)
    {
      left = this.card.bidx * ( this.config.bucketWidth + this.config.bucketPadding) + 30;
      top  = this.config.bucketTop + 30;
    }

    return{left:left,top:top}

  }


}
