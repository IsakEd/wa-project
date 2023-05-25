import { writable, readable } from "svelte/store";
import fromLocalStorage from "./internal-adapters/fromLocalStorage";
import { log } from "astro/dist/core/logger/core";

const todo_template = [
  {
    name: "Send cookies to outer space",
    properties: ["passion", "hard", "urgent"],
    dateCreated: new Date("2022-03-25"),
    id: 1,
    done: false,
    deadline: new Date("2023-01-25"),
    parent: {},
  },
  {
    name: "Get ready to rumble",
    properties: ["passion", "hard"],
    dateCreated: new Date("2022-03-25"),
    id: 2,
    done: true,
    parent: {},
  },
  {
    name: "Scramble the big eggs",
    properties: ["urgent"],
    dateCreated: new Date("2022-03-25"),
    id: 3,
    done: false,
    parent: { type: "course", id: "1" },
  },
];
export const todos = writable(fromLocalStorage("todos", todo_template));

const courses_template = [
  {
    name: "Web Applications",
    shorthand: "WA",
    id: 1,
    children: [{ type: "project", id: 1 }],
    parent: { type: "area", id: 1 },
  },
  {
    name: "Electric Vehicles",
    shorthand: "EV",
    id: 1,
    children: [
      { type: "project", id: 1 },
      { type: "exam", id: 1 },
    ],
    parent: { type: "area", id: 1 },
  },
];

const projects_template = [
  {
    name: "Platform task",
    shorthand: "PF",
    id: 1,
    children: [{ type: "project", id: 1 }],
    parent: { type: "course", id: 1 },
  },
];

const areas_template = [
  {
    name: "studies",
    shortand: "ST",
    id: 1,
    children: [{ type: "course", id: 1 }],
  },
  {
    name: "health",
    shortand: "H",
    id: 2,
    children: [],
  },
];
export const areas = writable(fromLocalStorage("areas", areas_template));

const goal_template = [
  {
    name: "120kg bench",
    id: 1,
    measurement: "weight lifted with good form",
    unit: "kilograms",
    dateCreated: new Date("2022-10-03"),

    start: 95,
    current: 103,
    finish: 120,
    deadline: new Date("2023-11-28"),
  },
  {
    name: "Really good grades",
    id: 2,
    measurement: "average grade > 4.5",
    dateCreated: new Date("2020-05-05"),
    start: 3.5,
    current: 3.7,
    finish: 4.5,
    unit: "grade point average",
    deadline: new Date("2023-11-28"),
  },
  {
    name: "Lose weight",
    id: 3,
    measurement: "morning weight below 80kgs",
    unit: "kilograms",
    dateCreated: new Date("2022-12-25"),

    start: 92,
    current: 84,
    finish: 80,
    deadline: new Date("2023-11-28"),
  },
];
export const goals = writable(fromLocalStorage("goals", goal_template));
