function function1(a, b) {
  if (a === undefined) {
    console.log('a is undefined');
  } else {
    console.log(a);
  }

  if (b === undefined) {
    console.log('b is undefined');
  } else {
    console.log(b);
  }
}

function1();
function1('A');
function1(undefined, 'B');
