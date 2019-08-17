const breakpoint: { [size: string]: number } = {
  ['xs']: 1,
  ['sm']: 2
};

/** Outputs the respective number */
console.log(`sm = ${breakpoint['sm']}`);
