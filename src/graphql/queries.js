import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
    query {
        posts {
            author {
                name
                avatar {
                    url
                }
            }
            title
            slug
            id
            coverPhoto {
                url
            }
        }
    }
`

const GET_AUTHORS_INFO = gql`
    query {
        authors {
            name
            id
            slug
            avatar {
                url
            }
        }
    }
`

const GET_AUTHOR_INFO = gql`
    query getAuthorInfo($slug: String!) {
    author(where: {slug: $slug}) {
        avatar {
            url
        }
        description {
            html
        }
        field
        name
        posts {
            coverPhoto {
                url
            }
            id
            slug
            title
        }
    }
}
`

const GET_BLOG_INFO = gql`
    query getBlogInfo($slug: String!) {
        post(where: {slug: $slug}) {
            author {
                name
                avatar {
                    url
                }
                field
            }
            content {
                html
            }
            coverPhoto {
                url
            }
            slug
            title
        }
    }
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO };