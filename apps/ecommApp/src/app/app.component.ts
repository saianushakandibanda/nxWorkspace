import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from "./main-nav/main-nav.component";
import { getCategories, selectCategories} from "@nx-workspace/category";
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NxWelcomeComponent, RouterModule, MainNavComponent, CommonModule]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(getCategories())
      
  }
  constructor(private readonly store: Store){}

  title = 'ecommApp';

  categoriesData$ = this.store.select(selectCategories)
  
}
