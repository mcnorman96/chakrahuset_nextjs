import Frontpage_hero from "./frontpage_hero";
import Subpage_hero from "./subpage_hero";

type imageType = {
  id: string,
  guid: string,
  srcSet: string,
  sizes: string,
}

type imagesType = {
  [key:string]: imageType;
}

type heroSectionType = {
  subpage: string,
  headline: string,
  slider: boolean,
  images: imagesType,
  txbox: string,
  btns: any,
}

const Hero_section = (section: heroSectionType) => {
  return (
    <>
      {!section.subpage ?
        <Frontpage_hero {...section} />
        :
        <Subpage_hero {...section} />
      }
    </>
  )
}

export default Hero_section;