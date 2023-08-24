"use client";

// React Client Component
function PostCard({ post }) {
    return (
        <div>
            <h3>
                {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
            <button onClick={() => {console.log(post.id)}}>click</button>
        </div>
    );
}

export default PostCard;
