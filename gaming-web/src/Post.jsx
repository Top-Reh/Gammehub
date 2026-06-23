import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/home-posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

  return (
    <div className='flex flex-col gap-20 w-full'>
        {
            posts.map(post => (
                <div key={post.id} className='flex flex-col gap-5 w-full'>
                    <div className='flex items-center gap-5'>
                        <img className='w-9 h-9 rounded-full' src={post.thumbnail} alt={post.username}></img>
                        <div>
                            <h2 className='text-[15px] font-semibold'>{post.username}</h2>
                            <p className='text-[13px] font-light'>{new Date(post.postedTime).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <p>{post.caption}</p>
                    <div className='flex gap-10 items-center'>
                        <div className='flex gap-3 w-2/3 '>
                            <img className='w-full h-72 object-cover rounded-xs' src={post.images[0]} alt={post.username}></img>
                            <div className='flex flex-col gap-3 w-1/3 '>
                                <img className='w-full h-[138px] object-cover rounded-xs' src={post.images[1]} alt={post.username}></img>
                                {post.images[2] && <img className='w-full h-[138px] object-cover rounded-xs' src={post.images[2]} alt={post.username}></img>}
                            </div>
                        </div>
                        <span className='h-full w-[1px] bg-white'></span>
                        <div className='bg-gray-800 rounded-md w-1/3 h-full p-5 flex flex-col gap-5'>
                            <h2 className='text-[15px] font-semibold'>Comments</h2>
                            <div className='flex flex-col gap-5 h-40 overflow-y-auto hide-scrollbar'>
                                {
                                    post.comments.map(comment => (
                                        <div key={comment.id} className='flex items-center gap-4'>
                                            <img className='w-7 h-7 rounded-full object-cover' src={comment.thumbnail} alt={comment.username}></img>
                                            <div className='flex flex-col gap-1'>
                                                <h2 className='text-white text-[9px] font-medium'>{comment.username}</h2>
                                                <div className='flex items-center gap-1 bg-white rounded-md rounded-tl-none px-2 py-1 w-max relative'>
                                                    <span className='commentstyletip'></span>
                                                    <p className='text-[13px] text-black font-medium'>{comment.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center gap-3'>
                                <input className='w-full bg-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none' placeholder='Add a comment...'></input>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 cursor-pointer">  
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                    
            <div className='flex items-center gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7  cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
            </div>
                </div>
            ))

        }
    </div>
  )
}

export default Post