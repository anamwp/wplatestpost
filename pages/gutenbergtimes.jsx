import React, {useState, useEffect} from 'react'
import Moment from 'react-moment';
import Link from 'next/link'
import styled from 'styled-components'

const ComponentLayout = styled.div`
    width:80vw;
    margin: 0 auto;
    header{
        background:#f5f5f5;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:20px 50px;
    }
    .content{
        width:60%;
        margin:0 auto;
        div{
            border-bottom:solid 1px #ddd;
            padding-bottom:20px;
            &:last-child{
                border-bottom:none;
            }
        }
    }
`
export default function WPMayor() {
    const [posts, setPosts] = useState({
        loading: false, 
        data: []
    });

    useEffect(() => {
        setPosts({loading: true});
        const api = 'https://gutenbergtimes.com/wp-json/wp/v2/posts';
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setPosts({loading: false, data: data});
        });
    }, [])

    return (
        <ComponentLayout>
            <header>
            <h2>Gutenberg Times</h2>
            <Link href="/"><a> Back </a></Link>
            </header>
            <div className="content">
            {
                posts.loading 
                ? 
                'Loading'
                : 
                posts.data.map(post => {
                    return(
                        <div key={post.id}>
                            <h2>
                                <a href={post.link} target="_blank">
                                {`${post.title.rendered}`}
                                </a>
                            </h2>
                            <Moment date={post.date} />
                        </div>
                    )
                })
            }
            </div>
        </ComponentLayout>
    )
}
