"use client";

import { AnimatedShinyTextDemo } from "./animate-shiny-text";
import GetInTouch from "./GetInTouch";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-20 px-4 md:px-6 lg:px-8 min-h-[70vh] flex justify-center items-center text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 dark:text-white">
          Simplify Your Event Management
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          {/* Dumbstyle is launching soon to revolutionize how you plan, organize,
          and execute events. */}
          We are launching soon
        </p>

        <div className="flex justify-center items-center space-x-4">
          <GetInTouch />
          <AnimatedShinyTextDemo />
        </div>
      </div>
    </section>
  );
}
