import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup","Kumar","anup.kumar@luv2code.com", 50000),
    new SalesPerson("Quark","Son of Keldar","quark@quarks.biz",60000),
    new SalesPerson("Rom","Son of Keldar","rom@quarks.biz",40000),
    new SalesPerson("Morn","Norm", "morn@quarks.biz", 45000)
  ];

  ngOnInit(): void {
  }

}
