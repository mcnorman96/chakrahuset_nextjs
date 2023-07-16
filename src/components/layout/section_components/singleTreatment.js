import { truncateString } from "../../../utils/limitString";

const SingleTreatment = ({treatment}) => {
  const {
    behandlinger,
    title,
    featuredImage,
    uri
  } = treatment;

  const truncatedText = truncateString(behandlinger?.introTreatment, 200);
  const treatmentText= truncatedText.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow">
      <a href={uri}>
        <img className="object-cover w-full rounded-t-lg h-80" src={featuredImage.node.sourceUrl} alt="" />
      </a>
      <div className="p-5">
        <a href={uri}>
          <h5 className="mb-2 text-2xl font-bold text-black tracking-tigh">{title}</h5>
        </a>
        <div className="mb-3 font-normal text-black">
          {treatmentText}
        </div>
        <a href={uri} className="button-primary">
          Læs mere
        </a>
      </div>
    </div>
  )
}

export default SingleTreatment