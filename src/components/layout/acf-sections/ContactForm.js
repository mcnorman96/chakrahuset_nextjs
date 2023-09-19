import React from 'react'
import renderText from '../../../utils/renderText';

const ContactForm = ({section}) => {
  const {
    contactForm,
    contactImage,
    contactText
  } = section;

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  }

  return (
    <section className="contactForm">
      <div className="flex flex-wrap">
        <div className="relative leftside lg:w-1/2 min-h-500" >
          <img src={contactImage?.mediaItemUrl} srcSet={contactImage?.srcset} sizes={contactImage?.sizes} className="object-cover w-full h-full" />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <div className="absolute z-10 text-white left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 max-sm:left-4 max-sm:right-4 max-sm:translate-x-0 max-sm:w-4/5">
            {renderText(contactText)}
          </div>
        </div>
        <div className="w-full rightside lg:w-1/2">
          <div className="px-4 mx-auto lg:max-w-screen-md lg:w-2/3 my-14">
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300">Email</label>
                <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300">Emne</label>
                <input type="text" id="subject" className="block w-full p-3 text-sm text-gray-300 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Emne" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300">Besked</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-300 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Din besked"></textarea>
              </div>
              <button type="submit" className="button-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm