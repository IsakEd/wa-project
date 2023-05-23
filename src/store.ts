import { writable } from 'svelte/store';
import fromLocalStorage from './internal-adapters/fromLocalStorage'

const todo_template = [
    {
        name: 'Send cookies to outer space',
        properties: ['passion', 'hard', 'urgent'],
        dateCreated: new Date('2022-03-25'),
        id: 1,
        done: false,
        deadline: new Date('2023-01-25'),
        parent: {}
    },
    {
        name: 'Get ready to rumble',
        properties: ['passion', 'hard'],
        dateCreated: new Date('2022-03-25'),
        id: 2,
        done: true,
        parent: {}
    },
    {
        name: 'Scramble the big eggs',
        properties: ['urgent'],
        dateCreated: new Date('2022-03-25'),
        id: 3,
        done: false,
        parent: { type: 'course', id: '1' }
    }
];
export const todos = writable(fromLocalStorage("todos", todo_template));


const courses_template = [
    {
        name: 'Web Applications',
        shorthand: 'WA',
        id: 1,
        children: [{ type: 'project', id: 1 }],
        parent: { type: 'area', id: 1 }
    },
    {
        name: 'Electric Vehicles',
        shorthand: 'EV',
        id: 1,
        children: [{ type: 'project', id: 1 }, { type: 'exam', id: 1 }],
        parent: { type: 'area', id: 1 }
    },
];


const projects_template = [
    {
        name: 'Platform task',
        shorthand: 'PF',
        id: 1,
        children: [{ type: 'project', id: 1 }],
        parent: { type: 'course', id: 1 }

    }
];

const areas_template = [
    {
        name: 'studies',
        shortand: 'ST',
        id: 1,
        children: [{ type: 'course', id: 1 }]
    },
    {
        name: 'health',
        shortand: 'H',
        id: 2,
        children: []
    },
]
export const areas = writable(fromLocalStorage("areas", areas_template));
