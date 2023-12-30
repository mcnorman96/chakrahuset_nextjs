
export const truncateString = (str, num) => {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + '...'
}

export const TruncatedHtml = ( content, maxLength ) => {
  if (content.length <= maxLength) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  const truncatedContent = content.substring(0, maxLength) + '...';

  return <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />;
}