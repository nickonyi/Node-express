function firstToLast(str, c) {
  //coding here..

  if (!str.includes(c)) {
    return -1;
  }

  const first = str.indexOf(c);
  const last = str.lastIndexOf(c);

  return last - first;
}

console.log(firstToLast("ababgsgsfc", "c"));
