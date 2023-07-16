import renderText from '../../../utils/renderText';

const singleCustomerStory = (customerStory, activeSlide, index) => {
  const {
    title,
    clientStory
  } = customerStory;

  const clientStoryContent = renderText(clientStory?.historie);
  const checkVisible = activeSlide === index ? 'visible' : 'hidden';
  let translate = activeSlide * 100;


  return (
    <div className="w-full max-w-lg min-w-full m-auto italic font-medium text-center transition-all duration-700 ease-in-out" key={index} slide-index={index} style={{ 'visibility': checkVisible, 'transform': 'translateX(-' + translate + '%)' }}>
      {clientStoryContent}
      <div className="mt-4">
        - {title}
      </div>
    </div>
  )
}

export default singleCustomerStory