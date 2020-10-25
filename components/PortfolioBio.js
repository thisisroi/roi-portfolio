import React from 'react';

export default function PortfolioBio({description}) {
  return (
    <div className="w-full">
      <p className="text-sm font-medium text-gray-light">
        {description}
      </p>
    </div>
  )
}