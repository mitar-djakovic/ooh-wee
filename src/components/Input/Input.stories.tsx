import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import Input from './index';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    placeholder: {
      type: 'string',
    },
    label: {
      type: 'string',
    },
    status: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    className: {
      type: 'string',
    },
    fullWidth: {
      type: 'boolean',
    },
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Input {...args} />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  fullWidth: false,
  id: 'id',
  name: 'name',
  type: 'text',
  className: '',
};
