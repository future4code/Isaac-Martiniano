import { User } from "./User";
import moment from 'moment'

export class Students implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        private birthDate: moment.Moment,
        private hobbies: string[]
    ) {}

    public getAge() {
        return moment().diff(this.birthDate, "years")
    }
}