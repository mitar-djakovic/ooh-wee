import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Button } from '../components';
import { theme } from '../theme';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    label: {
      type: 'string',
    },
    size: {
      type: 'string',
    },
    outline: {
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

Primary.args = {
  label: 'Button',
  size: 'medium',
  outline: false,
};
