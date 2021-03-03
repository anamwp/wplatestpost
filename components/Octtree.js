import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export default  function Octtree() {
  const [commits, setCommits] = useState([]);
  const octokit = new Octokit({ auth: process.env.gitauth });


  useEffect( async () => {
    const owner = 'themexpert',
        repo = 'onepager',
        perPage = 5;

    const fiveMostRecentCommits = await octokit.request(
        `GET /repos/themexpert/onepager/commits`, { owner, repo, per_page: perPage }
    );
    const weeklyCommit = await octokit.request(
        `GET /repos/BrisbyHQ/feedback_tool_dashboard/stats/participation`, {
            owner: 'BrisbyHQ',
            repo: 'feedback_tool_dashboard',
        }
    );
    const DayCommit = await octokit.request(
        `GET /repos/BrisbyHQ/feedback_tool_dashboard/stats/punch_card`, {
            owner: 'BrisbyHQ',
            repo: 'feedback_tool_dashboard',
        }
    );
    console.log('Day commit', DayCommit);
    console.log('Weekly Commit ', weeklyCommit.data.all[51]);

    setCommits(fiveMostRecentCommits);
  }, [])
  console.log('commits', commits.data);

    return (
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
    );
}