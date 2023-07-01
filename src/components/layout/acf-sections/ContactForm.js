import React, { Suspense } from 'react'
import renderText from '../../../utils/renderText';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const contactForm = (section) => {
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
      <div className="container flex flex-wrap">
        <div className="leftside w-1/2" >
          {renderText(contactText)}
        </div>
        <div className="rightside w-1/2 ">
          <div class="px-4 mx-auto max-w-screen-md w-2/3 my-14">
            <form action="#" class="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300">Email</label>
                <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300">Emne</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-300 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300 dark:text-gray-300">Besked</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-300 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="button-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contactForm