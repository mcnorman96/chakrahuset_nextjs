import Link from "next/link";
import renderText from "../../../utils/renderText";

const renderImages = (images) => {
  return (
    <div className="imagecontainer">
      <img className="object-cover h-screen min-w-full" src={images[0].guid} alt="" srcSet={images[0].srcSet} />
    </div>
  )
}

const Frontpage_hero = (section) => {
  const {
    headline,
    images,
    txbox,
    btns
  } = section.props;

  return (
    <section className="relative hero_section">
      <div className="absolute top-0 min-w-full min-h-full overlay" style={{ background: 'rgba(0, 0, 0, 0.35)' }}></div>
      {images && renderImages(images)}
      <div className="absolute max-w-xl text-white -translate-y-1/2 left-5 right-5 lg:left-1/3 top-1/2 lg:-translate-x-1/2">
        <h1 className="text-white headline">
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

export default Frontpage_hero