import singleTreatment from '../section_components/singleTreatment';

const TreatmentImgGrid = (section) => {
  const {
    headline,
    treatments,
    backgroundColor,
  } = section;

  return (
    <section className="treatments-grid" style={{ 'background': backgroundColor }} >
      <h2 className="mb-2 tracking-tigh text-black text-center">{headline}</h2>
      <div className="flex flex-wrap justify-center">
        {treatments && treatments.map((treatment) => {
          return singleTreatment(treatment)
        })}
      </div>
    </section>
  )
}

export default TreatmentImgGrid;