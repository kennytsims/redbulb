import Image from "next/image";
import { Poppins } from "next/font/google";

import Services from "@/components/services/services";
import Header from "@/components/header/header";
import Partners from "@/components/patners/partners";
import Article from "@/components/article/article";
import TrainingModule from "@/components/services/training";
import Subsection from "@/components/subsection/subsection";
import SimpleSlider from "@/components/patners/slider";

export default function Home() {
  return (
    <main className="">
      <header>
        <Header />
      </header>
      <section className="w-full  text-slate-500">
        <Article />
        <div className="">
          <TrainingModule />
        </div>
        <div>
          <Subsection />
        </div>

        <div>
          <Partners />
        </div>
      </section>
    </main>
  );
}
