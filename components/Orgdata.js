import React from 'react'
import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import Moment from 'react-moment'
import moment from 'moment';

export default function Orgdata() {
    const [org, setOrg] = useState([]);
    const octokit = new Octokit({ auth: 'c3721103c93659ac10ce8ad3d21cf4fe44380121' });
    
    useEffect( async () => {
        // const org = 'anamwp'
        
        // const getRepos = await octokit.request(
        //     `GET /orgs/${org}/repos`, {
        //         org: org
        //     }
        // );

        const org = 'themesgrove', 
            repo = 'edumodo',
            branch = 'refactor-customizer'
        
        const getRepos = await octokit.request(
            
            `GET /orgs/${org}/repos`, {
                org: org,
            }
        );
        
        setOrg(getRepos);
        // console.log('Weekly Commit ', weeklyCommit.data.all[51]);
    
    }, []);
    console.log('commits', org);

    return (
        <div>
            <h3>
                Themesgrove
            </h3>
            
            
        </div>
    )
}
