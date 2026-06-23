const homePosts = [
    {
        id: 1,
        username: 'mlbb_fan',
        email: 'mlbb@example.com',
        caption: 'Big match tonight! Blacklist vs ONIC 🔥',
        postedTime: '2024-06-02T17:00:00Z',
        thumbnail: 'https://i.pinimg.com/736x/82/55/03/8255033248d018b6c5f3d460b2deec16.jpg',
        images: [
            'https://i.pinimg.com/1200x/54/a4/f0/54a4f00952d4bb6ef3ff99ad92f0c147.jpg',
            'https://i.pinimg.com/736x/74/65/ea/7465ea0adf11689894bbc4af664d71d6.jpg',
            'https://i.pinimg.com/736x/bf/16/54/bf1654837b42c962e3cf69ab7b45de2c.jpg'
        ],
        comments: [
            {
                id: 1,
                username: 'esports_lover',
                comment: 'This is going to be insane!',
                postedTime: '2024-06-02T17:20:00Z',
                thumbnail: 'https://i.pinimg.com/1200x/dc/09/8f/dc098f0532de3c000039bda2b1a4e546.jpg',
            },
            {
                id: 2,
                username: 'pro_gamer',
                comment: 'ONIC will win for sure 💛',
                postedTime: '2024-06-02T17:40:00Z',
                thumbnail: 'https://i.pinimg.com/1200x/dc/09/8f/dc098f0532de3c000039bda2b1a4e546.jpg',
            },{
                id: 1,
                username: 'esports_lover',
                comment: 'This is going to be insane!',
                postedTime: '2024-06-02T17:20:00Z',
                thumbnail: 'https://i.pinimg.com/1200x/dc/09/8f/dc098f0532de3c000039bda2b1a4e546.jpg',
            },
            {
                id: 2,
                username: 'pro_gamer',
                comment: 'ONIC will win for sure 💛',
                postedTime: '2024-06-02T17:40:00Z',
                thumbnail: 'https://i.pinimg.com/1200x/dc/09/8f/dc098f0532de3c000039bda2b1a4e546.jpg',
            }
        ],
        likes: 5,
        likedpeople: ['esports_lover', 'pro_gamer', 'mlbb_king'],
        shares: 2,
        sharedpeople: ['fan123', 'gamer_x']
    },
    {
        id: 2,
        username: 'daily_esports',
        email: 'daily@example.com',
        caption: 'RRQ vs EVOS rivalry never disappoints!',
        postedTime: '2024-06-03T18:30:00Z',
        thumbnail: 'https://i.pinimg.com/736x/48/99/1f/48991f90e9a0eed6f972f7c310bdd3e0.jpg',
        images: [
            'https://i.pinimg.com/736x/dc/05/f7/dc05f7d2962622c958f8e579f2714114.jpg',
            'https://i.pinimg.com/1200x/64/3b/34/643b34f23d9757d2b3ada7c803b69dbf.jpg',
            'https://i.pinimg.com/1200x/71/1b/3e/711b3e787f4b48c33e9426627535dde2.jpg'
        ],
        comments: [
            {
                id: 1,
                username: 'rrq_fans',
                comment: 'RRQ all the way! 🔥',
                postedTime: '2024-06-03T19:00:00Z',
                thumbnail: 'https://i.pinimg.com/1200x/dc/09/8f/dc098f0532de3c000039bda2b1a4e546.jpg',
            }
        ],
        likes: 8,
        likedpeople: ['rrq_fans', 'mlbb_fan', 'esports_lover'],
        shares: 3,
        sharedpeople: ['fan1', 'fan2', 'fan3']
    },
    {
        id: 3,
        username: 'live_updates',
        email: 'live@example.com',
        caption: 'MPL Finals coming soon! Who will be champion? 🏆',
        postedTime: '2024-06-04T20:00:00Z',
        thumbnail: 'https://i.pinimg.com/736x/84/c9/d9/84c9d98f591cab1314134f2f3d5d6aca.jpg',
        images: [
            'https://i.pinimg.com/736x/da/45/97/da459776882cc38f49e867ff91e13816.jpg',
            'https://i.pinimg.com/736x/f5/f8/48/f5f848ed2581e5abd16d5783127034b2.jpg',
            'https://i.pinimg.com/736x/13/8c/12/138c12d66212d084c52e409df5818085.jpg'
        ],
        comments: [
            {
                id: 1,
                username: 'champion_guess',
                comment: 'I think Blacklist will take it!',
                postedTime: '2024-06-04T20:30:00Z',
                thumbnail: 'https://i.pinimg.com/1200x/dc/09/8f/dc098f0532de3c000039bda2b1a4e546.jpg',
            },
            {
                id: 2,
                username: 'onic_supporter',
                comment: 'No way, ONIC is too strong right now 💛',
                postedTime: '2024-06-04T20:45:00Z',
                thumbnail: 'https://i.pinimg.com/1200x/dc/09/8f/dc098f0532de3c000039bda2b1a4e546.jpg',
            }
        ],
        likes: 12,
        likedpeople: ['champion_guess', 'onic_supporter', 'mlbb_fan'],
        shares: 4,
        sharedpeople: ['user1', 'user2']
    },
    
];

export default homePosts;