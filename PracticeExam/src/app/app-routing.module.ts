import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FollowusComponent} from "./components/followus/followus.component";
import {PricingComponent} from "./components/pricing/pricing.component";
import {TableComponent} from "./components/pricing/table/table.component";
import {FollowersComponent} from "./components/followers/followers.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "followus", component: FollowusComponent},
  {path: "pricing", component: PricingComponent},
  {path: "followers", component: FollowersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, FollowusComponent, PricingComponent, TableComponent];
