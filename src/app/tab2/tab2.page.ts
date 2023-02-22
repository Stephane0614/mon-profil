import { Component } from '@angular/core';
import { Skill } from './ModelSkill';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  skill1 = new Skill('Base de données', 'SQL','DDL');
  skill2 = new Skill('Back-End','Java', 'Spring');
  skill3 = new Skill('Back-End','Java', 'Spring');
  skill4 = new Skill('Mobile','Android', 'ios');
  skill5 = new Skill('DevOps','Docker','Github');

    

  public mySkill:Array<Skill> = [
     
    this.skill1,
    this.skill2,
    this.skill3,
    this.skill4,
    this.skill5
];

  constructor() {}

  

}
