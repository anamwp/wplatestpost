import React from 'react'
import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import Moment from 'react-moment'
import moment from 'moment';

export default function Repodata() {
    const [repo, setRepo] = useState();
    const octokit = new Octokit({ auth: process.env.gitauth });
    const [todayobj, setTodayobj] = useState();
    const [yesterdayobj, setYesterdayobj] = useState()

    useEffect( async () => {

        const owner = 'gatsbyjs', 
            repo = 'gatsby',
            branch = 'master'
        
        const getRepos = await octokit.request(
            
            `GET /repos/${owner}/${repo}/commits?sha=${branch}`, {
                owner: owner,
                repo: repo,
            }
        );
        
        setRepo(getRepos);
        
        const commits = getRepos
        .data
        .map(commit => {
            commit.date = moment(commit.commit.author.date).format('L');
            return commit;
        });
        // console.log('commits', commits);
        const today = moment().format('L'), yesterday = moment().subtract(1, 'days').format('L');
        // const todays = commits.
        const todayObj = commits.filter(commit => commit.date === today);
        const yesterObj = commits.filter(commit => commit.date === yesterday);
        setTodayobj(todayObj);
        setYesterdayobj(yesterObj);
        // set now
        

    
    }, []);

    console.log('tobj', repo);

    return (
        <div>
            <h3>
                Edumodo
            </h3>
            <p>Today commit count -  {todayobj ? todayobj.length : 0}</p>
            <p>Yesterday Commit count -  {yesterdayobj ? yesterdayobj.length : 0}</p>
            {
                repo 
                ? 
                repo.data.map( commit => <p key={commit.node_id}>{commit.commit.message} <Moment date={commit.commit.author.date} format='ll'/> </p>)
                : 
                'No commit'
            }
            
        </div>
    )
}
