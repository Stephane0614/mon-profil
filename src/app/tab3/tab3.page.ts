import { Component } from '@angular/core';
import { Project } from './ModelProject';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ZeldaProject = new Project('ZELDA', 'Breath of the wild', 'open world', 1, "/assets/img/zelda.jpg");
  KirbyProject = new Project('KIRBY', 'and the forgotten land', 'action/aventure',1, '/assets/img/Kirby.jpg');
  MarioProject = new Project('Paper Mario', 'the origami king', 'platforme', 2, '/assets/img/mario.jpg');

  constructor() {}

  public myProject:Array<Project> = [
   this.ZeldaProject, this.KirbyProject, this.MarioProject 
];

}
