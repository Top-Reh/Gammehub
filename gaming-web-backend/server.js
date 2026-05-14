import express from 'express';
import cors from 'cors';
import users from './user.js';
import liveStreams from './live.js';
import upcomingStreams from './upcoming.js';
import upcomingMatch from './upcomingmatch.js';
import homePosts from './homepost.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Gaming Web Backend!');
});

app.get('/live', (req, res) => {
  res.json(liveStreams)
});

app.get('/upcoming-matches', (req, res) => {
  res.json(upcomingMatch)
});

app.get('/upcoming', (req, res) => {
  res.json(upcomingStreams)
});

app.get('/home-posts', (req, res) => {
  res.json(homePosts)
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});