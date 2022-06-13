import {Component, OnInit} from '@angular/core';
import {FollowerModel} from "../../models/follower-model";
import {HttpClient} from "@angular/common/http";
import {FollowersService} from "../../services/followers.service";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  public followers: FollowerModel[] = [];
  public isFetching: boolean = false;

  constructor(private http: HttpClient, private followersService: FollowersService) {
  }

  ngOnInit(): void {
    this.getFollowers();
  }

  private getFollowers(): void {
    this.isFetching = true;
    this.followersService.displayFollowers().subscribe(data => {
      this.isFetching = false;
      this.followers = data;
    });
  }
}
