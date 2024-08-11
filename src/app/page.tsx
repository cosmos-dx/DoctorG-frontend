"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import { NavBar } from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full">
          <HeroSection />

        </div>
      </div>
    </>
  );
}
