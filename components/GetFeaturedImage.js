import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ImageWrapper = styled.div`
    img{
        width:100%;
        object-fit:cover;
    }
`

export default function GetFeaturedImage({data}) {
    console.log('image', data.source_url);
    // console.log('length',  data ?? Object.values(data.media_details).length);
    return (
        <ImageWrapper>
            {
                // data && typeof data === 'object' && Object.keys(data.media_details).length > 0
                data
                ? 
                <span>image is under construction</span>
                // <img src={data.media_details.sizes.full.source_url} alt=""/>
                : 
                <span>No featured image</span>
            }
            
        </ImageWrapper>
    )
}
