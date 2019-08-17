/** Map stores data in key value pair */
const map = new Map([['xs', 1], ['sm', 2], ['md', 3], ['lg', 4], ['xl', 5]]);
/** Adding new key value pair to map */
map.set('hd', 6);

/** Retrieve particular key value pair from map */
let smValue = map.get('sm');
console.log(`sm = ${smValue}`);

/** Iterating map using forEach */
map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

console.log(map.size);
