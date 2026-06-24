import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  username: String,
  comment: String,
  thumbnail: String,
  postedTime: Date
});

const postSchema = new mongoose.Schema({
  username: String,
  email: String,
  caption: String,

  thumbnail: String,

  images: [String],

  likes: {
    type: Number,
    default: 0
  },

  shares: {
    type: Number,
    default: 0
  },

  likedPeople: [String],

  sharedPeople: [String],

  comments: [commentSchema],

  postedTime: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);

export default Post;