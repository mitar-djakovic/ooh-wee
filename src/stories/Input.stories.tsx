import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'src/components';
import { theme } from 'src/theme';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    placeholder: {
      type: 'string',
    },
    outline: {
      type: 'boolean',
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
  placeholder: 'Input placeholder',
  outline: true,
};
