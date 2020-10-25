import React from 'react';

export default function Layout({children}) {
  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:h-screen lg:mx-auto">
      <div className="px-5 py-5">
        {children}
      </div>
    </div>
  )
}
