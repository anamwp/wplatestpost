import React, {useState, useEffect} from 'react'
import Moment from 'react-moment';
import Link from 'next/link'

export default function WPMayor() {
    const [posts, setPosts] = useState({
        loading: false, 
        data: []
    });

    useEffect(() => {
        setPosts({loading: true});
        const api = 'https://wpmayor.com/wp-json/wp/v2/posts';
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setPosts({loading: false, data: data});
        });
    }, [])

    return (
        <div>
            <Link href="/"><a> Back </a></Link>

            <h2>WPMayor</h2>

            {
                posts.loading 
                ? 
                'Loading'
                : 
                posts.data.map(post => {
                    console.log(post.title);
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
    )
}
