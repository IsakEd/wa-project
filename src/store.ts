import { writable, readable } from 'svelte/store';
import fromLocalStorage from './internal-adapters/fromLocalStorage'
import { log } from 'astro/dist/core/logger/core';

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

export const reftree = {
    todo: todos,
    area: areas
}

todos.subscribe(newTodos => {
    const newTodoId = newTodos[newTodos.length - 1].id
    const parentOfNewTodo = newTodos[newTodos.length - 1].parent
    console.log(parentOfNewTodo)
    /*
        switch (parentOfNewTodo.type) {
            case 'area':
                areas.update(areaState => areaState.map((area) => {
                    if (area.id == parentOfNewTodo.id) {
                        console.log("found him");
                        area.children = [...area.children, { type: "todo", id: newTodoId }]
    
                    }
                }
                ))
    
    
        }
    
    */
}
)
function appendChild(parentIdentifier, childIdentifier) {

}

function removeChild(parentIdentifier, childIdentifier) {

}

function modifyByIdentifier(identifier, callback) { // Enters a scope

}

