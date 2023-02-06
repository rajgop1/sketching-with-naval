import gql from "graphql-tag"
const GET_ALL_SIZE_OPTIONS = gql
`query get_size_options{
    sizeOptions{
      data{
        id
        attributes{
          Size
          Price
        }
      }
    }
  }`
  export default GET_ALL_SIZE_OPTIONS