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
      return prev + (n % current === 0 ? possibleOutcomes[current].toString() : '')
    }, '') || n
}
