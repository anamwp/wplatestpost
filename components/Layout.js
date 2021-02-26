import React from 'react'
import styled from 'styled-components'

const ComponentLayout = styled.div`
    width:80vw;
    margin: 0 auto;
    @media(max-width:768px){
        width:100vw;
        margin: 0 auto;
    }
`
export default function Layout(props) {
    return (
        <ComponentLayout>
            {props.children}
        </ComponentLayout>
    )
}
