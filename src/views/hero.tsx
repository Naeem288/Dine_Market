import React from "react";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { ShoppingCart } from "lucide-react";
import heroImage from "@/logo/heroimg.webp";
import bazaar from "@/logo/bazaar.webp";
import bustle from "@/logo/bustle.webp";
import versace from "@/logo/versace.webp";
import instyle from "@/logo/instyle.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex gap-y-10 justify-center items-center">
      {/* left side */}
      <div className="flex-1">
        <Badge className="py-2 px-5 rounded-lg bg-blue-100 text-blue-800 text-lg hover:bg-blue-200">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mt-6">
          An Industrial <br /> Take on <br />
          Streetwear
        </h1>
        <p className="font-semibold mt-6 ">
          Anyone can beat you but no one can <br /> beat your outfit as long as
          you wear <br /> Dine outfits.
        </p>
        <span className="flex mt-6">
          <Button className="gap-1 rounded-lg">
            <ShoppingCart className="flex justify-center" />
            Start Shopping
          </Button>
        </span>
        <div className="flex gap-x-4 mt-6 ">
          <Image src={bazaar} alt="bazaar" />
          <Image src={bustle} alt="bustle" />
          <Image src={versace} alt="versace" />
          <Image src={instyle} alt="instyle" />
        </div>
      </div>
      {/* right side */}
      <div className=" flex-1  bg-orange-300  rounded-full ">
        <Image className="" src={heroImage} alt="heroImage" />
      </div>
    </section>
  );
};

export default Hero;
