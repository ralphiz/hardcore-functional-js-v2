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


  const curry = f =>
    x => y => f(x, y);

  const uncurry = f =>
    (x, y) => f(x)(y);

  const curriedAdd = curry(add);
  const curriedInc = curriedAdd(1)
  const curriedIncResult = curriedInc(2)
  console.log('curriedIncResult', curriedIncResult)


  const modulo = curry((x, y) => y % x)
  /**
   * This pre-loads modulo with one of it's arguments.
   * In this case the value '2' is given to x
   * Then the function 'isOdd' to given to y
   */
  const isOdd = modulo(2) // (2, y) => 2 % y

  console.log(Boolean(isOdd(1)));