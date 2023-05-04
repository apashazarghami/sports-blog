
// const SEND_COMMENT = gql`
//     mutation MyMutation {
//   createComment(
//     data: {name: "جواد عزتی", comment: "خوشت اومده!!!", email: "javadezzati@gmail.com"}
//   ) {
//     id,
//     name,
//     comment,
//     email,
//     post {
//       slug
//     }
//   }
// }

import { gql } from "@apollo/client";

// `
const SEND_COMMENT = gql`
  mutation sendComment($name: String! $email: String! $comment: String! $slug: String!) {
    createComment(
      data: {
        name: $name,
        email: $email,
        comment: $comment,
        post: { connect: { slug: $slug }}
      }
    ) {
      id,
      name,
      email,
      comment,
      post {
        slug
      }
    }
  }
`

export { SEND_COMMENT };