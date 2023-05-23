import { writable } from 'svelte/store';
const todo_template = [
    {
        name: 'Send cookies to outer space',
        properties: ['passion', 'hard', 'urgent'],
        dateCreated: new Date('2022-03-25'),
        id: 1,
        done: false,
        deadline: new Date('2023-01-25')
    },
    {
        name: 'Get ready to rumble',
        properties: ['passion', 'hard'],
        dateCreated: new Date('2022-03-25'),
        id: 2,
        done: true
    },
    {
        name: 'Scramble the big eggs',
        properties: ['urgent'],
        dateCreated: new Date('2022-03-25'),
        id: 3,
        done: false
    }
];
export const todos = writable(todo_template);
