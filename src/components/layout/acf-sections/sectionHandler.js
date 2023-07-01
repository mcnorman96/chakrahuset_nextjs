import BookingSection from './BookingSection';
import contactForm from './ContactForm';
import CustomerStories from './CustomerStories';
import hero_section from './hero_section';
import TextBgCenter from './TextBgCenter';
import TreatmentImgGrid from './TreatmentImgGrid';
import TxIcons from './TxIcons';
import VariableContent from './VariableContent';

const flexibleContentHandler = (sections) => {

  const sectionHandler = (section) => {
    switch (section.__typename) {
      case 'Page_Sektioner_FlexibleContent_HeroSection':
        return hero_section(section);

      case 'Page_Sektioner_FlexibleContent_TreatmentImgGrid':
        return TreatmentImgGrid(section);

      case 'Page_Sektioner_FlexibleContent_CustomerStories':
        return CustomerStories(section);

      case 'Page_Sektioner_FlexibleContent_VariableContent':
        return VariableContent(section);

      case 'Page_Sektioner_FlexibleContent_TextBgCenter':
        return TextBgCenter(section);

      case 'Page_Sektioner_FlexibleContent_ContactForm':
        return contactForm(section);

      case 'Page_Sektioner_FlexibleContent_BookingSection':
        return BookingSection(section);
      
      case 'Page_Sektioner_FlexibleContent_TxIcons':
        return TxIcons(section);
    }
  }

  return (
    <div>
      {sections.flexibleContent.map((section) => {
        return sectionHandler(section);
      })}
    </div>
  )
}

export default flexibleContentHandler;