import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import GetFeaturedImage from './GetFeaturedImage'

const CardWrapper = styled.div`
    border-bottom:solid 1px #ddd;
    padding-bottom:20px;
    &:last-child{
        border-bottom:none;
    }
    @media(max-width:768px){
        h2{
            font-size:20px;
        }
    }
`

const ReadableDate = (date) => {
    const postdate = moment(date).format('L');
    const todayDate = moment().format('L');
    if(todayDate === postdate){
        return (
            <p>Today</p>
        );
    }else{
        return (
            <p>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</p>
        );
    }
}

export default function Card(props) {
    const data = props.posts;
    let main_url_arr = props.apiurl.split('/');
    main_url_arr.pop();
    let final_embed_url = `${main_url_arr.join('/')}/media/${data.featured_media}`;
    return (
        <CardWrapper key={data.id}>
            {/* {
                data.featured_image && <img src={data.featured_image.full[0]} alt=""/>
            }
            {
                data.featured_image_src && <img src={data.featured_image_src} alt=""/>
            } */}
            <GetFeaturedImage embed_url={final_embed_url} />
            <h2>
                <a href={data.link} target="_blank">
                    <span dangerouslySetInnerHTML={{ __html: data.title.rendered }}></span>
                </a>
            </h2>
            {ReadableDate(data.date)}
        </CardWrapper>
    )
}
