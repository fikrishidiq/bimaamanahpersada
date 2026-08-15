import { Briefcase, Users, FileText, MonitorSmartphone, Target, CheckCircle2 } from 'lucide-react';

export default function Services() {
    const serviceProducts = [
        'Cleaning Service', 'Operator Produksi / Packing', 'Tenaga Bongkar Muat (TKBM)',
        'Driver', 'Mesengger', 'Receptionist', 'Export & Import Staff', 'PPJK Staff',
        'Customer Sevice', 'Stock Keeper', 'Transport Tracer', 'Transport Planner',
        'Management Traine', 'Krani', 'Picker / Checker', 'Admin Inventory',
        'Admin Inbound / Outbound', 'Admin Transport', 'Admin POD', 'Leader Team'
    ];

    const benefits = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'Pengadaan Pelamar Kerja',
            desc: 'Kami menyediakan Curriculum Vitae dengan kandidat-kandidat tenaga kerja yang memenuhi kebutuhan perusahaan Anda. Sumber data kami selalu diperbaharui sehingga Anda mendapatkan Curriculum Vitae yang valid, lengkap dan terbaru.',
            points: []
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: 'Proses Rekrutmen',
            desc: '',
            points: [
                'Mendapatkan kandidat yang tepat sesuai dengan kebutuhan perusahaan.',
                'Proses sangat cepat karena PT Bima Amanah Persada di dukung oleh jaringan yang luas.'
            ]
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Penyediaan Karyawan',
            desc: '',
            points: [
                'CEPAT: Kami menyajikan layanan yang cepat, karena di dukung oleh jaringan yang luas.',
                'SESUAI: Kami menyediakan kandidat yang sesuai dengan kebutuhan klien.',
                'JARINGAN: Kami memiliki sourcing community di seluruh Indonesia.'
            ]
        },
        {
            icon: <MonitorSmartphone className="w-6 h-6" />,
            title: 'Aplikasi Pendukung',
            desc: '',
            points: [
                'Pengawasan produktivitas karyawan yang tepat dan akurat.',
                'Proses Kerja yang lebih cepat dan mulus.',
                'Meningkatnya produktifitas kerja.',
                'Membuat proses kerja jauh lebih mudah.',
                'Biaya overhead dan operasional yang lebih rendah.'
            ]
        }
    ];

    return (
        <section id="layanan" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Bagian 1: Employee Supply & Service Product */}
                <div className="mb-20">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Deskripsi Employee Supply */}
                        <div className="lg:w-1/2 space-y-5">
                            <div className="space-y-2">
                                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Layanan Kami</span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                                    Employee Supply Management
                                </h2>
                            </div>
                            <p className="text-slate-600 text-base leading-relaxed text-justify">
                                Layanan terpadu untuk pemenuhan kebutuhan tenaga kerja yang di dalamnya meliputi jasa rekrutmen tenaga kerja, penyediaan CV, Aplikasi Pendukung Kerja, penggajian, kontrak, kompensasi dan benefit serta hubungan Industrial.
                            </p>
                            <p className="text-slate-600 text-base leading-relaxed text-justify">
                                Sebagai perusahaan tenaga kerja alih daya, <strong>PT Bima Amanah Persada</strong> selalu menyediakan tenaga kerja dan jasa outsourcing berpengalaman dan terpercaya dalam mengurus kebutuhan Manajemen Anda.
                            </p>
                        </div>

                        {/* List Service Product */}
                        <div className="lg:w-1/2">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm h-full">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-blue-600" />
                                    Service Product
                                </h3>
                                <div className="flex flex-wrap gap-2.5">
                                    {serviceProducts.map((product, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium px-3.5 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default"
                                        >
                                            {product}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian 2: Keuntungan */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Nilai Tambah</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            Keuntungan Layanan Kami
                        </h2>
                    </div>

                    {/* Card Grid Keuntungan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((item, idx) => (
                            <div
                                key={idx}
                                className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                {/* Judul dan Ikon digabung di dalam div ini */}
                                <div className="mb-5 inline-flex items-center gap-3 p-3 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl transition-colors">
                                    {item.icon}
                                    <h3 className="text-base font-bold">
                                        {item.title}
                                    </h3>
                                </div>

                                {item.desc && (
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                )}

                                {item.points && item.points.length > 0 && (
                                    <ul className="space-y-3 mt-1">
                                        {item.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}