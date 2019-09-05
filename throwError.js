try {
  console.log('Task Started');
  throw Error('Throughing new error');
  //   console.log('Task completed');
} catch (err) {
  console.error('Error occured:' + err.name + err.message);
}
