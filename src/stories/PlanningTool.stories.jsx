import React from 'react'
import PlanningTool from '../components/PlanningTool'
import moment from 'moment'

export default {
  component: PlanningTool,
  title: 'Planning tool',
  parameters: {
    actions: {
      handles: ['click .rct-item'],
    },
  },
}

const groups = [
  {
    "id": 0,
    "title": "",
    "hasChildren": true,
    "parent": null,
    "open": true,
    "show": true,
    "level": 0
  },
  {
    "id": 1,
    "title": "aircraft 111",
    "hasChildren": true,
    "parent": 0,
    "open": false,
    "show": true,
    "level": 1
  },
  {
    "id": 2,
    "title": "Fuselage",
    "hasChildren": true,
    "parent": 1,
    "open": false,
    "show": false,
    "level": 2
  },
  {
    "id": 6,
    "title": "FWD/AFT Wet Area",
    "hasChildren": true,
    "parent": 1,
    "open": false,
    "show": false,
    "level": 2
  },
  {
    "id": 8,
    "title": "Cockpit",
    "hasChildren": true,
    "parent": 1,
    "open": false,
    "show": false,
    "level": 2
  },
  {
    "id": 15,
    "title": "Interior Body",
    "hasChildren": true,
    "parent": 1,
    "open": false,
    "show": false,
    "level": 2
  },
  {
    "id": 23,
    "title": "-",
    "hasChildren": true,
    "parent": 1,
    "open": false,
    "show": false,
    "level": 2
  },
  {
    "id": 3,
    "title": "AVIO",
    "hasChildren": true,
    "parent": 2,
    "open": false,
    "show": false,
    "level": 3
  },
  {
    "id": 7,
    "title": "AVIO",
    "hasChildren": false,
    "parent": 6,
    "open": false,
    "show": false,
    "level": 3
  },
  {
    "id": 9,
    "title": "MECH-ENG",
    "hasChildren": true,
    "parent": 8,
    "open": false,
    "show": false,
    "level": 3
  },
  {
    "id": 12,
    "title": "ENG",
    "hasChildren": true,
    "parent": 8,
    "open": false,
    "show": false,
    "level": 3
  },
  {
    "id": 16,
    "title": "AVIO",
    "hasChildren": true,
    "parent": 15,
    "open": false,
    "show": false,
    "level": 3
  },
  {
    "id": 19,
    "title": "AVIO",
    "hasChildren": false,
    "parent": 8,
    "open": false,
    "show": false,
    "level": 3
  },
  {
    "id": 22,
    "title": "INT",
    "hasChildren": false,
    "parent": 8,
    "open": false,
    "show": false,
    "level": 3
  },
  {
    "id": 24,
    "title": "-",
    "hasChildren": false,
    "parent": 23,
    "open": false,
    "show": false,
    "level": 3
  },
  {
    "id": 4,
    "title": "mechanic 7",
    "parent": 3,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 5,
    "title": "mechanic 6",
    "parent": 3,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 10,
    "title": "mechanic 4",
    "parent": 9,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 11,
    "title": "mechanic 3",
    "parent": 9,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 13,
    "title": "mechanic 9",
    "parent": 12,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 14,
    "title": "mechanic 8",
    "parent": 12,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 17,
    "title": "mechanic 6",
    "parent": 16,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 18,
    "title": "mechanic 7",
    "parent": 16,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 20,
    "title": "mechanic 1",
    "parent": 9,
    "open": false,
    "show": false,
    "level": 4
  },
  {
    "id": 21,
    "title": "mechanic 2",
    "parent": 9,
    "open": false,
    "show": false,
    "level": 4
  }
]
const items = [
  {
    "id": 1,
    "group": 0,
    "start": moment("2022-03-28T05:00:00.000Z"),
    "end": moment("2022-04-02T20:05:00.000Z"),
    "highlight": false,
    "canMove": false,
    "canResize": "right",
    "minimumDuration": false
  },
  {
    "id": 2,
    "group": 1,
    "title": "phase 3",
    "start": moment("2022-03-28T09:00:00.000Z"),
    "end": moment("2022-03-29T15:00:00.000Z"),
    "parent": 1,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 3,
    "group": 2,
    "title": "Servicing",
    "start": moment("2022-03-28T09:00:00.000Z"),
    "end": moment("2022-03-29T15:00:00.000Z"),
    "parent": 2,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false,
    "selected": true
  },
  {
    "id": 4,
    "group": 3,
    "title": "342200-02-1-000\nSTANDBY ALTITUDE AND HEADING",
    "start": moment("2022-03-28T09:00:00.000Z"),
    "end": moment("2022-03-31T04:38:00.000Z"),
    "parent": 3,
    "className": "item",
    "bgColor": "#aa0000",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false,
    "dependency": 3,
    "selected": true
  },
  {
    "id": 5,
    "group": 4,
    "title": null,
    "start": moment("2022-03-28T14:30:00.000Z"),
    "end": moment("2022-03-30T21:35:00.000Z"),
    "parent": 4,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false,
    "dependency": 3,
    "selected": true
  },
  {
    "id": 6,
    "group": 5,
    "title": null,
    "start": moment("2022-03-28T12:00:00.000Z"),
    "end": moment("2022-03-28T13:30:00.000Z"),
    "parent": 4,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": true,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 7,
    "group": 1,
    "title": "phase 1",
    "start": moment("2022-03-28T05:00:00.000Z"),
    "end": moment("2022-04-02T20:05:00.000Z"),
    "parent": 1,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 8,
    "group": 6,
    "title": "Optional Check",
    "start": moment("2022-03-30T07:00:00.000Z"),
    "end": moment("2022-03-31T03:00:00.000Z"),
    "parent": 7,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 9,
    "group": 7,
    "title": "527300-01-1-210\nEMERGENCY ESCAPE SLIDE RELEASE AND OVERPRESSURE WARNING SYSTEMS",
    "start": moment("2022-03-30T07:00:00.000Z"),
    "end": moment("2022-03-31T03:00:00.000Z"),
    "parent": 8,
    "className": "item",
    "bgColor": "#00aa00",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "right",
    "minimumDuration": false
  },
  {
    "id": 10,
    "group": 8,
    "title": "Check",
    "start": moment("2022-03-28T05:00:00.000Z"),
    "end": moment("2022-03-29T11:00:00.000Z"),
    "parent": 7,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 11,
    "group": 9,
    "title": "291000-20-1-600\nHYDRAULIC FIRE SHUT OFF VALVES",
    "start": moment("2022-03-28T05:00:00.000Z"),
    "end": moment("2022-03-29T11:00:00.000Z"),
    "parent": 10,
    "className": "item",
    "bgColor": "#00aa00",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 12,
    "group": 10,
    "title": null,
    "start": moment("2022-03-28T12:00:00.000Z"),
    "end": moment("2022-03-28T12:30:00.000Z"),
    "parent": 11,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 13,
    "group": 11,
    "title": null,
    "start": moment("2022-03-28T05:30:00.000Z"),
    "end": moment("2022-03-28T06:00:00.000Z"),
    "parent": 11,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 14,
    "group": 8,
    "title": "Functional Check",
    "start": moment("2022-03-28T10:00:00.000Z"),
    "end": moment("2022-03-29T16:00:00.000Z"),
    "parent": 7,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 15,
    "group": 12,
    "title": "291000-10-1-500\nHYDRAULIC FIRE SHUT OFF VALVES",
    "start": moment("2022-03-28T10:00:00.000Z"),
    "end": moment("2022-03-29T16:00:00.000Z"),
    "parent": 14,
    "className": "item",
    "bgColor": "#aa0000",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 16,
    "group": 13,
    "title": null,
    "start": moment("2022-03-28T10:15:00.000Z"),
    "end": moment("2022-03-28T10:45:00.000Z"),
    "parent": 15,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 17,
    "group": 14,
    "title": null,
    "start": moment("2022-03-28T10:00:00.000Z"),
    "end": moment("2022-03-28T11:30:00.000Z"),
    "parent": 15,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 18,
    "group": 15,
    "title": "Functional Check",
    "start": moment("2022-03-28T16:00:00.000Z"),
    "end": moment("2022-03-29T10:00:00.000Z"),
    "parent": 7,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 19,
    "group": 16,
    "title": "341300-07-1-210\nAIR DATA",
    "start": moment("2022-03-28T16:00:00.000Z"),
    "end": moment("2022-03-29T10:00:00.000Z"),
    "parent": 18,
    "className": "item",
    "bgColor": "#00aa00",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 20,
    "group": 17,
    "title": null,
    "start": moment("2022-03-28T16:00:00.000Z"),
    "end": moment("2022-03-28T17:00:00.000Z"),
    "parent": 19,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 21,
    "group": 18,
    "title": null,
    "start": moment("2022-03-28T17:15:00.000Z"),
    "end": moment("2022-03-28T21:15:00.000Z"),
    "parent": 19,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 22,
    "group": 8,
    "title": "Optional Check",
    "start": moment("2022-03-28T05:00:00.000Z"),
    "end": moment("2022-04-02T20:05:00.000Z"),
    "parent": 7,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 23,
    "group": 12,
    "title": "282100-03-1-210\nMAIN FUEL PUMP SYSTEM",
    "start": moment("2022-04-01T14:05:00.000Z"),
    "end": moment("2022-04-02T20:05:00.000Z"),
    "parent": 22,
    "className": "item",
    "bgColor": "#00aa00",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 24,
    "group": 19,
    "title": "262200-02-1-210\nAPU FIRE EXTINGUISHING",
    "start": moment("2022-03-31T14:00:00.000Z"),
    "end": moment("2022-04-02T02:00:00.000Z"),
    "parent": 22,
    "className": "item",
    "bgColor": "#00aa00",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 25,
    "group": 9,
    "title": "291000-20-1-210\nMAIN/AUXILIARY POWER",
    "start": moment("2022-03-28T05:00:00.000Z"),
    "end": moment("2022-03-30T05:00:00.000Z"),
    "parent": 22,
    "className": "item",
    "bgColor": "#00aa00",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 26,
    "group": 20,
    "title": null,
    "start": moment("2022-03-28T05:00:00.000Z"),
    "end": moment("2022-03-28T06:00:00.000Z"),
    "parent": 25,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 27,
    "group": 21,
    "title": null,
    "start": moment("2022-03-28T05:00:00.000Z"),
    "end": moment("2022-03-28T07:00:00.000Z"),
    "parent": 25,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 28,
    "group": 22,
    "title": "213100-03-1-210\nCHECK OF OUTFLOW VALVE CLOSING IN DITCHING CONFIGURATION",
    "start": moment("2022-03-30T07:30:00.000Z"),
    "end": moment("2022-03-30T07:30:00.000Z"),
    "parent": 22,
    "className": "item",
    "bgColor": "#00aa00",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 29,
    "group": 1,
    "title": "-",
    "start": moment("2022-03-30T05:00:00.000Z"),
    "end": moment("2022-04-01T17:00:00.000Z"),
    "parent": 1,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 30,
    "group": 23,
    "title": "-",
    "start": moment("2022-03-30T05:00:00.000Z"),
    "end": moment("2022-04-01T17:00:00.000Z"),
    "parent": 29,
    "className": "item",
    "bgColor": "#2196F3",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": true,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 31,
    "group": 24,
    "title": "499100-B4-1-300\nSTORAGE AND DISTRIBUTION",
    "start": moment("2022-03-30T05:00:00.000Z"),
    "end": moment("2022-04-01T17:00:00.000Z"),
    "parent": 30,
    "className": "item",
    "bgColor": "#0000aa",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  },
  {
    "id": 32,
    "group": 19,
    "title": "Test item",
    "start": moment("2022-04-28T05:00:00.000Z"),
    "end": moment("2022-04-30T17:00:00.000Z"),
    "parent": 30,
    "className": "item",
    "bgColor": "#0000aa",
    "color": "#fff",
    "selectedBgColor": "#FFC107",
    "selectedColor": "#000",
    "draggingBgColor": "#f00",
    "highlightBgColor": "#FFA500",
    "highlight": false,
    "canMove": false,
    "canResize": "both",
    "minimumDuration": false
  }
]

const Template = (args) => <PlanningTool {...args} />

export const _default = Template.bind({})
_default.args = {
  groups: groups,
  items: items,
}