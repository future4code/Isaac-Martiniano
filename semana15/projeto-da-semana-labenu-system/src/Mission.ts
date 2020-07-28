import { Teacher } from "./Teacher";
import { Students } from "./Students";
import moment from 'moment';

export abstract class Mission {
    private name: string = "";
    constructor(
        private id: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[],
        private students: Students[],
        private currentModule?: number
    ) {}

    public setName(name:string) {
        this.name = name;
    }

    public addStudent(student: Students) {
        this.students.push(student)
    }

    public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher)
    }
}