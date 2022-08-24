import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Typography } from '../components';
import { theme } from '../theme';

export default {
  title: 'Component/Typography',
  component: Typography,
  argTypes: {
    variant: {},
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography {...args}>Hello</Typography>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  variant: 'h1',
};
