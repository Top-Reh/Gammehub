import express from 'express';
import cors from 'cors';
import users from './user.js';
import liveStreams from './live.js';
import upcomingStreams from './upcoming.js';
import upcomingMatch from './upcomingmatch.js';
import homePosts from './homepost.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Post from './models/Post.js';

dotenv.config();
connectDB();

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

app.get('/home-posts', async(req, res) => {
  const posts = await Post.find().sort({ postedTime: -1 });
  res.json(posts);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/home-posts/:id/like', async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  post.likes += 1;
  await post.save();
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});