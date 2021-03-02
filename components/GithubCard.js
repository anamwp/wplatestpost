import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
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

export default function GithubCard(props) {
    const [data, setData] = useState({
        loading: true,
        data: '',
        status: false
    })
    const apiurl = 'https://api.github.com/users/' + props.username;
    useEffect(() => {
        setData({loading: true});
        fetch(apiurl)
        .then(res => res.json())
        .then(data => {
            setData({loading: false, data: data, status: true});
        }).catch(
            e => {
                setData({
                    loading:false,
                    data: e.message,
                    status: false
                })
            }
        );
    }, []);
    console.log('data', data);
    return (
        <>
        {
            data.loading 
            ?
            'Loading'
            :
                ! data.data.message
                ? 
                <CardWrapper className="card">
                    <img
                    className="card-img-top"
                    src={data.data.avatar_url}
                    alt="Card image cap"
                    />
                    <div className="card-body">
                    <h5 className="card-title">{data.data.name}</h5>
                    <p className="card-text">{data.data.bio}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Username - {data.data.login}</li>
                    <li className="list-group-item">blog - {data.data.blog ? data.data.blog : "N/A" }</li>
                    <li className="list-group-item">Followers - {data.data.followers}</li>
                    <li className="list-group-item">Following - {data.data.following}</li>
                    <li className="list-group-item">Company - {data.data.company}</li>
                    <li className="list-group-item">Location - {data.data.location}</li>
                    <li className="list-group-item">Public Repo - {data.data.public_repos}</li>
                    <li className="list-group-item">Public Gists - {data.data.public_gists}</li>
                    <li className="list-group-item">Twitter - {data.data.twitter_username ? '@' + data.data.twitter_username : 'Not Available' }</li>
                    </ul>
                    <div className="card-body">
                    <a href={data.data.html_url} className="card-link">
                        Full Profile
                    </a>
                    </div>
                </CardWrapper>
                : 
                "No user found"
            }

        </>
    )
}
