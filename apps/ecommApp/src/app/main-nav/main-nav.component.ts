import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getCategories, selectCategories, setCurrentCategory } from '@nx-workspace/category';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    CommonModule,
    RouterLink,
    RouterOutlet

  ]
})
export class MainNavComponent implements OnInit{

  private breakpointObserver = inject(BreakpointObserver);

  constructor(public store: Store){}

  ngOnInit(): void {
    this.store.dispatch(getCategories())
  }

  setCategory(cat:string){
    this.store.dispatch(setCurrentCategory({category:cat}))
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    categoriesData$ = this.store.select(selectCategories)
}
