import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DataBindingComponent implements OnInit {
  title: string = 'This is a title';
  name: string = 'Ingrid';
  nameeventbinding = 'Peter';
  buttonDisabled = true;
  constructor() {}

  ngOnInit() {}

  updateName() {
    this.nameeventbinding = 'Lars';
  }
}
