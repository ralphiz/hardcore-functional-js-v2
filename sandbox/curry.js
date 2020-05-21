  const add = (x, y) => x + y;
  /**
   * add([1,2]) is the same as add(1,2)
   */

  /**
   * Proof:
   */
  const toPair = f =>
    ([x, y]) => f(x, y)

  const toPairResult = toPair(add)([1,2])

  console.log('toPairResult', toPairResult);


  const fromPair = f =>
    (x, y) => f([x, y])

  const fromPairResult = fromPair(toPair(add))(1,2);

  console.log('fromPairResult', fromPairResult);


  const flip = f =>
    (y, x) => f(x, y)

  const flipResult = flip(add)(1,3);

  console.log('flipResult', flipResult);