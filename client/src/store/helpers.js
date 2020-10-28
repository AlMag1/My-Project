export const asyncTypes = type => {
  return {
    [type]: {
      START: `${type}_START`,
      SUCCESS: `${type}_SUCCESS`,
      ERROR: `${type}_ERROR`
    }
  };
};
