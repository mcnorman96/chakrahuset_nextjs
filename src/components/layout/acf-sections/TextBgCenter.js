import React from 'react'
import renderText from '../../../utils/renderText';
import btn from '../../../utils/button';

const TextBgCenter = ({section}) => {
  const {
    textbox,
    backgroundColor,
    bg,
    button
  } = section;

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