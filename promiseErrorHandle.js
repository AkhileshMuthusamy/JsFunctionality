function main() {
  return new Promise((resolve, reject) => {
    resolve();
    // reject('error from main()');
  });
}

main()
  .then(() => {
    console.log('main() resolved');
    // Introducing syntatic error
    // asdf;

    // Introducing logical error
    err = true;
    if (err) {
      return Promise.reject('Error from then()');
    }
  })
  .then(() => {
    console.log('then()-1 resolved ');
  })
  .catch(err => {
    console.log(err);
  });
