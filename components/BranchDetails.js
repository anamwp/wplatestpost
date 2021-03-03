import React from 'react'
import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export default function BranchDetails() {
    const [branch, setCommits] = useState([]);
    const octokit = new Octokit({ auth: process.env.gitauth });

    useEffect( async () => {
        const owner = 'themexpert',
            repo = 'onepager',
            perPage = 5;
        
        const getBranch = await octokit.request(
            `GET /repos/${owner}/${repo}/branches/develop`, {
                owner: owner,
                repo: repo,
                per_page: perPage
            }
        );
        setCommits(getBranch);
    
    }, []);
    console.log('branch', branch);

    return (
        <div>
            <h3>
                Onepager
            </h3>
            
        </div>
    )
}
