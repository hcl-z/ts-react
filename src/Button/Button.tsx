import React, { Component } from 'react'
import './Button.scss'
type ButtonThemeType='primary'|'info'|'danger'|'success'
type ButtonSize='large'|'middle'|'small'
type ButtnBorderRadius='round'|'half'|'rect'

interface ButtonProps{
    type?:ButtonThemeType;
    radius?:ButtnBorderRadius;
    size?:ButtonSize;
    bgColor?:string;
    color?:string
}

export default class Button extends Component<ButtonProps,{}> {
    static defaultProps:ButtonProps ={
        type:'primary',
        radius:'half',
        size:'middle',
        bgColor:'red',
        color:'yellow'
    }
    render() {
        const {type,size,radius,bgColor,color}=this.props
        return (
            <button className={`base-button btn-radius-${radius} btn-type-${type} btn-size-${size}`} style={{color:color,backgroundColor:bgColor}}>
                {this.props.children||'hahahha'}
            </button>
        )
    }
}
