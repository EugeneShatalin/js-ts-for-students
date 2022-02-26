import {sum, mult, splitIntoWords} from './1'

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {

    const result1 = sum(a, b);
    const result2 = sum(c, b);

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('multiply should be correct', () => {

    const result1 = mult(a, b);
    const result2 = mult(c, b);

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('splitting into words should be correct', () => {
    const sent1 = 'Hello my friend!';
    const sent2 = 'JS - the best programming language.';

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3)
    expect(result2.length).toBe(5)
    expect(result1).toStrictEqual(['hello', 'my', 'friend'])
    expect(result2).toStrictEqual(['js', 'the', 'best', 'programming', 'language'])
})