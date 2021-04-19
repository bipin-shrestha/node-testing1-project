const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  });
  it('[2] returns a copy, leaving the original object intact', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // ✨ test away
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    // ✨ test away 
    const input = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    // ✨ test away
    const input = [1,4,6,10,15];
    const expected = 15;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    // ✨ test away
    const expected = 3;
    const actual = counter.count;
    expect(actual).toEqual(expected);
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    // ✨ test away
    const expected = 2;
    counter.countDown();
    const actual = counter.count;
    expect(actual).toEqual(expected);
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    // ✨ test away
    const expected = 0;
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const actual = counter.count;
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    // ✨ test away
    const expected = "summer";
    const actual = seasons.next();
    expect(actual).toEqual(expected);
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    // ✨ test away
    const expected = "fall";
    seasons.next();
    const actual = seasons.next();
    expect(actual).toEqual(expected);
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    // ✨ test away
    const expected = "winter";
    seasons.next();
    seasons.next();
    const actual = seasons.next();
    expect(actual).toEqual(expected);
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    // ✨ test away
    const expected = "spring";
    seasons.next();
    seasons.next();
    seasons.next();
    const actual = seasons.next();
    expect(actual).toEqual(expected);
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    // ✨ test away
    const expected = "summer";
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    const actual = seasons.next();
    expect(actual).toEqual(expected);
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    // ✨ test away  
    const expected = "spring";
   for( let i = 0;i < 39; i++ ){
     seasons.next();
   }    
    const actual = seasons.next();
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
    focus.drive(100)
    expect(focus.odometer).toEqual(100)
  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
    focus.drive(10000)
      expect(focus.tank).toEqual(0)
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
    focus.tank = 0;
    let miles = focus.refuel(0);
    expect(miles).toEqual(0);
    expect(focus.refuel(5)).toEqual(5*focus.mpg)
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
    let miles = focus.refuel(100);
    expect(miles).toEqual(focus.tank * focus.mpg)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test awaytest

    expect(result).toEqual(false)
  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away

  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
  })
})
