import PostCard from "@/components/PostCard";

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

// React Server Component
async function PostPages() {
    const posts = await loadPosts();
    console.log(posts);

    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostPages;