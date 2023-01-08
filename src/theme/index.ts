import { colors } from './colors';

export const theme = {
  colors: {
    primary: {
      dark: colors.primaryDark,
      main: colors.primaryMain,
      hover: colors.primaryHover,
      light: colors.primaryLight,
      focus: colors.primaryFocus,
      disabled: colors.primaryDisabled,
    },
    secondary: {
      dark: colors.secondaryDark,
      main: colors.secondaryMain,
      hover: colors.secondaryHover,
      light: colors.secondaryLight,
      focus: colors.secondaryFocus,
      disabled: colors.secondaryDisabled,
    },
    success: {
      dark: colors.successDark,
      main: colors.successMain,
      hover: colors.successHover,
      light: colors.successLight,
      focus: colors.successFocus,
      disabled: colors.successDisabled,
    },
    warning: {
      dark: colors.warningDark,
      main: colors.warningMain,
      hover: colors.warningHover,
      light: colors.warningLight,
      focus: colors.warningFocus,
      disabled: colors.warningDisabled,
    },
    error: {
      dark: colors.errorDark,
      main: colors.errorMain,
      hover: colors.errorHover,
      light: colors.errorLight,
      focus: colors.errorFocus,
      disabled: colors.errorDisabled,
    },
    weightColors: {
      bold: '#09101D',
      regular: '#6D7580',
      light: '#09101D',
    },
    random: {
      background: '#CFEBF7',
      black: '#131516',
      grayLight: '#F5F7FA',
      white: '#FFFFFF',
    },
  },
  fonts: {
    primary: 'Inter, sans-serif',
  }, // Design start bellow
  typography: {
    headings: {
      h1: {
        fontSize: '4.2rem',
        lineHeight: '5.1rem',
        fontWeight: 800,
      },
      h2: {
        fontSize: '3.4rem',
        lineHeight: '4.1rem',
        fontWeight: 800,
      },
      h3: {
        fontSize: '2,8rem',
        lineHeight: '3.4rem',
        fontWeight: 800,
      },
      h4: {
        fontSize: '2.4rem',
        lineHeight: '2.9rem',
        fontWeight: 800,
      },
      h5: {
        fontSize: '2rem',
        lineHeight: '2.8rem',
        fontWeight: 800,
      },
      h6: {
        fontSize: '1.8rem',
        lineHeight: '2.4rem',
        fontWeight: 800,
      },
    },
    paragraphs: {
      p1: {
        fontSize: '1.6rem',
        lineHeight: '2.4rem',
        fontWeight: 500,
      },
      p2: {
        fontSize: '1.4rem',
        lineHeight: '2.1rem',
        fontWeight: 500,
      },
      p3: {
        fontSize: '1.2rem',
        lineHeight: '1.8rem',
        fontWeight: 500,
      },
    },
  },
};
