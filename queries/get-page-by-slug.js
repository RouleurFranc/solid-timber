// ./queries/get-page-by-slug.js

export const GetPageBySlug = gql`
  query ($slug: String) {
    Page(slug: $slug) {
      _id
      title
      _slug
      stack {
        __typename
        ... on PageHeader  {
          heading
          cta_url
          cta_label
          image {
            url(width: 1600)
          }
          _id
          text
        }
        ... on ImageAndText {
          image {
            url(width: 800)
          }
          text
          title
          image_position
          _id
        }
        ... on CallToAction {
          _id
          heading
          description
          background_image { 
            _id
            url
          }
          cta_label
          cta_url
          stack { 
            __typename
            _id
            image {
              _id
              url
              name
            }
            text
            title
            image_position
        }
        }
      }
    }
  }
`;