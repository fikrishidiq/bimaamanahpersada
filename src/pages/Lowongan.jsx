import { Briefcase, MapPin, Clock, ArrowUpRight, SearchX } from 'lucide-react';

const getRelativeTime = (dateString) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const postDate = new Date(dateString);
    postDate.setHours(0, 0, 0, 0);

    const diffTime = Math.abs(today - postDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hari ini';
    if (diffDays === 1) return 'Kemarin';
    if (diffDays < 7) return `${diffDays} hari yang lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu yang lalu`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan yang lalu`;
    return `${Math.floor(diffDays / 365)} tahun yang lalu`;
};

export default function Lowongan() {
    // format standar: YYYY-MM-DD
    const jobs = [
        // {
        //     id: 1,
        //     title: 'Operator Produksi',
        //     type: 'Full-time',
        //     location: 'Kawasan Industri Cikarang, Kab. Bekasi',
        //     postedDate: '2026-08-13',
        //     desc: 'Dibutuhkan segera operator produksi untuk penempatan pabrik manufaktur. Bersedia bekerja dengan sistem shift.'
        // },
        // {
        //     id: 2,
        //     title: 'Admin Inbound / Outbound',
        //     type: 'Kontrak',
        //     location: 'Tambun Selatan, Kab. Bekasi',
        //     postedDate: '2026-08-10',
        //     desc: 'Bertanggung jawab atas pencatatan barang masuk dan keluar, membuat laporan harian, dan teliti dalam administrasi.'
        // },
        // {
        //     id: 3,
        //     title: 'Cleaning Service',
        //     type: 'Full-time',
        //     location: 'Jakarta Selatan',
        //     postedDate: '2026-08-08',
        //     desc: 'Dicari tenaga kebersihan untuk area perkantoran. Memiliki pengalaman minimal 1 tahun di bidang yang sama.'
        // }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pt-12 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 px-3 py-1 rounded-full">
                        Karir
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-6 mb-4">
                        Temukan Peluang Baru
                    </h1>
                    <p className="text-slate-600 text-base">
                        Bergabunglah bersama jaringan profesional kami. Kami selalu mencari talenta terbaik untuk ditempatkan di berbagai perusahaan mitra terkemuka.
                    </p>
                </div>

                {jobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full relative overflow-hidden">

                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-600 transition-colors duration-500 opacity-50 group-hover:opacity-10"></div>

                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md mb-4">
                                        {job.type}
                                    </span>
                                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {job.title}
                                    </h2>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {job.desc}
                                </p>

                                <div className="space-y-2 mb-8">
                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                        <MapPin className="w-4 h-4" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                        <Clock className="w-4 h-4" />
                                        <span>{getRelativeTime(job.postedDate)}</span>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/6282191607230?text=Halo,%20saya%20ingin%20melamar%20untuk%20posisi%20${encodeURIComponent(job.title)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto w-full inline-flex justify-center items-center gap-2 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-semibold py-3 rounded-xl transition-colors text-sm border border-slate-200 hover:border-blue-600"
                                >
                                    Lamar Sekarang
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200 shadow-sm">
                        <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-6">
                            <SearchX className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                            Belum Ada Lowongan Tersedia
                        </h3>
                        <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                            Saat ini kami belum membuka posisi baru. Silakan pantau terus halaman ini secara berkala untuk pembaruan peluang karir selanjutnya.
                        </p>
                    </div>
                )}

                <div className="mt-16 bg-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg">
                    <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-2xl font-bold mb-3">Titipkan CV Anda</h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Meskipun posisi yang Anda cari belum tersedia, jangan ragu untuk mengirimkan Curriculum Vitae (CV) Anda. Kami akan menghubungi Anda jika ada peluang yang sesuai.
                    </p>
                    <a href="mailto:bimaamanahpersada@yahoo.com" className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                        Kirim CV Sekarang
                    </a>
                </div>

            </div>
        </div>
    );
}