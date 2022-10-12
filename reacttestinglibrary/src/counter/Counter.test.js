import React from "react";
import Counter from "./Counter";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('My counter runs properly', () => {
    const { getByTestId } = render(<Counter />);
    const headerElement = getByTestId('header');
    expect(headerElement.textContent).toEqual("My Counter");
});
test('Starting value for counter', () => {
    const { getByTestId } = render(<Counter />);
    const counterElement = getByTestId('counter');
    expect(counterElement.textContent).toBe('0');
});
test('add button renders with correct plus sign', () => {
    const { getByTestId } = render(<Counter />);
    const addButton = getByTestId('add-button');
    expect(addButton.textContent).toBe("+");
});
test('minus button renders with correct minus sign', () => {
    const { getByTestId } = render(<Counter />);
    const minusButton = getByTestId('minus-button');
    expect(minusButton.textContent).toBe("-");
});
test('input contains initial value of 1', () => {
    const { getByTestId } = render(<Counter />);
    const inpuElement = getByTestId('input');
    expect(inpuElement.textContent).toEqual('1');
});
