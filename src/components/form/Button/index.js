import React from 'react';
import styled from '@emotion/styled';

const CustomButtom = styled.button`
    ${function ({outline}) {
    return outline && 'background: transparent';
}}
    ${function ({primary}) {
    return primary && 'background-color: blue';
}}
`

export function Button({ text, ...props}){
    return(
        <CustomButtom {...props}>{text}</CustomButtom>
    )
}
