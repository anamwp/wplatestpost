import React from 'react'
import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export default function Weeklycommit() {
    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({ auth: 'c3721103c93659ac10ce8ad3d21cf4fe44380121' });

    useEffect( async () => {
        const owner = 'gatsbyjs',
            repo = 'gatsby',
            perPage = 5;
        
        const weeklyCommit = await octokit.request(
            `GET /repos/gatsbyjs/gatsby/stats/participation`, {
                owner: owner,
                repo: repo,
            }
        );
        setCommits(weeklyCommit);
        console.log('Weekly Commit ', weeklyCommit);
    
    }, []);
    // console.log('commits', commits.data.all[commits.data.all.length - 1]);

    return (
        <div>
            <h3>
            gatsby Weekly Commit - 
                {
                    commits.data
                    ? 
                    commits.data.all[commits.data.all.length - 1]
                    : 
                    '0'
                }
            </h3>
        </div>
    )
}
