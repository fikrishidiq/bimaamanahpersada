import { Shield, Target, Zap, Eye, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: 'Amanah & Integritas',
      desc: 'Menjaga kepercayaan dalam pengelolaan sumber daya manusia.',
    },
    {
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      title: 'Efisiensi SDM',
      desc: 'Solusi outsourcing yang didukung teknologi untuk efisiensi bisnis.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Mitra Terpercaya',
      desc: 'Membangun hubungan jangka panjang sebagai mitra strategis SDM.',
    },
  ];

  const missions = [
    'Memiliki Kompetensi Di Bidang Solusi Manajemen Yang Terus Bertumbuh',
    'Menyediakan Solusi Manajemen Yang Aplikatif Untuk Meningkatkan Daya Saing Bagi Klien',
    'Menjadi Perusahaan Yang Dikagumi Baik Secara Internal Maupun Eksternal',
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header / Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Tentang Kami</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengenal PT Bima Amanah Persada
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Kami adalah mitra terpercaya yang berfokus pada penyediaan solusi sumber daya manusia komprehensif, mulai dari layanan outsourcing, perekrutan tenaga kerja, hingga manajemen kepegawaian. Dengan dukungan teknologi, kami berkomitmen untuk memberikan fleksibilitas dan efisiensi yang dibutuhkan oleh bisnis Anda.
          </p>
        </div>

        {/* Section Visi & Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card Visi */}
          <div className="bg-gradient-to-br from-blue-50/70 to-slate-50 border border-blue-100 p-8 rounded-3xl shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-md shadow-blue-500/20">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Arah & Tujuan</span>
                  <h3 className="text-2xl font-bold text-slate-900">Visi Kami</h3>
                </div>
              </div>
              <p className="text-slate-800 text-lg sm:text-xl font-semibold leading-relaxed italic pt-2">
                "Menjadi Perusahaan Penyedia Solusi Manajemen Yang Terpercaya"
              </p>
            </div>
            <div className="pt-4 border-t border-blue-100 text-xs text-slate-500 font-medium">
              Landasan utama dalam setiap layanan dan hubungan kerja yang kami bangun.
            </div>
          </div>

          {/* Card Misi */}
          <div className="bg-gradient-to-br from-indigo-50/50 to-slate-50 border border-indigo-100 p-8 rounded-3xl shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-md shadow-indigo-500/20">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Langkah Strategis</span>
                <h3 className="text-2xl font-bold text-slate-900">Misi Kami</h3>
              </div>
            </div>

            <ul className="space-y-3.5 pt-1">
              {missions.map((misi, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                    {misi}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Section Nilai Utama Perusahaan */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900">Nilai Utama Perusahaan</h3>
            <p className="text-slate-600 text-sm mt-1">Prinsip kerja yang senantiasa menjaga kepercayaan mitra kami.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg hover:-translate-y-1 space-y-4"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm inline-block">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{v.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}