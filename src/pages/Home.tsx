import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Wrench, Clock, ShieldCheck, Phone, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import heatingImg from '../assets/heating.png';
import plumbingImg from '../assets/plumbing.png';
import bathroomImg from '../assets/bathroom.png';
import heroBg from '../assets/hero-bg-updated.jpg';

import SEO from '../components/SEO';

const Home = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "name": "LM Impianti",
        "image": "https://lavianoimpianti.it/assets/hero-bg-updated.jpg",
        "@id": "https://lavianoimpianti.it",
        "url": "https://lavianoimpianti.it",
        "telephone": "+393398321087",
        "priceRange": "€€",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Frassineto, 42",
            "addressLocality": "Torino",
            "postalCode": "10139",
            "addressCountry": "IT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.0692714,
            "longitude": 7.6374502
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "13:00"
            }
        ],
        "sameAs": [
            "https://www.linkedin.com/in/marco-laviano-89953232/"
        ]
    };

    return (
        <div className="w-full overflow-hidden">
            <SEO
                title="Idraulico Torino | LM Impianti - Caldaie e Ristrutturazioni"
                description="Idraulico a Torino esperto in installazione caldaie, ristrutturazione bagni e impianti termoidraulici. Interventi rapidi e preventivi gratuiti."
                canonical="/"
                structuredData={structuredData}
            />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-slate-900 border-b border-slate-800 pb-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <img src={heroBg} alt="Background" className="w-full h-full object-cover object-[center_30%] opacity-100" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                </div>

                <div className="container mx-auto px-4 z-10 relative mt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl"
                        >
                            Il Tuo Idraulico di <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyan-400">Fiducia</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                            className="text-lg md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg font-medium antialiased"
                        >
                            Interventi rapidi a <strong>Torino e provincia</strong>. Professionalità e soluzioni su misura per il tuo comfort.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <a href="tel:+393398321087" className="group w-full sm:w-auto px-10 py-5 bg-secondary text-white rounded-2xl font-bold text-xl hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:shadow-2xl">
                                Chiama Ora <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            </a>
                            <Link to="/preventivo" className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-md border border-white/10 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                Richiedi Preventivo <ArrowRight className="w-5 h-5 opacity-70" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-12 md:py-20 bg-white relative z-20 rounded-t-[3rem] -mt-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-block px-4 py-1.5 bg-slate-100 text-secondary rounded-full font-bold tracking-wider uppercase text-xs md:text-sm mb-4">
                            I Nostri Servizi
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Soluzioni Complete</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Dall'installazione alla manutenzione, ci prendiamo cura del tuo impianto a 360°.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 [&>*:nth-child(odd):last-child]:col-span-2 lg:[&>*:nth-child(odd):last-child]:col-span-1">
                        <ServiceCard
                            title="Impianti Termici"
                            items={['Installazione caldaie a condensazione', 'Manutenzione impianti idraulici', 'Pompe di calore']}
                            image={heatingImg}
                        />
                        <ServiceCard
                            title="Idraulica Generale"
                            items={['Riparazione guasti bagno', 'Sostituzione rubinetteria', 'Disotturazione scarichi', 'Allacciamenti cucina']}
                            image={plumbingImg}
                        />
                        <ServiceCard
                            title="Ristrutturazione Bagno"
                            items={['Progettazione', 'Posa sanitari', 'Box doccia', 'Impianti idrici']}
                            image={bathroomImg}
                        />
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/servizi" className="inline-flex items-center gap-2 text-secondary font-bold hover:underline">
                            Scopri tutti i servizi <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 md:py-20 bg-slate-50 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 [&>*:nth-child(odd):last-child]:col-span-2 md:[&>*:nth-child(odd):last-child]:col-span-1">
                        <BenefitCard
                            icon={<Clock className="w-full h-full text-white" />}
                            title="Rapidità ed Efficienza"
                            description="Non amiamo farti aspettare. Interveniamo con tempistiche certe per ripristinare il tuo comfort."
                            gradient="from-blue-500 to-cyan-400"
                        />
                        <BenefitCard
                            icon={<ShieldCheck className="w-full h-full text-white" />}
                            title="Garanzia di Qualità"
                            description="Ogni intervento è coperto da garanzia completa. Usiamo solo ricambi originali per riparazioni durature."
                            gradient="from-emerald-500 to-teal-400"
                        />
                        <BenefitCard
                            icon={<Wrench className="w-full h-full text-white" />}
                            title="Tecnici Abilitati"
                            description="La sicurezza non è un optional. Il nostro team è altamente qualificato e possiede tutte le certificazioni."
                            gradient="from-orange-500 to-amber-400"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-secondary">
                                    <Award className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Qualità e Affidabilità</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Offriamo soluzioni impiantistiche di alta qualità, progettate per soddisfare le esigenze specifiche dei nostri clienti. La nostra esperienza garantisce affidabilità e professionalità in ogni progetto.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-accent">
                                    <Heart className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Passione e Professionalità</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                La dedizione di <span className="font-bold text-slate-900">Marco Laviano</span> e del suo team assicura un servizio che unisce competenza tecnica e attenzione ai dettagli.
                            </p>
                            <Link to="/contatti" className="inline-flex items-center gap-2 text-secondary font-bold hover:underline">
                                Parla con noi <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-slate-900 z-0" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Hai un'emergenza o serve un preventivo?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Contattaci subito per un sopralluogo o richiedi un preventivo online.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="tel:+393398321087" className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" /> Chiama Ora
                        </a>
                        <Link to="/preventivo" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                            Richiedi Preventivo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Subcontracts
const BenefitCard = ({ icon, title, description, gradient }: { icon: React.ReactNode, title: string, description: string, gradient: string }) => (
    <motion.div
        whileHover={{ y: -8 }}
        className="group relative p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-[2rem] border border-white/50 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 h-full flex flex-col items-center text-center overflow-hidden"
    >
        <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradient}`} />
        <div className={`mb-5 md:mb-6 p-4 rounded-2xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500`}>
            <div className="w-6 h-6 md:w-10 md:h-10">
                {icon}
            </div>
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xs">{description}</p>
    </motion.div>
);

const ServiceCard = ({ title, items, image }: { title: string, items: string[], image: string }) => (
    <div className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all h-full flex flex-col duration-500 hover:-translate-y-1 border border-slate-100">
        <div className="h-48 md:h-64 overflow-hidden relative shrink-0">
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
            <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="p-5 md:p-8 flex-grow bg-white relative">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{title}</h3>
            <ul className="space-y-2 md:space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base group/item">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover/item:text-green-500 transition-colors" />
                        <span className="font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default Home;
