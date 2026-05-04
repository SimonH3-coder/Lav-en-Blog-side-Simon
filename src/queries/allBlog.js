// For at sende en slug med ind i et querry
// $slug = selve variablen
// "where" clause hvor vi bruger $slug til at søge efter en specifik blog

import {gql} from "graphql-request";

export const allBlog = gql`
    query AllBlogs {
    blogs{
    id
        title
        slug
        content
        }
        Image {
        url}
        author {
        }
}
        `;

export const blogBySlugQQuery = gql`
    query BlogBySlug($slug: String!) {
    blog(where: {slug: $slug}) {
    id
        title
        slug
        content
        }
        Image {
        url}
        author
        name {
        }
}
}
        `;
