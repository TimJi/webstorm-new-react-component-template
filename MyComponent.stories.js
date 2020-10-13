import React from 'react';
import MyComponent from './index';

export default {
  title: "Components/MyComponent",
  component: MyComponent,
  argTypes: {
    // Control
    // https://storybook.js.org/docs/react/api/argtypes
    someProp: {
      name: "someProp",
      type: { name: "string", required: false },
      defaultValue: "bala",
      description: "someProp description",
      table: {
        type: {
          summary: "someProp short description",
          detail: "someProp really long description"
        }
      },
      control: { type: "text" }
    }
  }
}

const Template = props => <MyComponent {...props} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: "Button"
}
