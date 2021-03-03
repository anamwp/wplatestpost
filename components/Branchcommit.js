import React from 'react'
import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export default function Branchcommit() {
    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({ auth: process.env.gitauth });

    useEffect( async () => {
        const owner = 'wpsmartpay',
            repo = 'wp-smartpay-pro',
            perPage = 5;
        
        const weeklyCommit = await octokit.request(
            `GET /repos/wpsmartpay/wp-smartpay-pro/commits?sha=product-subscription`, {
                owner: owner,
                repo: repo,
                per_page: perPage
            }
        );
        setCommits(weeklyCommit);
        // console.log('Weekly Commit ', weeklyCommit.data.all[51]);
    
    }, []);
    console.log('commits', commits);

    return (
        <div>
            <h3>
                WP Smart Pay (Product Subscription branch) last 5 commit 
            </h3>
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
