import { useState } from 'react'
import singleCustomerStory from '../section_components/singleCustomerStory';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CustomerStories = ({section}) => {
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
    <section className="p-10 client-stories-grid" style={{ 'background': backgroundColor }}>
      <h2 className='mb-2 font-bold text-center text-white tracking-tigh max-lg:text-2xl'>{headline}</h2>
      <div className="relative max-w-2xl m-auto slidecontainer">
        <div className='absolute left-0 w-10 h-10 -ml-8 -translate-y-1/2 cursor-pointer top-1/2' onClick={() => slideHandler('prev')}>
          <KeyboardArrowLeftIcon className="w-10 h-10 text-white" />
        </div>
        <div className="relative flex max-w-2xl px-5 m-auto overflow-hidden text-white slider">
          {clientStories && clientStories.map((customerStory, index) => {
            return singleCustomerStory(customerStory, activeSlide, index);
          })}
        </div>
        <div className='absolute right-0 w-10 h-10 -mr-8 -translate-y-1/2 cursor-pointer top-1/2' onClick={() => slideHandler('next')}>
          <KeyboardArrowRightIcon className="w-10 h-10 text-white" />
        </div>
      </div>

    </section>
  )
}

export default CustomerStories