import gql from "graphql-tag"
const GET_ALL_FACE_OPTIONS = gql`
    query get_face_options{
    faceOptions{
      data{
        id
        attributes{
          Face
          Price
        }
      }
    }
  }
`
export default GET_ALL_FACE_OPTIONS