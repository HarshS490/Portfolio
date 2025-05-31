import Head from "next/head";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ConnectWithMe from "@/components/ConnectWithMe";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200 relative">
      <Head>
        <title>Harsh Singh | Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio website showcasing projects and skills"
        />
      </Head>

      <Navbar />

      <main className="portfolio-body relative">
        <HomePage />
        <About />
        <Projects />
        <Skills />
        <ConnectWithMe />
      </main>
    </div>
  );
}
