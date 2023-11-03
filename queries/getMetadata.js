export const GetMetadata = gql`
  query ($slug: String) {
    Page(slug: $slug) {
      _id
      title
      _slug
      seo {
        _id
        seo_title
        seo_description
        seo_social_media_image {
          _id
          url
        }
        seo_allow
      }
    }
  }
`
