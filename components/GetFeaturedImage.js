import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ImageWrapper = styled.div`
    img{
        width:100%;
        object-fit:cover;
    }
`

export default function GetFeaturedImage({embed_url}) {
    
    const embed_api_url = embed_url;
    const [media, setMedia] = useState({
        loading: false, 
        data: []
    });
    useEffect(() => {
        setMedia({loading: true});
        fetch(embed_api_url)
        .then(res => res.json())
        .then(data => {
            setMedia({loading: false, data: data});
        });
    }, [])
    return (
        <ImageWrapper>
            {
                media.loading 
                ? 
                'loading image'
                : 
                media.data.media_details 
                ? 
                <img src={media.data.media_details.sizes.full.source_url} alt=""/>
                : 
                <span>No featured image</span>
            }
            
        </ImageWrapper>
    )
}
