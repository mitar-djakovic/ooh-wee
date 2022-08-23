const defaultBreakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

const device = {
  xs: `(min-width: ${defaultBreakpoints.xs})`,
  sm: `(min-width: ${defaultBreakpoints.sm})`,
  md: `(min-width: ${defaultBreakpoints.md})`,
  lg: `(min-width: ${defaultBreakpoints.lg})`,
  xl: `(min-width: ${defaultBreakpoints.xl})`,
  xxl: `(min-width: ${defaultBreakpoints.xxl})`,
};

export { defaultBreakpoints, device };
