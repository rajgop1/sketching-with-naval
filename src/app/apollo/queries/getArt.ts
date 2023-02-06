import gql from "graphql-tag"
const GET_ARTS = gql`
query{
    artCollections{
      data{
        id
        attributes{
          Name
          Image {
            data{
              id
              attributes	{
                name
                url
                alternativeText
              }
            }
          }
          Price
          Discount
            InstagramLink
          YoutubeLink
          Sold
          createdAt
          updatedAt
          
          
        }
      }
    }
  }
`
export default GET_ARTS