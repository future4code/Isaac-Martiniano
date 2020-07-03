import { User } from "./User";

export class Teacher implements User{
    constructor(
        public id: string,
        public name: string,
        public email: string,        
        private specialties: TEACHER_SPECIALTY[]
    ) {}
}

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "CSS",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND"
}