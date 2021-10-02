import MetaHead from "../components/MetaHead";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MetaHead />
      <Image src="/comingsoon.svg" layout="fill" className=" object-cover" />
    </>
  );
}
