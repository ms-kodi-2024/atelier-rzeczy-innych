export const isValidIntegerInRange = (val, min, max) => {
  const num = Number(val);
  return Number.isInteger(num) && num >= min && num <= max;
};
