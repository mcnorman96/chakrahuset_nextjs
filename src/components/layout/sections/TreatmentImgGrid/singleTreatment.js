import { truncateString } from "../../../../utils/limitString";
import renderText from "../../../../utils/renderText";

const SingleTreatment = ({behandlinger, title, featuredImage, uri}) => {
  const truncatedText = truncateString(behandlinger?.introTreatment, 200);
  const treatmentText = truncatedText.replace(/(<([^>]+)>)/gi, "");
  const text = renderText(treatmentText);
  
  return (
    <div className="m-5 transition-all duration-500 bg-white rounded-lg cursor-pointer md:max-w-sm hover:opacity-80">
      <a href={uri}>
        <img className="object-cover w-full rounded-t-lg h-60" src={featuredImage.node.sourceUrl} alt="" />
      </a>
      <div className="pt-5">
        <a href={uri}>
          <h5 className="mb-2 text-xl font-bold text-gray-600 tracking-tigh">{title}</h5>
          <div className="mb-3 font-normal text-gray-600 text-md">
           {text}
          </div>
        </a>
        <a href={uri} className="button-primary">
          Læs mere
        </a>
      </div>
    </div>
  )
}

export default SingleTreatment