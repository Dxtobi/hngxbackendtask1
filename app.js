import express from 'express';
import moment from 'moment';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name || 'You did not provide a name';
  const track = req.query.track || 'You did not provide a track';

  // Get current day of the week
  const currentDay = moment().format('dddd');

  
  const now = moment();
  const utcTime =  now.format('YYYY-MM-DDTHH:mm:ss[Z]');

  // GitHub repository and file URLs
  const githubRepoUrl = 'https://github.com/Dxtobi/hngxbackendtask1';
  const githubFileUrl = `${githubRepoUrl}/blob/main/app.js`;

  // Create the JSON response
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  // Send the JSON response
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🔥`);
});
