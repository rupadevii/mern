import {useState, useEffect} from 'react'

export default function Effect() {
    const [loading, setLoading] = useState();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    async function fetchPosts() {
        try {
            setLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong...</div>;
    }

    return (
        <div>
        {posts.slice(0, 10).map((post) => (
            <div id={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))}
        </div>
    );
}
