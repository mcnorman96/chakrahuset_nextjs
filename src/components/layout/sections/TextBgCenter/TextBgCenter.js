import React from 'react'
import renderText from '../../../../utils/renderText';
import btn from '../../../../utils/button';

const TextBgCenter = ({ textbox, backgroundColor, bg, button }) => {
  return (
    <section className="p-10 text-bg-center" style={{ 'background': backgroundColor }}>
      <div className="max-w-3xl m-auto text-center text-black">
        {renderText(textbox)}
        {btn(button)}
      </div>
    </section>
  )
}

export default TextBgCenter