import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from "./main-nav/main-nav.component";
import { selectCategories} from "@nx-workspace/category";
import { Store } from '@ngrx/store';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NxWelcomeComponent, RouterModule, MainNavComponent]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      
  }
  constructor(private readonly store: Store){}

  title = 'ecommApp';

  categoriesData$ = this.store.select(selectCategories)
  
}
