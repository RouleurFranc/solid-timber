export const GetMenuItems = gql`
  query {
    MenuItems {
      items {
        _id
        title
        link_to_page {
          __typename
          _slug
        }
      }
    }
  }
`
