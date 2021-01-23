import Button from '../src/Button/Button.tsx'
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

it('Button module tests',()=>{
    test('Button with no props',()=>{
        render(<Button />)
        expect(screen.getAllByRole('button')).toHaveClass('base-btn')
    })
})