import Button from '../Button/Button.tsx'
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

describe('Button module testing', () => {

    test('Button with no props', () => {
        render(<Button />)
        const btn = screen.getByRole('button')
        expect(btn).toHaveClass('base-button btn-radius-half btn-type-primary btn-size-middle')
        expect(btn).toHaveStyle({ color: 'yellow', backgroundColor: 'red' })
    })
    test('Button with children prop', () => {
        render(<Button>button</Button>)
        const btn = screen.getByRole('button')
        expect(btn).toHaveTextContent('button')
    })

})
