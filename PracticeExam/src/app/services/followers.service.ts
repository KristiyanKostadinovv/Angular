import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FollowerModel} from "../models/follower.model";
import {map} from "rxjs";

const URL = "https://exam-6734d-default-rtdb.europe-west1.firebasedatabase.app/followers.json";

@Injectable({providedIn: "root"})
export class FollowersService {
  constructor(private http: HttpClient) {
  }

  createAndSaveFollower(title: string, name: string, email: string, country: string, notification_frequency: string, t_and_c: boolean) {
    const follower: FollowerModel = {
      country: country,
      email: email,
      name: name,
      notification_frequency: notification_frequency,
      t_and_c: t_and_c,
      title: title
    }
    this.http.post(URL, follower).subscribe();
  }

  getFollowers() {
    return this.http.get<{ [key: string]: FollowerModel }>(URL).pipe(
      map((getData: { [key: string]: FollowerModel }) => {
        const followersArray: FollowerModel[] = [];
        for (const key in getData) {
          if (getData.hasOwnProperty(key)) {
            followersArray.push({...getData[key], id: key});
          }
        }
        return followersArray;
      })
    );
  }

  deleteFollowers() {
    return this.http.delete(URL);
  }
}
