import SingleTreatment from '../section_components/singleTreatment';

const TreatmentImgGrid = ({section}) => {
  const {
    headline,
    treatments,
    backgroundColor,
  } = section;

  return (
    <section className="treatments-grid" style={{ 'background': backgroundColor }} >
      <h2 className="mb-2 text-center text-black tracking-tigh">{headline}</h2>
      <div className="flex flex-wrap justify-center">
        {treatments && treatments.map((treatment, index) => {
          return <SingleTreatment treatment={treatment} key={index} />
        })}
      </div>
    </section>
  )
}

export default TreatmentImgGrid;