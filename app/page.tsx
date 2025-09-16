"use client";

import Image from "next/image";
import Slider from "./components/Slider";

export default function Home() {
   const slides = [
      { src: "/1.png", alt: "Placeholder 1" },
      { src: "/2.png", alt: "Placeholder 2" },
      { src: "/3.png", alt: "Placeholder 3" },
   ];

   return (
      <div className="min-h-screen flex flex-col">
         {/* NAV */}
         <header className="w-full bg-[var(--sg-cream)]">
            <nav className="max-w-6xl mx-auto flex items-center justify-between p-6 md:p-8">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--sg-deep)] flex items-center justify-center text-white font-bold">
                     SG
                  </div>
                  <div>
                     <h1 className="text-xl text-black font-semibold">
                        Space Galley
                     </h1>
                     <p className="text-sm text-[var(--muted)] -mt-1">
                        Curated cosmic visuals
                     </p>
                  </div>
               </div>

               <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
                  <li className="hover:text-[var(--sg-crimson)] cursor-pointer">
                     Home
                  </li>
                  <li className="hover:text-[var(--sg-crimson)] cursor-pointer">
                     About
                  </li>
                  <li className="hover:text-[var(--sg-crimson)] cursor-pointer">
                     Gallery
                  </li>
                  <li className="hover:text-[var(--sg-crimson)] cursor-pointer">
                     Contact
                  </li>
               </ul>

               <div className="md:hidden">
                  <button className="p-2 rounded-md bg-[var(--sg-navy)] text-white">
                     Menu
                  </button>
               </div>
            </nav>
         </header>

         {/* HERO & SLIDER */}
         <main className="max-w-6xl mx-auto flex-1 px-6 md:px-8 py-8 md:py-12 w-full">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
               <div className="lg:col-span-5 flex flex-col gap-6">
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                     Space Galley
                  </h2>
                  <p className="text-lg text-[var(--muted)]">
                     Explore a handpicked collection of celestial imagery —
                     elegant, modern, and out of this world.
                  </p>

                  <div className="flex gap-4 flex-wrap">
                     <button className="btn-sg px-6 py-3 rounded-full shadow-md">
                        Explore Gallery
                     </button>
                     <button className="border border-[var(--sg-navy)] px-5 py-3 rounded-full text-[var(--sg-navy)]">
                        Learn more
                     </button>
                  </div>
               </div>

               <div className="lg:col-span-7">
                  <Slider
                     slides={slides.map((s) => ({
                        src: s.src.replace(/^\//, ""),
                        alt: s.alt,
                     }))}
                  />
               </div>
            </section>

            {/* Cards Section */}
            <section className="mt-12">
               <h3 className="text-2xl font-semibold mb-6">
                  Featured Collections
               </h3>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                     <article
                        key={n}
                        className="bg-white/80 dark:bg-black/40 rounded-xl overflow-hidden shadow-sm"
                     >
                        <div className="h-40 relative w-full bg-[var(--sg-blue)]/10">
                           <Image
                              src={`/images/${n}.jpg`}
                              alt={`Collection ${n}`}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                           />
                        </div>
                        <div className="p-4">
                           <h4 className="font-semibold">Collection {n}</h4>
                           <p className="text-sm text-[var(--muted)] mt-2">
                              Short placeholder description for this collection.
                              Elegant and short.
                           </p>
                           <div className="mt-4">
                              <button className="text-sm font-medium text-[var(--sg-crimson)]">
                                 View →
                              </button>
                           </div>
                        </div>
                     </article>
                  ))}
               </div>
            </section>

            {/* CTA */}
            <section className="mt-12 bg-[var(--sg-navy)] text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
               <div>
                  <h4 className="text-xl font-bold">
                     Join the Space Galley mailing list
                  </h4>
                  <p className="text-sm opacity-90 mt-1">
                     Get weekly highlights and exclusive prints.
                  </p>
               </div>
               <div className="flex gap-3 w-full md:w-auto">
                  <input
                     aria-label="email"
                     placeholder="Email address"
                     className="flex-1 px-4 py-3 rounded-md text-white"
                  />
                  <button className="btn-sg px-5 py-3 rounded-md">
                     Subscribe
                  </button>
               </div>
            </section>
         </main>

         {/* FOOTER */}
         <footer className="w-full bg-[var(--sg-cream)] mt-8">
            <div className="max-w-6xl mx-auto p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--sg-deep)] flex items-center justify-center text-white font-bold">
                     SG
                  </div>
                  <div>
                     <div className="font-semibold text-black">
                        Space Galley
                     </div>
                     <div className="text-sm text-[var(--muted)]">
                        © {new Date().getFullYear()} Space Galley
                     </div>
                  </div>
               </div>

               <div className="flex items-center gap-4 text-black">
                  <a aria-label="twitter">Twitter 🐦</a>
                  <a aria-label="instagram"> IG 📸</a>
                  <a aria-label="email">Email ✉️</a>
               </div>
            </div>
         </footer>
      </div>
   );
}
