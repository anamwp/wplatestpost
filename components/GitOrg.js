import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import GithubOrgCard from './GithubOrgCard';

const ContentWrapper = styled.div`
    width:60%;
    margin:0 auto;
    @media(max-width:768px){
        width:100%;
        margin: 0 auto;
        padding:15px;
    }
`

export default function GitOrg(props) {

    const [org, setOrg] = useState({
        loading: false, 
        name: 'themexpert', 
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setOrg({
            loading:false, 
            name: org.name
        })
    }

    return (
        <ContentWrapper>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="" value={org.name} id="" onChange={e => setOrg({loading:true, name: e.target.value}) }/>
                <input type="submit" value="Submit"/>
            </form>
            {
                org.loading 
                ? 
                'Loading'
                : 
                <GithubOrgCard orgname={org.name}/>
            }
        </ContentWrapper>
    )
}
