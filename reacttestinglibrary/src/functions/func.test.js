import { replaceCamelWSpace } from "./func";
import '@testing-library/jest-dom/extend-expect';

describe('Testing the regex function with jest', () => {
    test('Test for Red color', () => {
        expect(replaceCamelWSpace('Red')).toBe('Red')
    })
    test('Test for Royal Blue color', () => {
        expect(replaceCamelWSpace('RoyalBlue')).toBe('Royal Blue')
    })
    test('Test for Midnight Dark Red color', () => {
        expect(replaceCamelWSpace('MidnightDarkRed')).toBe('Midnight Dark Red')
    })
})