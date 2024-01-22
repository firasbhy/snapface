import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.css']
})
export class FaceSnapeComponent implements OnInit {

 /* title!:string;
  description!:string;
  createdDate!:Date;
  snaps!:number;
  UrlImage!:string;*/
  @Input() faceSnap!:FaceSnap;
  buttonMessage!:string;

  constructor() { }

  ngOnInit(): void {
   /* this.title='premiere snap';
    this.description='la  premiere essaie';
    this.createdDate=new Date();
    this.snaps=6;
    this.UrlImage='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';*/
    this.buttonMessage="Oh Snap!";
  }

  OhSnap():void
  {
   if(this.buttonMessage=="Oh Snap!")
   {
    this.faceSnap.snaps++;
   this.buttonMessage="Oops, un Snap!";
   }
   else
   {
    this.faceSnap.snaps--;
   this.buttonMessage="Oh Snap!";
   }
  }

}
