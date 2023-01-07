import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import Container from './index';

export default {
  title: 'Component/Container',
  component: Container,
  argTypes: {
    display: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Container {...args}>
        <div style={{ backgroundColor: 'orange', width: '100%' }}>Content</div>
      </Container>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  display: 'block',
};
