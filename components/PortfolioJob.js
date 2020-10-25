import React from 'react';

export default function PortfolioJob({job}) {
  return (
    <div className="w-full py-1 -mt-1">
      <span className="text-sm font-medium text-gray-bright">
        {job}
      </span>
    </div>
  )
}