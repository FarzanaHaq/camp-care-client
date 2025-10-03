import React from 'react'

const ServiceCard = ({image, title, description}) => {
  return (
    <div className="bg-white max-w-[400px] rounded-2xl border-2 border-gray-200 py-10 space-y-3 back-card">
          <div className="flex justify-center ">
            <img
              src={image}
              className="w-[70px]"
              alt=""
              loading='lazy'
            />
          </div>
          <h1>
            <h1 className="text-center text-[#031B4E] text-[22px] font-[500] letter-primary">
              {title}
            </h1>
            <p className="text-center text-[#6F6F6F] text-[18px] max-w-60 mx-auto">
              {description}
            </p>
          </h1>
        </div>
  )
}

export default ServiceCard