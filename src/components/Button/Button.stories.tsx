import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import Button from './index';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    fullWidth: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    className: {
      type: 'string',
    },
    outlined: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...args} />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});

export const PrimaryWithIcon = Template.bind({});

Primary.args = {
  children: 'Primary',
  variant: 'primary',
  fullWidth: false,
  outlined: false,
  disabled: false,
  type: 'button',
  className: '',
};

PrimaryWithIcon.args = {
  ...Primary.args,
};
