import React from 'react'
import Moment from 'react-moment';
import styled from 'styled-components'

const CardWrapper = styled.div`
    border-bottom:solid 1px #ddd;
    padding-bottom:20px;
    &:last-child{
        border-bottom:none;
    }
`

export default function Card(props) {
    const data = props.posts;
    return (
        <CardWrapper key={data.id}>
            <h2>
                <a href={data.link} target="_blank">
                    <span dangerouslySetInnerHTML={{ __html: data.title.rendered }}></span>
                </a>
            </h2>
            <Moment date={data.date} />
        </CardWrapper>
    )
}
