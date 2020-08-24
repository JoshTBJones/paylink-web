import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FizzBuzzComponent } from './components/fizz-buzz/fizz-buzz.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'fizz-buzz', component: FizzBuzzComponent },
  { path: 'fibonacci', component: FibonacciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
