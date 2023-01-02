import Image from 'next/image'
import { css, jsx } from '@emotion/react'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className={openSans.className} >
        <Image
          src="images/czred.svg"
          alt="CZRED Logo"
          width={500}
          height={500}
          priority
        />
        <p css={{
          color: 'darkorchid',
          backgroundColor: 'lightgray'
        }}>some test text
        </p>
      </main>
    </>
  )
}
