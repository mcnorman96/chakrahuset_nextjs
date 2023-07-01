import { useState } from 'react'
import singleCustomerStory from '../section_components/singleCustomerStory';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CustomerStories = (section) => {
  const {
    headline,
    clientStories,
    backgroundColor,
  } = section;

  const [activeSlide, setActiveSlide] = useState(0);

  const slideHandler = (direction) => {
    if (direction === 'prev') {
      if (activeSlide === 0) {
        setActiveSlide(clientStories.length - 1)
      } else {
        setActiveSlide(activeSlide => activeSlide - 1)
      }
    } else {
      if (activeSlide === clientStories.length - 1) {
        setActiveSlide(0)
      } else {
        setActiveSlide(activeSlide => activeSlide + 1)
      }
    }
  }

  return (
    <section className="client-stories-grid p-10" style={{ 'background': backgroundColor }}>
      <h2 className='mb-2 font-bold tracking-tigh text-white text-center'>{headline}</h2>
      <div className="slidecontainer relative max-w-2xl m-auto">
        <div className='absolute left-0 top-0 bottom-0 cursor-pointer -ml-8 h-10 w-10' onClick={() => slideHandler('prev')}>
          <KeyboardArrowLeftIcon className="h-10 w-10 text-white" />
        </div>
        <div className="slider text-white relative m-auto max-w-2xl flex px-5 overflow-hidden">

          {clientStories && clientStories.map((customerStory, index) => {
            return singleCustomerStory(customerStory, activeSlide, index);
          })}

        </div>
        <div className='absolute right-0 top-0 bottom-0 cursor-pointer -mr-8 h-10 w-10' onClick={() => slideHandler('next')}>
          <KeyboardArrowRightIcon className="h-10 w-10 text-white" />
        </div>
      </div>

    </section>
  )
}

export default CustomerStories