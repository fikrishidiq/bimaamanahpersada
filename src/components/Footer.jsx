import { ShieldCheck } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">

                    {/* Brand Col */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-2 bg-blue-600 rounded-xl">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <span className="font-extrabold text-lg tracking-tight">
                                PT BIMA AMANAH PERSADA
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                            Mitra terpercaya yang berkomitmen pada integritas, kualitas, dan inovasi berkelanjutan demi mendukung kesuksesan bisnis Anda.
                        </p>
                    </div>

                    {/* Nav Col 1 */}
                    <div>
                        <h4 className="text-white text-sm font-bold mb-4">Navigasi</h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                            <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
                            <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                            <li><a href="#layanan" className="hover:text-white transition-colors">Layanan</a></li>
                            <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
                        </ul>
                    </div>

                    {/* Nav Col 2 */}
                    <div>
                        <h4 className="text-white text-sm font-bold mb-4">Layanan</h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                            <li><span className="hover:text-white cursor-pointer">Konsultasi Manajemen</span></li>
                            <li><span className="hover:text-white cursor-pointer">Layanan Outsourcing</span></li>
                            <li><span className="hover:text-white cursor-pointer">Pengembangan Bisnis</span></li>
                        </ul>
                    </div>

                    {/* Nav Col 3 */}
                    <div>
                        <h4 className="text-white text-sm font-bold mb-4">Legal</h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                            <li><span className="hover:text-white cursor-pointer">Kebijakan Privasi</span></li>
                            <li><span className="hover:text-white cursor-pointer">Syarat & Ketentuan</span></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                    <p>© {new Date().getFullYear()} PT Bima Amanah Persada. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}