import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  templateUrl: './smal-card.component.html',
  styleUrls: ['./smal-card.component.css','responsivo-smal-card.component.css']
})
export class SmalCardComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardDescription:string = ""

  @Input()
  id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}



