import renderText from '../../../../utils/renderText';
import React from 'react'

const Pricelist = ( section ) => {
  const {
    priceHeadline,
    pricelist
  } = section;

  return (
    <section className="max-w-5xl mx-auto pricelist">
      <h2>{priceHeadline}</h2>
      <div className=''>
        {pricelist && pricelist.map((priceItem, index) => {
          return (
            <div className="flex border-b border-gray-300 border-solid py-7" key={index}>
              <div className="w-1/2">
                <div className="font-semibold treatment_headline text-1xl">
                  {priceItem.treatmentHeadline}
                </div>
                <div className="treatment_text">
                  {renderText( priceItem.behandslingsTekst)}
                </div>
              </div>
              <div className="w-1/2 mt-auto text-right">
                {priceItem.price}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Pricelist