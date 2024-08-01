import React from "react";
import Image from "next/image";
import { SocialIcons } from "@/lib/utils";
import { UilMessage } from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 md:pt-44 lg:mx-6 mx-4 grid md:custom-grid gap-4 items-center"
    >
      <div className="flex flex-col gap-4">
        {SocialIcons.map((item, idx) => {
          const ItemComponent = item.icon;
          return (
            <a href={item.link} key={idx}>
              <ItemComponent />
            </a>
          );
        })}
      </div>
      <Image
        className="bg-cover box-shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] md:order-1  justify-self-center w-75 h-75 animate-profile-animate grayscale"
        alt="image"
        width={300}
        height={300}
        src="/ola_pic.png"
      />
      <div className="w-full col-span-2 md:col-auto">
        <h1 className="text-5xl pb-2">Olatunde Adegboyebo</h1>
        <p className="text-3xl pb-2">Software Engineer</p>
        <p className="pb-4">
          I am a software engineer working on both frontend and backend
          applications
        </p>
        <div className="border-none flex items-center gap-2 bg-black text-white p-4 rounded-xl w-36 my-4">
          <a href="#contact" className="">
            Say Hello
          </a>
          <UilMessage className=" -rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
