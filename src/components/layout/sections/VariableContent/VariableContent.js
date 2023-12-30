import React from 'react'
import { calcTotalCols, columnHandler } from './VariableUtils';

const VariableContent = (section) => {
  const {
    cols,
  } = section;

  const totalCols = calcTotalCols(cols);
  let containerName = '';
  if (cols === '1') {
    containerName = 'max-w-6xl';
  }

  return (
    <section className="variable-content">
      <div className={'container flex flex-wrap cols-' + cols + ' ' + containerName}>
        {columnHandler(section, cols, totalCols)}
      </div>
    </section>
  )
}

export default VariableContent