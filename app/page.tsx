import Image from "next/image";
// app/page.tsx (Next.js 13+ con App Router)
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Benvenuto nel tuo nuovo sito Next.js 🚀
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Questa è la tua pagina iniziale, elegante, moderna e pronta per stupire!
        </p>
        <a
          href="/about"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          Scopri di più
        </a>
      </div>

      <div className="mt-16 w-full max-w-md">
        <img
          src="https://illustrations.popsy.co/violet/web-design.svg"
          alt="Welcome"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
    </main>
  );
}
