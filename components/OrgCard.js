import React, { useEffect, useState } from 'react'
// import Moment from 'react-moment';
import styled from 'styled-components'

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

export default function OrgCard(props) {
    const data = props.data;
    console.log('data', data);
    // const commits_url = data.commits_url.replace('{/sha}', '?sha=master');
    // const [commit, setCommit] = useState({
    //     loading: true,
    //     data: ''
    // })

    // console.log(commits_url);
    // useEffect(() => {
    //     fetch(commits_url)
    //     .then( res => res.json())
    //     .then( data => setCommit({
    //         loading: false, 
    //         data: data
    //     }))
    // }, [])
    // console.log('commit', commit.data[0]);
    return (
        <CardWrapper key={data.id}>
            <h2>
                <a href={data.html_url} target="_blank">
                    <span dangerouslySetInnerHTML={{ __html: data.name }}></span>
                </a>
            </h2>
            {/* <p>
                <b>Last Commit : </b>
            {
                commit.loading 
                ? 
                'fetching commit' 
                : 
                    ! commit.message 
                    ?
                    <span>{commit.data[0] ? commit.data[0].commit.message +  '- by ' +  commit.data[0].commit.author.name   : 'No Commit'}</span>
                    : 
                    'No commit found'
            }  
            </p>               */}
            {/* <Moment date={data.date} /> */}
        </CardWrapper>
    )
}
