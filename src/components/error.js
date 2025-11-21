import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md';

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1C1C1C] montserrat-500 overflow-hidden">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#ab92af]">404</h1>
        <p className="text-2xl md:text-3xl font-medium mt-4 text-white">Oops! Page not found</p>
        <p className="text-gray-300 mt-2">The page you’re looking for doesn’t exist, go back home to the portfolio.</p>
        <Link to="/" className="mt-6 inline-flex px-12 py-2 bg-[#ab92af] text-white rounded-md shadow hover:bg-[#45154e] herobtn">
          <MdArrowBackIos className="mr-2 my-auto"/>
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
