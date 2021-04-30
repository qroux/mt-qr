import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CardComponent } from './pages/home/components/card/card.component';
import { ColumnComponent } from './pages/home/components/column/column.component';
import { DialogComponent } from './pages/home/components/dialog/dialog.component';

// Material UI
import { MaterialModule } from './material/material.module';

// UTILS
import { TicketFilterPipe } from './pipes/ticket-filter.pipe';
import { TicketsRefetchService } from './services/ticketsRefetch.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    TicketFilterPipe,
    ColumnComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [TicketsRefetchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
