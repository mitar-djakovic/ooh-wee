import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
    };
  }
}

export const theme: Theme = {
  colors: {
    primary: 'hotpink',
  },
};
