import Link from "next/link";
import renderText from "../../../utils/renderText";

const renderImages = (images) => {
  return (
    <div className="imagecontainer">
      <img className="h-screen min-w-full object-cover" src={images[0].guid} alt="" srcSet={images[0].srcSet} />
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
    <section className="hero_section relative">
      <div className="overlay absolute top-0 min-w-full min-h-full" style={{ background: 'rgba(0, 0, 0, 0.35)' }}></div>
      {images && renderImages(images)}
      <div className="txbox absolute text-white max-w-xl" style={{ left: "30%", top: "50%", transform: "translate(-50%, -50%)" }}>
        <h1 className="headline text-white">
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

export default Frontpage_hero