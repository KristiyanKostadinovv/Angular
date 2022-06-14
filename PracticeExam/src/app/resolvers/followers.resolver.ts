import {Injectable} from "@angular/core";
import {FollowersService} from "../services/followers.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {FollowerModel} from "../models/follower.model";
import {Observable} from "rxjs";


@Injectable({providedIn: "root"})
export class FollowersResolver implements Resolve<Observable<FollowerModel[]>> {

  constructor(private readonly followersService: FollowersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FollowerModel[]> {
    return this.followersService.getFollowers();
  }
}
