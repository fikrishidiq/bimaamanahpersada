import { Mail, Phone, MapPin, Headphones, MessageCircle } from 'lucide-react';

export default function Contact() {
    return (
        <section id="kontak" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Info Side */}
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Hubungi Kami</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                                Contact
                            </h2>
                            <p className="text-slate-600 mt-4 text-sm sm:text-base">
                                Tim kami siap membantu menjawab pertanyaan dan memberikan konsultasi terbaik bagi perusahaan Anda.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Customer Service */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                                    <Headphones className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">Customer Service</h4>
                                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                                        (Mon – Fri, 8AM – 5PM)
                                    </p>
                                </div>
                            </div>

                            {/* Alamat */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">Alamat</h4>
                                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                                        Perumahan Taman Puri Cendana Blok D1 No. 42, Desa Tridaya Sakti, Kec. Tambun Selatan, Kab. Bekasi
                                    </p>
                                </div>
                            </div>

                            {/* Telepon */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">Telepon</h4>
                                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                                        021-89774366
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">Email</h4>
                                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                                        bap_pt@yahoo.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - CTA WhatsApp */}
                    <div className="lg:col-span-6">
                        <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/80 h-full flex flex-col items-center justify-center text-center">

                            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <MessageCircle className="w-10 h-10" />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Butuh Respons Cepat?</h3>

                            <p className="text-slate-500 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                                Tim kami siap membantu Anda. Hubungi kami melalui WhatsApp untuk tanggapan yang lebih instan.
                            </p>

                            <a
                                href="https://wa.me/6282191607230?text=Halo%20Admin%20PT%20Bima%20Amanah%20Persada,%20saya%20ingin%20berkonsultasi."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg text-base shadow-sm w-full sm:w-auto"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Chat via WhatsApp
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}