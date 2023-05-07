import React from 'react'
import renderText from '../../../utils/renderText';

const calcTotalCols = (cols) => {
  return 2;
}

const columnHandler = (section, cols, totalCols) => {
  let counter = 0;
  let columns = []
  for (let i = 1; i <= totalCols; i++) {
    const colNumber = 'c' + i;
    const group = section[colNumber];
    columns.push(renderColContent(group, cols, counter, totalCols));
    counter++;
  }
  return columns;
}

const renderColContent = (group) => {
  let colImage;

  if (group['textOrImage'] && group['image']) {
    colImage = group['image'];
    return (
      <div className="singlecol p-4">
        <img className="object-cover" src={colImage["sourceUrl"]} />
      </div>
    )
  }

  return (
    <div className="singlecol p-4">
      {renderText(group['text'])}
    </div>
  )
}

const VariableContent = (section) => {
  const {
    cols,
  } = section;

  const totalCols = calcTotalCols(cols);

  return (
    <section className="variable-content">
      <div className={'container flex flex-wrap cols-' + cols}>
        {columnHandler(section, cols, totalCols)}
      </div>
    </section>
  )
}

export default VariableContent