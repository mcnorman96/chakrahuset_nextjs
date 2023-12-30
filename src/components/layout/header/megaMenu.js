import Link from 'next/link'
import React from 'react'

const MegaMenu = ({children}) => {
  return (
      <div id="mega-menu-full-image-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 absolute left-0 z-10 hidden pt-3 bg-white group-hover:block">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul class="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
            {
              children.map((childItems, index) => {
                return (
                  <Link className="block w-full px-4 py-3 mt-4 text-xs text-left uppercase lg:inline-block lg:mt-0 text-black-200 hover:text-green-600"
                    data-cy="nav-item" key={index} href={childItems?.node?.path}>
                    {childItems?.node?.label}
                  </Link>
                )
              })
            }
          </ul>
          <a href="#" class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" >
            <p class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Preview the new Flowbite dashboard navigation.</p>
            <button type="button" class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
              Get started
              <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </a>
        </div>
      </div>
  )
}

export default MegaMenu