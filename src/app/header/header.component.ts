import { Component } from '@angular/core';
import { BackEndService } from '../back-end.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private backendservices: BackEndService) { }
  ngOnInt(): void{ }

  onSave() {
    this.backendservices.saveData();
  }
  onFetch() {
    this.backendservices.fetchData();
  }
}
