import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import GithubCard from './GithubCard';

const ContentWrapper = styled.div`
    width:60%;
    margin:0 auto;
    @media(max-width:768px){
        width:100%;
        margin: 0 auto;
        padding:15px;
    }
`

export default function Github(props) {

    const [user, setUser] = useState({
        loading: false, 
        name: 'anamwp', 
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setUser({
            loading:false, 
            name: user.name
        })
    }

    return (
        <ContentWrapper>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="" value={user.name} id="" onChange={e => setUser({loading:true, name: e.target.value}) }/>
                <input type="submit" value="Submit"/>
            </form>
            {
                user.loading 
                ? 
                'Loading'
                : 
                <GithubCard username={user.name}/>
            }
        </ContentWrapper>
    )
}
