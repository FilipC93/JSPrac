import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Cart from "./Cart";

const MockedComponent = ({ cartQuantity }) => {
    return <Cart cartQuantity={cartQuantity} />
}

describe('Cart component', () => {
    it('should show empty', () => {
        render(<MockedComponent cartQuantity={[]} />)
        expect(screen.getByText(/no items are added/i)).toBeInTheDocument()
    })
    it('should show one item', () => {
        render(<MockedComponent cartQuantity={[{
            name: 'whatever', image: 'thispng'
        }]} />)
        expect(screen.getByText(/cart items:/i)).toBeInTheDocument()
    })
})