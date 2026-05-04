import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { graphClient } from '../library/graphClient';
import { allBlogsQuery } from '../queries/allBlog';

export function BlogLipage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let state = true

        const fetchBlogs = async () => {
            try {
                const data = await graphClient.request(allBlogsQuery);
                if (state) setBlogs(data.blogs ?? []);

            } catch (error) {
                if (state) setError(error.message || "Der var desværre en fejl")
            } finally {
                if (state) setLoading(false)
            }
}
        fetchBlogs()
        return () => {
            state = false
        }
    }, [])

    if (loading) return <p className="p-6">Blogindlæg kommer frem</p>
    if (error) return <p className="p-6 text-red-400"> Fejl kommer {error}</p>

    return (
        <main className="min-h-screen bg-darkgray-50 9'p-6" >
        <h1 className="mb-8 text-2xl font-bold">Blog</h1>
        <section className= "grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
            <article key={blog.id} clasName="rounded-xl bg-white p-5 shadow ">
                {blog.image?.url && (
                    <img src={blog.image.url} alt={blog.title} 
                    className="mb-4 h-40 w-full rounded object-cover"

                    />
                )}
                <h2></h2>
            </article>
        </section>
            
            </main>
    )


