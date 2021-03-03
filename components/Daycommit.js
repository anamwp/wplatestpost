import React from 'react'
import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import Moment from 'react-moment'
import moment from 'moment';

export default function Daycommit() {
    const [commits, setCommits] = useState([]);
    const octokit = new Octokit({ auth: 'c3721103c93659ac10ce8ad3d21cf4fe44380121' });
    var todayDate = new Date();
    var isoToday = todayDate.toISOString();
    var isoYesterday = moment().subtract(1, 'days').toISOString();
    console.log('today', isoToday);
    console.log('Yesterday', isoYesterday);
    
    useEffect( async () => {
        const owner = 'themexpert',
            repo = 'onepager',
            perPage = 100;
        
        const totalCommit = await octokit.request(
            `GET /repos/${owner}/${repo}/commits?sha=develop`, {
                owner: owner,
                repo: repo,
                per_page: perPage
            }
        );
        setCommits(totalCommit);
        // console.log('Weekly Commit ', weeklyCommit.data.all[51]);
    
    }, []);
    console.log('commits', commits);

    return (
        <div>
            <h3>
                Onepager
            </h3>
            <Moment date={todayDate} format='ll' />
            {
                commits.data 
                ?
                commits.data.map( commit => <p key={commit.node_id}> {commit.commit.message} - {todayDate === commit.commit.author.date ? 'today' : <Moment date={commit.commit.author.date} format='ll' />}</p>) 
                :
                'no commit'
            }
            
        </div>
    )
}
