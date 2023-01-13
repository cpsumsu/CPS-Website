import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body id="scroll" className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}