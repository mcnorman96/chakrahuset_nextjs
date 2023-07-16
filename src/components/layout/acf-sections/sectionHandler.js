import BookingSection from './BookingSection';
import ContactForm from './ContactForm';
import CustomerStories from './CustomerStories';
import Hero_section from './hero_section';
import Pricelist from './Pricelist';
import TextBgCenter from './TextBgCenter';
import TreatmentImgGrid from './TreatmentImgGrid';
import TxIcons from './TxIcons';
import VariableContent from './VariableContent';

const flexibleContentHandler = (sections) => {
  return (
    <>
      {sections.flexibleContent.map((section, index) => {
        return (
          <SectionHandler section={section} index={index} key={index} />
        )
      })}
    </>
  )
}

const SectionHandler = ({section, index}) => {
  switch (section.__typename) {
    case 'Page_Sektioner_FlexibleContent_HeroSection':
      return <Hero_section section={section} key={index}/>

    case 'Page_Sektioner_FlexibleContent_TreatmentImgGrid':
      return <TreatmentImgGrid section={section} key={index}/>


    case 'Page_Sektioner_FlexibleContent_CustomerStories':
      return <CustomerStories section={section} key={index}/>


    case 'Page_Sektioner_FlexibleContent_VariableContent':
      return <VariableContent section={section} key={index}/>


    case 'Page_Sektioner_FlexibleContent_TextBgCenter':
      return <TextBgCenter section={section} key={index}/>


    case 'Page_Sektioner_FlexibleContent_ContactForm':
      return <ContactForm section={section} key={index}/>


    case 'Page_Sektioner_FlexibleContent_BookingSection':
      return <BookingSection section={section} key={index}/>

    case 'Page_Sektioner_FlexibleContent_Pricelist':
      return <Pricelist section={section} key={index}/>

    case 'Page_Sektioner_FlexibleContent_TxIcons':
      return <TxIcons section={section} key={index}/>

  }
}


export default flexibleContentHandler;