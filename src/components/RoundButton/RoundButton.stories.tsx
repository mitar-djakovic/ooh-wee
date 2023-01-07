import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import RoundButton from './index';

export default {
  title: 'Component/RoundButton',
  component: RoundButton,
  argTypes: {
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
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <RoundButton {...args} />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  outlined: false,
  disabled: false,
  type: 'button',
  className: '',
};
