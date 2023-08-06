import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LangService } from 'src/shared/services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public formControl = new FormControl<string>('FR');

  constructor(private languageService: LangService) {
    console.log(this.languageService.toto);
  }

  ngOnInit() {}
}
