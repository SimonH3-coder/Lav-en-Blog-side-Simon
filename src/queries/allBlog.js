// For at sende en slug med ind i et querry
// $slug = selve variablen
// "where" clause hvor vi bruger $slug til at søge efter en specifik blog

import {gql} from "graphql-request";

export const allBlog = gql`
    query Eagles {
    eagles {
    id
    
        header
        indholdTekst
        slug
        content
        datoerTidOgBilleder
        image {url}
        footer 
}
}
        `;

export const blogBySlugQQuery = gql`
    query Eagles($slug: String!) {
    eagles(where: {slug: $slug}) {
        id

        header
        indholdTekst
        slug
        content
        datoerTidOgBilleder: 
        image {url}
        footer 
}
        `;
