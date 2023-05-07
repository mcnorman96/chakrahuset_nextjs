export const customer_stories = `
... on Page_Sektioner_FlexibleContent_CustomerStories {
  backgroundColor
  headline
  clientStories {
    ... on Review {
      title
      clientStory {
        historie
      }
    }
  }
}
`
