import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import './style.css'; 
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
      </div>






    </main>
  );
}
