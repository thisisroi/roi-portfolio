import React from 'react';

export default function SocialMediaLink({link}) {
  return (
    <a
      href={link.to}
      className={`flex items-center justify-center w-10 h-10 mr-2
        text-${link.color}-400 bg-${link.color}-500 transition
        duration-150 hover:bg-opacity-50 bg-opacity-25 rounded-lg md:mr-0
      `}
    >
      <i className={link.icon}/>
    </a>
  )
}