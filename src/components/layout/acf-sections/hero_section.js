import Frontpage_hero from "../section_components/frontpage_hero";
import Subpage_hero from "../section_components/subpage_hero";

const Hero_section = ({section}) => {
  const {
    subpage
  } = section;

  return (
    <>
      {!subpage ?
        <Frontpage_hero props={...section} />
        :
        <Subpage_hero props={...section} />
      }
    </>
  )
}

export default Hero_section;