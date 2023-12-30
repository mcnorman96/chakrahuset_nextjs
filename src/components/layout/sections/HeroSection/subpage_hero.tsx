import Link from "next/link";
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
      <img className="h-[30rem] min-w-full object-cover" src={images[0].guid} alt="" srcSet={images[0].srcSet} />
    </div>
  )
}

type frontPageType = {
  headline: string,
  images: imagesType,
  txbox: string,
  btns: any,
}

const Subpage_hero = ({headline, images, txbox, btns} : frontPageType) => {
  return (
    <section className="relative hero_section bg-gray-50">
      {images && renderImages(images)}
      <div className="relative max-w-6xl px-40 py-16 m-auto text-center text-black bg-gray-50" style={{ marginTop: "-250px" }}>
        <h1 className="text-black">
          {headline}
        </h1>
        <div className="tx">
          {renderText(txbox)}
          {btns && btns.map((btn: string[], index: number) => {
            return <Button key={index} {...btn} />
          })}
        </div>
      </div>
    </section>
  )
}



export default Subpage_hero