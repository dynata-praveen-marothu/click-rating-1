import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  @Input()  bucket;
  @Input()  config;

  @Output() bucketClick = new EventEmitter;

  left:number;
  top:number;
  width:number;
  height:number;


  ngOnInit() {

    this.top    = this.config.bucketTop;
    this.left   = this.bucket.idx * ( this.config.bucketWidth + this.config.bucketPadding ) + 25;
    this.width  = this.config.bucketWidth;
    this.height = this.config.bucketHeight;

    console.log(this.left);

  }

  onBucketClicked(){
    this.bucketClick.emit( { idx: this.bucket.idx } )
  }

}
