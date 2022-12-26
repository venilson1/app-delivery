import React from 'react'
import { Input, InputArea } from './styles'

export default ({ IconSvg, placeholder }) => {
    
    return (
        <InputArea>
            <IconSvg  width={24} height={24} fill="#DA4533" />
            <Input style={{outlineStyle: 'none' }} placeholder={placeholder} placeholderTextColor="#DA4533"/>
        </InputArea>
    )
}
