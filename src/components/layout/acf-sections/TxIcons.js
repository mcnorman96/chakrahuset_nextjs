import React from 'react'

const TxIcons = (section) => {
  const {
    headline, 
    txIcons
  } = section;

  return (
    <section className="text-center">
      <h2>{headline}</h2>
      <div className="flex flew-wrap mt-12 justify-center">
        {txIcons && txIcons.map((item) => 
          <div className="w-1/3 max-w-md px-5">
            <img className="object-cover h-28 m-auto py-2" src={item.icon.sourceUrl} alt="" />
            <h3>{item.headline}</h3>
            <p>{item.text}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TxIcons