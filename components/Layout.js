import React from 'react';
import Head from "next/head";

export default function Layout({ children }) {
  return(
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>My Portfolio</title>
      </Head>
      <div className="lg:flex lg:items-center lg:justify-center lg:h-screen lg:mx-auto">
        <div className="px-5 py-5">
          { children }
        </div>
      </div>
    </div>
  )
}