import React from "react";
import Header from "./Header";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

const MockedComponent = () => {
    return <Header />
}

describe('Header component', () => {
    it('should render header initial state', () => {
        render(<MockedComponent />);
        expect(screen.getByText(/electronics/i)).toBeInTheDocument();
    })
})