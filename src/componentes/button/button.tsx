import React from 'react'
import type { ButtonProps } from '../../types/types'
import './button.css'

export const Button: React.FC<ButtonProps> = ({children})=>{
    return(
        <button className='boton'>{children}</button>
    )
}