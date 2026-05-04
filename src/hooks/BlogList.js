import { useQuery } from '@tanstack/react-query'
import { gradhClient } from '../library/graphClient'
import { allBlog, blogBySlug } from '../queries/allBlog'

export function useBlogs(slug) {
    return useQuery({
queryKey ['blogs'],
queryFn: async () => {
    const data = await graphClient.request (allBlogs)
    return data.blogs
}
    })
}

export function useBlog(slug) {
    return useQuery({
        queryKey: ['blog', slug],
        queryFn: async () => {
            const data = await graphClient.request(blogBySlug, { slug })
            return data.blog
        },
        enabled: !!slug, // Sørger for at query kun kører hvis slug er tilgængelig
    })
}

