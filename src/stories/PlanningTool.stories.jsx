import React from "react";
import PlanningTool from "../components/PlanningTool";
import { items, groups } from "./assets/dataTest";

export default {
  component: PlanningTool,
  title: 'Planning tool',
  parameters: {
    actions: {
      handles: ['click .rct-item'],
    },
  },
};

const Template = (args) => {
  return <PlanningTool {...args} />;
};

export const _default = Template.bind({});
_default.args = {
  groups: groups,
  items: items,
}