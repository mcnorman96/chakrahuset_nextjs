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
    <div className="text-center max-w-lg m-auto w-full min-w-full duration-700 transition-all ease-in-out" key={index} slide-index={index} style={{ 'visibility': checkVisible, 'transform': 'translateX(-' + translate + '%)' }}>
      {clientStoryContent}
      <div className="mt-4">
        - {title}
      </div>
    </div>
  )
}

export default singleCustomerStory