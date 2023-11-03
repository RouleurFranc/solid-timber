export const GetPageBySlug = gql`
  query ($slug: String) {
    Page(slug: $slug) {
      _id
      title
      _slug
      stack {
        __typename
        ... on PageHeader {
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
          text_center
          text_bottom
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
          content {
            ... on Text {
              body
            }
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
        ... on ProjectCollection {
          _id
          heading
          description
          projects {
            _id
            _slug
            content {
              ... on Text {
                body
              }
            }
            details {
              ... on Text {
                body
              }
            }
            image {
              _id
              url
              name
            }
            image_slider {
              name
              url
              _id
            }
            location {
              latitude
              longitude
              _id
            }
            tag
            title
          }
        }
      }
    }
  }
`
