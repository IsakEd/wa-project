/// <reference types="astro/client" />
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}

        interface Todo {
            name: string;
            properties: TodoProperties;
            dateCreated: Date;
            id: number;
            done: boolean;
            deadline?: Date;
        }

        type TodoProperties = [] | Array<'urgent' | 'hard' | 'passion'>;

        interface Course {
            name: string;
            code?: string;
            exams?: Exam[];
        }
        interface Exam {
            date: Date;
            Course: Course;
            credits?: number;
            type?: string;
        }
        interface Project {
            name: string;
            description?: string;
            collaborators?: string[];
        }

        interface Deliverable {
            name: string;
            deadline: Date;
        }
    }
}