import React from 'react'
import renderText from '../../../utils/renderText';
import btn from '../../../utils/button';

const TextBgCenter = (section) => {
  const {
    textbox,
    backgroundColor,
    bg,
    button
  } = section;
  console.log(section);

  return (
    <section className="text-bg-center p-10" style={{ 'background': backgroundColor }}>
      <div className="text-black max-w-3xl m-auto text-center">
        {renderText(textbox)}
        {btn(button)}
      </div>
    </section>
  )
}

export default TextBgCenter