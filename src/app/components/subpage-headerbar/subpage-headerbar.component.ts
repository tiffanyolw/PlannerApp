import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subpage-headerbar',
  templateUrl: './subpage-headerbar.component.html',
  styleUrls: ['./subpage-headerbar.component.scss'],
})
export class SubpageHeaderbarComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
