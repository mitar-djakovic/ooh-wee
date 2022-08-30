import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from 'src/components';
import { theme } from 'src/theme';
import { ThemeProvider } from 'styled-components';

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
