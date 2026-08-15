import { ArrowRight, Award, Users, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section id="beranda" className="relative pt-12 pb-20  bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold">
                            <Award className="w-4 h-4" />
                            <span>Mitra Bisnis Terpercaya & Profesional</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                            Membangun Sinergi, <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Menjaga Amanah
                            </span>
                        </h1>

                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                            PT Bima Amanah Persada hadir memberikan solusi komprehensif berstandar tinggi. Kami berdedikasi menciptakan nilai tambah berkelanjutan bagi para mitra usaha di seluruh Indonesia.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <a
                                href="#kontak"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
                            >
                                Mulai Konsultasi
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#tentang"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold px-7 py-3.5 rounded-xl transition-all"
                            >
                                Tentang Perusahaan
                            </a>
                        </div>

                        {/* Micro Trust Indicators */}
                        <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900">100%</p>
                                <p className="text-xs sm:text-sm text-slate-500">Komitmen Amanah</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900">10+</p>
                                <p className="text-xs sm:text-sm text-slate-500">Mitra Strategis</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-slate-900">24/7</p>
                                <p className="text-xs sm:text-sm text-slate-500">Dukungan Layanan</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual / Hero Card */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-xl"></div>

                            <div className="relative bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
                                <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Komitmen Utama</h3>
                                        <p className="text-xs text-slate-500">Nilai dasar operasional kami</p>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {[
                                        'Integritas dan Transparansi Tinggi',
                                        'Pelayanan Profesional & Tepat Waktu',
                                        'Solusi Inovatif',
                                        'Fokus pada Kepuasan Mitra',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 italic text-center">
                                    "Menjadi perusahaan unggul yang memegang teguh kepercayaan."
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}