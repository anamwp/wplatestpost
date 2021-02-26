import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    background:#f5f5f5;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 50px;
    @media(max-width:768px){
        padding:20px;
        h2{
            margin:0;
        }
    }
`

export default function SingleHeader(props) {
    const title = props.title;
    return (
        <HeaderWrapper>
            <h2>{title}</h2>
            <Link href="/"><a> Back </a></Link>
        </HeaderWrapper>
    )
}
