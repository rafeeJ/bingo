"use client";
import { useState } from "react";
import { Grid } from "@/features/bingo-grid/grid";

export default function Home() {
  const [size] = useState(3);

  return (
    <section className={"flex flex-row px-16 justify-around"}>
      <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
          Track your 2025 goals
          <span className="text-primary"> with Bingo!</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Try a new way to track your resolutions and goals with Bingo. Simple,
          effective, and designed for your success.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Get Started
          </a>
          <a className="text-sm font-semibold leading-6">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <section className={"max-w-screen-sm transition-all duration-500"}>
        <Grid size={size} />
      </section>
    </section>
  );
}
