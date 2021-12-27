import Head from "next/head";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tansi Jones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/bg.jpg" layout="fill" className=" object-cover" />
    </>
  );
}
