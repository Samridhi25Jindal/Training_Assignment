import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradesComponent } from './grades/grades.component';
import { GradepipePipe } from './gradepipe.pipe';
import { SalaryComponent } from './salary/salary.component';
import { SalpipePipe } from './salpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GradesComponent,
    GradepipePipe,
    SalaryComponent,
    SalpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
