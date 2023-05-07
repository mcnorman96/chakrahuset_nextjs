import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";
import { hero_section } from "../acf_sections/hero_section";
import { contact_form } from "../acf_sections/contactForm";
import { customer_stories } from "../acf_sections/customerStories";
import { Pricelist } from "../acf_sections/pricelist";
import { TextBgCenter } from "../acf_sections/textBgCenter";
import { TreatmentImgGrid } from "../acf_sections/TreatmentImgGrid";
import { TxIcons } from "../acf_sections/txIcons";
import { VariableContent } from "../acf_sections/VariableContent";

export const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
		${HeaderFooter}
	  page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
			sektioner {
				flexibleContent {
					${hero_section}
					${contact_form}
					${customer_stories}
					${VariableContent}
					${Pricelist}
					${TextBgCenter}
					${TreatmentImgGrid}
					${TxIcons}
				}
			}
	  }
	}
`;

export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
		${HeaderFooter}
	  page(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
		status
	  }
	}
	${MenuFragment}
	${SeoFragment}
`;
