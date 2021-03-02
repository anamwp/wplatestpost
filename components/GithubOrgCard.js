import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import styled from 'styled-components'
import OrgCard from './OrgCard'

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

export default function GithubOrgCard(props) {
    console.log('props', props);
    const [org, setOrg] = useState({
        loading: true, 
        data: ''
    });
    const orgapiurl = `https://api.github.com/orgs/${props.orgname}/repos`;
    // const orgapiurl = 'https://api.github.com/repos/themexpert/onepager/commits?sha=develop';
    useEffect(() => {
        // setData({loading: true});
        fetch(orgapiurl)
        .then(res => res.json())
        .then(data => {
            setOrg( {
                loading: false, 
                data: data
            } );
        });
    }, []);
    console.log('org', org);

    return (
        <>
        {
            org.loading 
            ?
            'Loading'
            :
                ! org.data.message
                ? 
                <CardWrapper className="card">
                    {/* {console.log('fetched data', org)} */}
                    {org.data.map( data => <OrgCard data={data} /> )}
                </CardWrapper>
                : 
                "No Org found"
            }

        </>
    )
}
