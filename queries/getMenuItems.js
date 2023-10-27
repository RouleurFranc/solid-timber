export const GetMenuItems = gql`
  query {
    MenuItems {
      items {
        _id
        _slug
        title
      }
    }
  }
`
