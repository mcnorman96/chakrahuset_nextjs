import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const HeaderFooter = `
  header: siteLogo {
    sourceUrl
  }
  headerMenus: menuItems(where: {location: MAIN_MENU, parentId: "0"}) {
    edges {
      node {
        id
        label
        url
        path
        childItems {
          edges {
            node {
              id
              label
              url
              path
            }
          }
        }
      }
    }
  }
  footerMenus: menuItems(where: {location: MAIN_MENU, parentId: "0"}) {
    edges {
      node {
        id
        label
        url
        path
      }
    }
  }
`

export const GET_MENUS = gql`
query GET_MENUS {
  ${HeaderFooter}
}
  ${MenuFragment}
`
