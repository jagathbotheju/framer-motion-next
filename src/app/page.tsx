import Image from "next/image";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Section />
      <Schedule />
    </main>
  );
}
