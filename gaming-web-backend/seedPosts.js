import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Post from './models/Post.js';
import homePosts from './homepost.js';

dotenv.config();

const seedPosts = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI);

    await Post.deleteMany();

    await Post.insertMany(homePosts);

    console.log('Posts seeded successfully');

    process.exit();
    } catch (error) {
    console.error(error);
    process.exit(1);
    }
};

seedPosts()