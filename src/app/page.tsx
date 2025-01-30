import Image from "next/image";
import Link from "next/link";

import { LucidePenTool } from "lucide-react";

import Logo from "@/../public/logo.png";
import { Button } from "@/components/ui/button";

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
        <span className="text-primary">Forge</span>
      </h1>

      <Button
        className="mt-8 w-1/2 max-w-80 animate-pulse focus-within:animate-none focus-within:scale-110 hover:animate-none hover:scale-110 transition-all font-bold"
        asChild
      >
        <Link href="/auth">
          Get started
          <LucidePenTool className="-scale-100 !size-6" />
        </Link>
      </Button>
    </div>
  );
}
