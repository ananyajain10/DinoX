import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";

export default function Home() {
  return (
   <div className="bg-slate-50">
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 
      lg:pt-24 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block ">
                <img src= "/images/Dino.png" alt="case" className="w-full" />
                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                  Get Your <span className="bg-black text-white px-2">Impression</span> T-shirts
                </h1>
                <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center
                lg:text-left text-balance md:text-wrap">
                  Capture memories, create a statement, or simply show off your style with our custom t-shirts.

                </p>
                <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center
                sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check size={20} />
                      High-quality prints
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
      </MaxWidthWrapper>
    </section>
   </div>
  );
}
