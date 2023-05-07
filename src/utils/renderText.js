import { sanitize } from "./miscellaneous"

const renderText = (text) => {
  if (!text) return '';
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitize(text) }} >
    </div>
  )
}

export default renderText