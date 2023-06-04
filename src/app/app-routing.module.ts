import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  //Redirect Routes
  {
    path: environment.frontendPrefix,
    redirectTo: `${environment.frontendPrefix}/campaigns`, 
    pathMatch: 'full',
    data: {name: 'start'}
  },
	{
		path: "",
		redirectTo: `${environment.frontendPrefix}/campaigns`, 
		pathMatch: 'full',
		data: {name: 'start'}
	},
	{
    path: `${environment.frontendPrefix}/home`,
		redirectTo: `${environment.frontendPrefix}/campaigns`, 
		pathMatch: "full",
		data: {name: "no-campaigns"}
	},
  {
    path: '',
    loadChildren: () => import('./campaign/campaign.module').then(m => m.CampaignModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
