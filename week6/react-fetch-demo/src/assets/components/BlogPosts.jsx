import { useState } from 'react';

async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogPosts = await response.json();
    return blogPosts;
}

function BlogPosts(){
    const [loadedPosts, setLoadedPosts] = useState([]);

    fetchPosts().then((blogPosts) => setLoadedPosts(blogPosts));

    // return (
    //     <>
    //         <ul>
    //             {loadedPosts.map((post)=>(
    //                 <li key={post.id}>{post.title}</li>
    //             ))}
    //         </ul>
    //     </>
        
    // )

    return <h1>test</h1>
}