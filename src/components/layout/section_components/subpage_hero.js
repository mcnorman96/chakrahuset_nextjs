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
    <section className="relative hero_section bg-gray-50">
      {images && renderImages(images)}
      <div className="relative max-w-6xl px-40 py-16 m-auto text-center text-black bg-gray-50" style={{ marginTop: "-250px" }}>
        <h1 className="text-black">
          {headline}
        </h1>
        <div className="tx">
          {renderText(txbox)}
          {btns && btns.map((btn, index) => {
            return (
              <Link key={index} href={btn.btn?.url} target={btn.btn?.target} className="mt-5 button-primary">
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