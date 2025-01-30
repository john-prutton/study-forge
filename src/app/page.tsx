import Image from "next/image";
import Link from "next/link";

import Logo from "@/../public/logo.png";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image
        src={Logo}
        alt="logo"
        fill
        className="!relative !size-[50vw] md:!size-[300px]"
      />

      <h1 className="text-4xl font-bold text-center">
        Study
        <span className="text-yellow-500">Forge</span>
      </h1>

      <Link href="/auth" className="text-blue-500 underline mt-8">
        Get started
      </Link>
    </div>
  );
}
