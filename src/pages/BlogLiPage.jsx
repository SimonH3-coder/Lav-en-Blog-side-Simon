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


