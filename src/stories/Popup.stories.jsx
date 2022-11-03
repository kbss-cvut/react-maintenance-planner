//Story with custom detail popup

import React from 'react'
import PlanningTool from '../components/PlanningTool'
import CustomPopup from './components/CustomPopup'

import {items, groups} from "./assets/dataTest";

export default {
  component: PlanningTool,
  title: 'Custom popup',
  parameters: {
    actions: {
      handles: ['click .rct-item'],
    },
  },
}

const CustomPopupTemplate = (args) => <PlanningTool {...args} />

export const customPopup = CustomPopupTemplate.bind({})
customPopup.args = {
  groups: groups,
  items: items,
  popup: CustomPopup,
}

