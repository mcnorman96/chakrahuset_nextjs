import renderText from '../../../../utils/renderText';
import Button from "../../../shared/buttons/Button";

type imageType = {
  id: string,
  guid: string,
  srcSet: string,
  sizes: string,
}

type imagesType = {
  [key:string]: imageType;
}

const renderImages = (images: imagesType) => {
  return (
    <div className="imagecontainer">
      <img className="object-cover h-screen min-w-full" src={images[0].guid} alt="" srcSet={images[0].srcSet} />
    </div>
  )
}

type frontPageType = {
  headline: string,
  images: imagesType,
  txbox: string,
  btns: any,
}

const Frontpage_hero = ({headline, images, txbox, btns} : frontPageType) => {
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
          {btns && btns.map((btn: any, index: number) => {
            return <Button key={index} {...btn} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Frontpage_hero