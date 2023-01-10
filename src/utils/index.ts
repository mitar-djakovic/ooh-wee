const handleStatus = (touched?: boolean, error?: string): string | void => {
  if (touched && error) {
    return 'error';
  }
  if (touched && !error) {
    return 'success';
  }
};

export { handleStatus };
