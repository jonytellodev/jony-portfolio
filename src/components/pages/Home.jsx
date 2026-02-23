import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <div>
      <Image src="/home-image.jpg" alt="Home Image" width={800} height={600}/>
    </div>
  )
}

export default Home
