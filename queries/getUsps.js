export const GetUsps = gql`
  query {
    Usps {
      items {
        _id
        text
        icon
      }
    }
  }
`
