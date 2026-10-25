export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 1. ÜST MENÜ (NAVBAR) */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              DEÜ YBS
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
              Topluluğu
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm text-slate-300 font-medium">
            <a href="#hakkimizda" className="hover:text-blue-400 transition">Hakkımızda</a>
            <a href="#etkinlikler" className="hover:text-blue-400 transition">Etkinlikler</a>
            <a href="#iletisim" className="hover:text-blue-400 transition">İletişim</a>
          </nav>
          <a
            href="https://forms.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            Aramıza Katıl
          </a>
        </div>
      </header>

      {/* 2. KARŞILAMA (HERO) ALANI */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center flex-1 flex flex-col items-center justify-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
          Geleceğin Teknolojisi & Yönetimi
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl mb-6">
          İş Dünyası ile Teknolojiyi{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
            Bir Araya Getiriyoruz
          </span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
          Dokuz Eylül Üniversitesi Yönetim Bilişim Sistemleri Topluluğu olarak; teknik atölyeler, kariyer zirveleri ve yenilikçi projelerle kendimizi geleceğe hazırlıyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#etkinlikler"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition"
          >
            Etkinlikleri İncele
          </a>
          <a
            href="#hakkimizda"
            className="border border-slate-700 hover:border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-xl transition"
          >
            Bizi Tanıyın
          </a>
        </div>
      </section>

      {/* 3. NELER YAPIYORUZ? (KARTLAR) */}
      <section id="hakkimizda" className="border-t border-slate-900 bg-slate-900/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Neler Yapıyoruz?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center font-bold mb-4">
                💻
              </div>
              <h3 className="text-lg font-semibold mb-2">Teknik Atölyeler</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Yazılım geliştirme, veri bilimi ve yapay zeka konularında uygulamalı hands-on eğitimler düzenliyoruz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-indigo-950 text-indigo-400 flex items-center justify-center font-bold mb-4">
                🎤
              </div>
              <h3 className="text-lg font-semibold mb-2">Kariyer Zirveleri</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Sektörün öncü firmalarını ve DEÜ mezunlarını öğrencilerle buluşturarak mentorluk ve staj kapılarını aralıyoruz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center font-bold mb-4">
                🚀
              </div>
              <h3 className="text-lg font-semibold mb-2">Proje & Takım Çalışması</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hackathonlara katılıyor, topluluk içi ekipler kurarak gerçek hayat problemlerine yazılımsal çözümler üretiyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ALT BİLGİ (FOOTER) */}
      <footer id="iletisim" className="border-t border-slate-800 py-8 bg-slate-950 text-center text-slate-500 text-sm">
        <p className="mb-2">© {new Date().getFullYear()} DEÜ Yönetim Bilişim Sistemleri Topluluğu</p>
        <p className="text-xs">Buca / İzmir</p>
      </footer>
    </div>
  );
}