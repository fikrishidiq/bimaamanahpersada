import { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Beranda', to: '/' },
        { name: 'Tentang Kami', to: '/#tentang' },
        { name: 'Layanan', to: '/#layanan' },
        { name: 'Lowongan', to: '/lowongan' }, // Link menuju halaman baru
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo-bap-new.png"
                            alt="Logo PT Bima Amanah Persada"
                            className="h-8 w-auto object-contain"
                        />
                    </Link>
                    
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/#kontak"
                            className="bg-slate-900 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-sm"
                        >
                            Hubungi Kami
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/#kontak"
                        onClick={() => setIsOpen(false)}
                        className="block text-center w-full bg-blue-600 text-white font-medium px-4 py-3 rounded-xl shadow-md"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            )}
        </nav>
    );
}