import React, {useState, useEffect} from 'react'
import Card from './Card';
import styled from 'styled-components'

const ContentWrapper = styled.div`
    width:60%;
    margin:20px auto;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:20px;
    @media(max-width:768px){
        width:100%;
        margin: 0 auto;
        padding:15px;
        grid-template-columns: repeat(1, 1fr);
    }
`

export default function Content(props) {
    const apiurl = props.apiurl + '?_embed';
    const getSiteName = apiurl.split('/')[2];
    const [posts, setPosts] = useState({
        loading: false, 
        data: []
    });

    useEffect(() => {
        setPosts({loading: true});
        let getLocalStorageData = window.localStorage.getItem(getSiteName); 
        if(getLocalStorageData){
            console.log('serve from local cache');
            setPosts({loading: false, data: JSON.parse(getLocalStorageData)});
        }else{
            console.log('fetching data to store in local');
            fetch(apiurl)
            .then(res => res.json())
            .then(data => {
                window.localStorage.setItem(getSiteName, JSON.stringify(data))
                setPosts({loading: false, data: data});
            });
        }
        
    }, [])

    return (
        <ContentWrapper>
        {
            posts.loading 
            ? 
            'Loading'
            : 
            posts.data.map(post => <Card key={post.id} posts={post} apiurl={apiurl} />)
        }
        </ContentWrapper>
    )
}
