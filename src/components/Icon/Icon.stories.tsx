import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import Icon from './index';

export default {
  title: 'Component/Icon',
  component: Icon,
  argTypes: {
    size: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Icon {...args} />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  name: 'envelope',
  size: '1.6rem',
  color: '#000',
};
