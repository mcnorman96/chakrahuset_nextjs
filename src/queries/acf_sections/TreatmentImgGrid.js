export const TreatmentImgGrid = `
... on Page_Sektioner_FlexibleContent_TreatmentImgGrid {
  backgroundColor
  fieldGroupName
  headline
  treatments {
    ... on Treatment {
      id
      date
      title
      uri
      behandlinger {
        introTreatment
      }
      featuredImage {
        node {
          title
          sourceUrl
        }
      }
    }
  }
}
`
