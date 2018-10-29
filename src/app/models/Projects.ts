import { Tech } from "./Tech";
import { Users } from "./Users";

export class Projects {
    projectId: number;
    name: String;
    description: String;
    urlName:String;
    url:String;
    user: Users;
    techs: Tech[];
}