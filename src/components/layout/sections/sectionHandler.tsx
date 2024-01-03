import BookingSection from './BookingSection/BookingSection';
import ContactForm from './ContactForm/ContactForm';
import CustomerStories from './CustomerStories/CustomerStories';
import Hero_section from './HeroSection/hero_section';
import Pricelist from './PriceList/Pricelist';
import TextBgCenter from './TextBgCenter/TextBgCenter';
import TreatmentImgGrid from './TreatmentImgGrid/TreatmentImgGrid';
import TxIcons from './TxIcons/TxIcons';
import VariableContent from './VariableContent/VariableContent';

const sectionHandler: any = {
  'Page_Sektioner_FlexibleContent_HeroSection': Hero_section,
  'Page_Sektioner_FlexibleContent_TreatmentImgGrid': TreatmentImgGrid,
  'Page_Sektioner_FlexibleContent_CustomerStories': CustomerStories,
  'Page_Sektioner_FlexibleContent_VariableContent': VariableContent,
  'Page_Sektioner_FlexibleContent_TextBgCenter': TextBgCenter,
  'Page_Sektioner_FlexibleContent_ContactForm': ContactForm,
  'Page_Sektioner_FlexibleContent_BookingSection': BookingSection,
  'Page_Sektioner_FlexibleContent_Pricelist': Pricelist,
  'Page_Sektioner_FlexibleContent_TxIcons': TxIcons
}

type sectionsType = {
  flexibleContent: any[]
}

const flexibleContentHandler = (sections: sectionsType) => {
  return (
    <>
      {sections.flexibleContent.map((section, index) => {
        if (sectionHandler.hasOwnProperty(section.__typename)) {
          const sectionToRender = sectionHandler[section.__typename];
          return sectionToRender(section, index)
        }
        console.log(`Could not find section ${section.__typename}`);
        return '';
      })}
    </>
  )
}

export default flexibleContentHandler;