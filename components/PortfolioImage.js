import React from 'react';

export default function PortfolioImage({image}) {
  return (
    <div className="flex w-full md:w-1/5">
      <div className="flex justify-center w-full md:justify-start">
        <img className="rounded-lg" src={image} width="192" alt="Portfolio's image"/>
      </div>
    </div>
  )
}