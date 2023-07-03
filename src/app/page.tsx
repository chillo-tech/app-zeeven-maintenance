import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
        <Link href='/' className="text-center text-app-blue text-5xl py-4 font-bold">ZEEVEN</Link>
        <section>
          <div className="container grid md:grid-cols-2 gap-8 h-30">
            <div className="py-20">
            <h1 className="py-3 font-bold text-5xl mb-4">Notre site est en maintenance</h1>
            <p className="text-2xl">Toutes nos équipes sont mobilisées pour rétablir au plus vite la situation.</p>
            </div>
            <div className="relative">
              <Image 
                unoptimized
                fill={true}
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={'/images/meeting.jpeg'} 
                alt='Informez vos contacts, il apprécient votre attention'
              />
            </div>
          </div>
        </section>
        <footer>
        <div className="mx-auto border-t border-slate-400 pb-5 pt-5 text-center text-sm !font-extralight bg-app-blue text-white text-lg">
            &copy; Copyright {new Date().getFullYear()}
            <Link href="https://chillo.tech" target="_blank" className="mx-1 border-b border-white">
              chillo services
            </Link>
            Tous droits réservés.
          </div>
        </footer>
    </main>
  )
}
