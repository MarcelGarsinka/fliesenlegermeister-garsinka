import Image from 'next/image'

const CONTACT = {
  phone: '+49 175 4957662',
  email: 'info@fliesenlegermeister-mg.de',
  address: 'Heubergstr. 23, 83404 Ainring',
  hours: 'Termine nach Vereinbarung'
}

const IMAGES = [
  // high-quality Unsplash images (external)
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586201375761-83865001e0a5?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598300052555-0c8b5d1b3f05?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622209932863-9b6f3b2b1b3a?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586023492125-27b1f4e8a9d6?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542317854-9bc6b7f4f3c6?w=1600&q=80&auto=format&fit=crop'
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white drop-shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="40" height="40" rx="6" fill="#0f172a"/>
              <text x="50%" y="55%" textAnchor="middle" fill="#ffffff" fontSize="14" fontFamily="sans-serif">MG</text>
            </svg>
            <div>
              <div className="text-lg font-semibold">Fliesenlegermeister Garsinka Marcel</div>
              <div className="text-sm text-gray-500">Ihr zuverlässiger Partner</div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#leistungen" className="hover:text-accent">Leistungen</a>
            <a href="#referenzen" className="hover:text-accent">Referenzen</a>
            <a href="#kontakt" className="hover:text-accent">Kontakt</a>
          </nav>
          <div className="hidden md:block text-right text-sm">
            <div className="font-medium">{CONTACT.phone}</div>
            <div className="text-gray-500">{CONTACT.email}</div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="h-[520px] w-full relative">
            <Image src={IMAGES[0]} alt="Hero" fill style={{objectFit: 'cover'}} sizes="100vw" />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="max-w-4xl mx-auto px-6 text-white text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Fliesenlegermeister Garsinka Marcel</h1>
                <p className="text-lg mb-6">Planung • Ausführung • High‑End Fliesenlösungen</p>
                <a href="#kontakt" className="inline-block bg-accent text-white px-6 py-3 rounded-md">Projekt anfragen</a>
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">Unsere Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">Fliesenarbeiten (Bäder, Küche, Boden)</h3>
                <p className="text-sm text-gray-600">Präzise Verlegung, Naturstein & anspruchsvolle Oberflächen.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">High‑End Projekte</h3>
                <p className="text-sm text-gray-600">XXL‑Formate, fugenarme Designs & Kantenverklebung.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">Befliesbare Duschablagen</h3>
                <p className="text-sm text-gray-600">Edle, maßgefertigte Detaillösungen für Design‑Duschen.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">Planung & Koordination</h3>
                <p className="text-sm text-gray-600">Abstimmung mit Architekten & anderen Gewerken.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">Beratung & Betreuung</h3>
                <p className="text-sm text-gray-600">Hilfestellung bei baulichen Fragen & Materialwahl.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold mb-2">Sanierungen & Umbauten</h3>
                <p className="text-sm text-gray-600">Termingerechte & saubere Umsetzung.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="referenzen" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-8 text-center">Vorher – Nachher</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {IMAGES.slice(1,4).map((src, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
                  <div className="relative h-64">
                    <Image src={src} alt={`Referenz ${idx+1}`} fill style={{objectFit: 'cover'}} sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Luxusbad & Design</h3>
                    <p className="text-sm text-gray-600">Hochwertige Materialien & präzise Verarbeitung.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <form className="bg-white p-6 rounded-xl shadow space-y-4" action="#" method="POST">
              <input name="name" placeholder="Ihr Name" className="w-full p-3 border rounded" />
              <input name="email" placeholder="Ihre E-Mail" className="w-full p-3 border rounded" />
              <input name="phone" placeholder="Telefon (optional)" className="w-full p-3 border rounded" />
              <textarea name="message" placeholder="Ihre Nachricht" rows="5" className="w-full p-3 border rounded" />
              <button className="w-full bg-accent text-white p-3 rounded">Nachricht senden</button>
            </form>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
              <p className="mb-1">{CONTACT.phone}</p>
              <p className="mb-1">{CONTACT.email}</p>
              <p className="mb-3">{CONTACT.address}</p>
              <p className="text-sm text-gray-600">{CONTACT.hours}</p>
              <div className="mt-6">
                <iframe src="https://www.google.com/maps?q=Heubergstr.23+83404+Ainring&output=embed" className="w-full h-48 rounded-xl border-0"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-semibold">Fliesenlegermeister Garsinka Marcel</div>
          <div className="text-sm mt-2">{CONTACT.address} • {CONTACT.phone} • {CONTACT.email}</div>
          <div className="text-xs opacity-80 mt-4">© {new Date().getFullYear()} Fliesenlegermeister Garsinka Marcel • Impressum • Datenschutz</div>
        </div>
      </footer>
    </div>
  )
}
