import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'src/components';
import { theme } from 'src/theme';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    outline: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...args}>Hello Button</Button>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  outline: false,
};
