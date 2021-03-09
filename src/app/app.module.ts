import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatProgressBarModule, MatTableModule } from '@angular/material';
import { IconcardDashboardComponent } from './Dashboard/iconcard-dashboard/iconcard-dashboard.component';
import { CardDashboardComponent } from './Dashboard/card-dashboard/card-dashboard.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { Graph1DashboardComponent } from './Dashboard/graph1-dashboard/graph1-dashboard.component';
import { CardwithgraphDashboardComponent } from './Dashboard/cardwithgraph-dashboard/cardwithgraph-dashboard.component';
import { ProgressCircleComponent } from './Dashboard/progress-circle/progress-circle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CardFaceBookIconComponent } from './Dashboard/card-face-book-icon/card-face-book-icon.component';
import { SocialNetworkIconComponent } from './Dashboard/social-network-icon/social-network-icon.component';
import { ActivityComponentComponent } from './Dashboard/activity-component/activity-component.component';
import { ActivityCardComponentComponent } from './Dashboard/activity-card-component/activity-card-component.component';
import { RowIconComponent } from './Dashboard/row-icon/row-icon.component';
import { SalesCardComponent } from './Dashboard/sales-card/sales-card.component';
import { SalesCardDataComponent } from './Dashboard/sales-card-data/sales-card-data.component';
import { TableDasboardComponent } from './Dashboard/table-dasboard/table-dasboard.component';
import { LittleTableDasboardComponent } from './Dashboard/little-table-dasboard/little-table-dasboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IconcardDashboardComponent,
    CardDashboardComponent,
    Graph1DashboardComponent,
    CardwithgraphDashboardComponent,
    ProgressCircleComponent,
    CardFaceBookIconComponent,
    SocialNetworkIconComponent,
    ActivityComponentComponent,
    ActivityCardComponentComponent,
    RowIconComponent,
    SalesCardComponent,
    SalesCardDataComponent,
    TableDasboardComponent,
    LittleTableDasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    ChartsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatTableModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
