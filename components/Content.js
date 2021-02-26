import React, {useState, useEffect} from 'react'
import Card from './Card';
import styled from 'styled-components'

const ContentWrapper = styled.div`
    width:60%;
    margin:0 auto;
`

export default function Content(props) {
    const apiurl = props.apiurl;
    const [posts, setPosts] = useState({
        loading: false, 
        data: []
    });

    useEffect(() => {
        setPosts({loading: true});
        fetch(apiurl)
        .then(res => res.json())
        .then(data => {
            setPosts({loading: false, data: data});
        });
    }, [])

    return (
        <ContentWrapper>
        {
            posts.loading 
            ? 
            'Loading'
            : 
            posts.data.map(post => <Card key={post.id} posts={post}/>)
        }
        </ContentWrapper>
    )
}
