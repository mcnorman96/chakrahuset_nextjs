import SingleTreatment from './singleTreatment';

const TreatmentImgGrid = ({headline, treatments, backgroundColor}) => {
  return (
    <section className="treatments-grid" style={{ 'background': backgroundColor }} >
      <h2 className="mb-2 text-center text-gray-600 tracking-tigh">{headline}</h2>
      <div className="flex flex-wrap justify-center">
        {treatments && treatments.map((treatment, index) => {
          return <SingleTreatment {...treatment} key={index} />
        })}
      </div>
    </section>
  )
}

export default TreatmentImgGrid;