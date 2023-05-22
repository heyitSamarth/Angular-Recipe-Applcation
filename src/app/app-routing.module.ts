import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: ':id/:name', component:HomeComponent  },
  {
    path: 'recipe',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent , pathMatch: 'full'},
      { path: 'new', component: RecipesComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeDetailComponent },
    ],
    // canActivate:["takes differnt guards"]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,data:{message:'404 Page Not Found '}
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
