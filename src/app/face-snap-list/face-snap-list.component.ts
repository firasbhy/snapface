import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import {FaceSnapsServices} from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps! :FaceSnap[];
  constructor(private fs: FaceSnapsServices) { }

  ngOnInit(): void 
  {
     this.faceSnaps= this.fs.faceSnaps;
   
  }

}
