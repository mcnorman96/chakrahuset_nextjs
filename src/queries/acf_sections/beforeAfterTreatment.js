export const beforeAfterTreatment = `
  ... on Page_Sektioner_FlexibleContent_BeforeAfterTreatment {
    fieldGroupName
    headline
    beforeAfter {
      fieldGroupName
      text
      images {
        uri
        title
        template
        status
        srcSet
      }
    }
  }
`