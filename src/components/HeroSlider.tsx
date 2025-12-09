import { useEffect, useState } from "react";

interface Slide {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const slides: Slide[] = [
  {
    title: "Fakultas Sains dan Teknologi",
    description:
      "Fakultas Sains dan Teknologi berdiri untuk menjadi pusat pengembangan ilmu pengetahuan dan teknologi di UIN Suska Riau.",
    image: "/profile/public/1.png",
    link: "/fakultas",
  },
  {
    title: "Program Studi Teknik Informatika",
    description:
      "Prodi Teknik Informatika berkomitmen mencetak lulusan yang unggul dalam bidang komputasi, jaringan, dan pengembangan perangkat lunak.",
    image: "/images/tif.jpg",
    link: "/tif",
  },
  {
    title: "Dosen Profesional & Kompeten",
    description:
      "Tenaga pendidik TIF UIN Suska Riau adalah akademisi profesional yang siap membimbing mahasiswa menuju masa depan gemilang.",
    image: "/images/dosen.jpg",
    link: "/dosen",
  },
  {
    title: "Mahasiswa Berprestasi",
    description:
      "Mahasiswa TIF terus mengukir prestasi baik di tingkat lokal, nasional, maupun internasional.",
    image: "/images/prestasi.jpg",
    link: "/prestasi",
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const active = slides[index];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-gray-900 text-white">
      {/* IMAGE */}
      <img
        src={active.image}
        className="absolute inset-0 w-full h-full object-cover brightness-50 transition-all duration-700"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full px-10 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          {active.title}
        </h1>
        <p className="mt-4 text-gray-200 text-lg drop-shadow-md">
          {active.description}
        </p>

        {active.link && (
          <a
            href={active.link}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg w-fit text-lg shadow-md"
          >
            Lihat
          </a>
        )}
      </div>

      {/* BUTTON LEFT */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full"
      >
        ‹
      </button>

      {/* BUTTON RIGHT */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-3 rounded-full"
      >
        ›
      </button>

      {/* INDICATOR DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-blue-500" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
