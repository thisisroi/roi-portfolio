import React from 'react';

import PortfolioName from './PortfolioName';
import PortfolioJob from './PortfolioJob';
import PortfolioBio from './PortfolioBio';

export default function Portfolio({name, job, description}) {
  return (
    <div className="w-full md:w-1/2">
      <div className="flex flex-wrap items-center justify-center text-center md:text-left md:justify-start">
        <PortfolioName name={name}/>
        <PortfolioJob job={job}/>
        <PortfolioBio description={description}/>
      </div>
    </div>
  )
}