export enum type {
  Fizz = 'fizz',
  Buzz = 'buzz',
  FizzBuzz = 'fizzbuzz'
}

type outcomes = {
  [key: number]: type
}

const possibleOutcomes: outcomes = {
  3: type.Fizz,
  5: type.Buzz
}

export const calc = (n: number): string | number => {
  return Object.keys(possibleOutcomes)
  .map(x => parseInt(x))
  .reduce((prev, current) => {
    return n % current === 0 ? prev + possibleOutcomes[current].toString() : prev + ''
  }, '') || n
}
