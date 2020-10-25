import React from 'react';

import SocialMediaLink from './SocialMediaLink'

export default function SocialMedia({ social_links }) {
  return(
    <div className="flex flex-no-wrap justify-center w-full h-full py-2 mt-1 mr-0 md:mr-3 md:py-0 md:w-12 md:flex-wrap md:space-y-2">
      {
        social_links.map((link, i) => (
          <SocialMediaLink key={ i } link={ link } />
        ))
      }
    </div>
  )
}