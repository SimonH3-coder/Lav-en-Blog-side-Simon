  
// I request funktionen sender vi URL, graph request og argumenter med ind
const querySingleBlog = async () => {
      const data = await request<SingleBlogResponse>(import.meta.env.VITE_PUBLIC_URL, getSingleBlog, { slug });
      setBlog(data.blog);
    };