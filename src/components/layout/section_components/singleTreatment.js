import Link from "next/link";
import renderText from "../../../utils/renderText";

const singleTreatment = (treatment) => {
  const {
    behandlinger,
    title,
    featuredImage,
    uri
  } = treatment;

  console.log(treatment);
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-5">
      <a href={uri}>
        <img class="rounded-t-lg" src={featuredImage.node.sourceUrl} alt="" />
      </a>
      <div class="p-5">
        <a href={uri}>
          <h5 class="mb-2 text-2xl font-bold tracking-tigh text-black">{title}</h5>
        </a>
        <div class="mb-3 font-normal text-black">{renderText(behandlinger?.introTreatment)}</div>
        <a href={uri} class="button-primary">
          Læs mere
        </a>
      </div>
    </div>
  )
}

export default singleTreatment