import renderText from '../../../../utils/renderText';

export const calcTotalCols = (cols) => {
  return 2;
}

export const columnHandler = (section, cols, totalCols) => {
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

export const renderColContent = (group) => {
  let colImage;

  if (!group) return;

  if (group['textOrImage'] && group['image']) {
    colImage = group['image'];
    return (
      <div className="p-4 singlecol">
        <img className="object-cover w-full" src={colImage["sourceUrl"]} />
      </div>
    )
  }

  return (
    <div className="p-4 singlecol">
      {renderText(group['text'])}
    </div>
  )
}