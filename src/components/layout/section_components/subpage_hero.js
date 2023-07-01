import Link from "next/link";
import renderText from "../../../utils/renderText";

const renderImages = (images) => {
  return (
    <div className="imagecontainer">
      <img className="h-[30rem] min-w-full object-cover" src={images[0].guid} alt="" srcSet={images[0].srcSet} />
    </div>
  )
}

const Subpage_hero = (section) => {
  const {
    headline,
    images,
    txbox,
    btns
  } = section.props;

  return (
    <section className="hero_section relative">
      {images && renderImages(images)}
      <div className=" bg-white text-black text-center m-auto py-16 px-40 max-w-6xl relative" style={{ marginTop: "-200px" }}>
        <h1 className="text-black">
          {headline}
        </h1>
        <div className="tx">
          {renderText(txbox)}
          {btns && btns.map((btn, index) => {
            return (
              <Link key={index} href={btn.btn?.url} target={btn.btn?.target} className="button-primary mt-5">
                {btn.btn.title}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}



export default Subpage_hero