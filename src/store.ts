import { writable, readable, derived } from "svelte/store";
import fromLocalStorage from "./internal-adapters/fromLocalStorage";

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

// AREAS
const area_template = [
  {
    name: "Training",
    shorthand: "tr",
    goals: [
      {
        name: "120kg bench",
        id: 101,
        measurement: "weight lifted with good form",
        unit: "kilograms",
        dateCreated: new Date("2022-10-03"),

        start: 95,
        current: 112,
        finish: 120,
        deadline: new Date("2023-11-28"),
      },
      {
        name: "20 second L-sit",
        id: 102,
        measurement: "90+ degree L-sit held for at least 20 seconds",
        unit: "subjective",
        dateCreated: new Date("2022-12-25"),

        start: 0,
        current: 4,
        finish: 20,
        deadline: new Date("2023-11-28"),
      },
    ],
    dateCreated: new Date(),

    id: 1,
    image: "training.jpg",
  },
  {
    name: "University",
    shorthand: "uni",
    goals: [
      {
        name: "Really good grades",
        id: 201,
        measurement: "average grade > 4.5",
        dateCreated: new Date("2020-05-05"),
        start: 3.5,
        current: 3.7,
        finish: 4.5,
        unit: "grade point average",
        deadline: new Date("2023-11-28"),
      },
    ],
    dateCreated: new Date("2023-05-20"),

    id: 2,
    image: "education.jpg",
  },
  {
    name: "Life",
    shorthand: "lf",
    goals: [
      {
        name: "Visit 100 countries",
        id: 301,
        measurement: "non-airport time spent in a country",
        unit: "amount",
        dateCreated: new Date("1998-11-28"),

        start: 1,
        current: 24,
        finish: 100,
        deadline: new Date("2078-11-28"),
      },
    ],
    dateCreated: new Date("2023-05-20"),

    id: 3,
    image: "field.avif",
  },
];
export const areas = writable(fromLocalStorage("areas", area_template));

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
