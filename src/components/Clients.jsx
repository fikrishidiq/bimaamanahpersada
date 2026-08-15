export default function Clients() {
    const mainPartners = [
        { name: 'Shipper', logo: '/logo-shipper.png' },
        { name: 'SnD', logo: '/logo-snd.png' },
        { name: 'Kuehne+Nagel', logo: '/logo-KN.png' },
    ];

    const supportedPartners = [
        { name: 'Mekari e-sign', logo: '/logo-mekari.png' },
    ];

    return (
        <section id="mitra" className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Bagian Our Partners */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 text-center md:text-left whitespace-nowrap">
                        Our Partners
                    </h3>

                    {/* Garis pemisah vertikal */}
                    <div className="hidden md:block w-px h-12 bg-slate-300"></div>

                    {/* Logo Mitra Utama */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {mainPartners.map((partner, idx) => (
                            <img
                                key={idx}
                                src={partner.logo}
                                alt={`Logo ${partner.name}`}
                                className="h-10 md:h-12 w-auto object-contain "
                            />
                        ))}
                    </div>
                </div>

                {/* Bagian Supported Partner By */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 text-center md:text-left whitespace-nowrap">
                        Supported Partner By
                    </h3>

                    {/* Garis pemisah vertikal */}
                    <div className="hidden md:block w-px h-10 bg-slate-300"></div>

                    {/* Logo Mitra Pendukung */}
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {supportedPartners.map((partner, idx) => (
                            <img
                                key={idx}
                                src={partner.logo}
                                alt={`Logo ${partner.name}`}
                                className="h-8 md:h-10 w-auto object-contain "
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}