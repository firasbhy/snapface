import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable(
{
    providedIn:'root'
})
export class FaceSnapsServices 
{
    faceSnaps:FaceSnap[]=  [{
        title: 'premiere snap',
       description:'la  premiere essaie',
       
       imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       createdDate:new Date(),
       snaps:155
       
      },
      {
         title:'2éme snap',
       description:'la  premiere essaie',
       
       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
       createdDate:new Date(),
       snaps:115,
       location:"Djerba"
       
       },
      {
         title:'3éme snap',
       description:'la  premiere essaie',
       
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
       snaps:90,
       location:"Paris"
       }];
}