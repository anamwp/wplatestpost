import React from 'react'
import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export default function Latestcommit() {
    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({ auth: process.env.gitauth });
    
    useEffect( async () => {
        const owner = 'themexpert',
            repo = 'onepager',
            perPage = 5;
    
        const fiveMostRecentCommits = await octokit.request(
            `GET /repos/themexpert/onepager/commits`, { owner, repo, per_page: perPage }
        );
    
        setCommits(fiveMostRecentCommits);

    }, []);
    return (
        <div>
            <h3>Latest commit of Onepager</h3>
            <ul>
                {
                    commits.data 
                    ? 
                    commits.data.map(commit => (
                        <li key={commit.id}>
                            {commit.commit.author.name} : {commit.commit.message}
                        </li>
                    )) 
                    : 
                    'No Commit'
                }
            </ul>
        </div>
    )
}
