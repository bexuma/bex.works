import Head from 'next/head'

export default function SqkoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Head>
        <link rel="preload" as="video" href="/demo-v1.webm" type="video/webm" />
      </Head>
      {children}
    </>
  )
}
