import React from 'react';

export default function PortfolioName({name}) {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-white">
        {name}
      </h1>
    </div>
  )
}