import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-slate-900 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-cd67b9355999?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=20')] opacity-10 bg-cover bg-center" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Parliamo del tuo Progetto
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Siamo a tua disposizione a Torino e provincia per preventivi o semplici consigli. Scegli il modo che preferisci per contattarci.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 [&>*:nth-child(odd):last-child]:col-span-2 lg:[&>*:nth-child(odd):last-child]:col-span-1">

                    {/* Emergency / Phone Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-secondary text-white p-4 md:p-8 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center relative overflow-hidden group h-full justify-between"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Phone className="w-16 h-16 md:w-32 md:h-32" />
                        </div>
                        <div className="bg-white/20 w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-6 backdrop-blur-sm shrink-0">
                            <Phone className="w-5 h-5 md:w-8 md:h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">Urgenze & Telefono</h3>
                            <p className="text-white/80 mb-3 md:mb-6 text-xs md:text-base">La via più veloce per parlare con noi.</p>
                        </div>
                        <a href="tel:+393398321087" className="text-xl md:text-3xl font-bold hover:scale-105 transition-transform inline-block whitespace-nowrap">
                            +39 339 832 1087
                        </a>
                        <div className="mt-2 md:mt-4 inline-flex items-center gap-2 bg-white/20 px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-medium">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse" /> Disponibili
                        </div>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center h-full justify-between"
                    >
                        <div className="bg-slate-100 w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-6 text-slate-600 shrink-0">
                            <Mail className="w-5 h-5 md:w-8 md:h-8" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">Email</h3>
                            <p className="text-slate-500 mb-4 md:mb-8 text-xs md:text-base">Preferisci scriverci? Inviaci una mail.</p>
                        </div>

                        <a
                            href="mailto:lm.impianti.web@gmail.com"
                            className="w-full py-3 md:py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            <Mail className="w-4 h-4 md:w-5 md:h-5" /> Invia Email
                        </a>

                        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-100 w-full">
                            <p className="text-xs md:text-sm text-slate-500 mb-2">Oppure usa il wizard:</p>
                            <Link to="/preventivo" className="text-secondary font-bold hover:underline flex items-center justify-center gap-1 text-sm md:text-base">
                                Preventivo Online <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Info & Hours Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                    >
                        <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-slate-600">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Orari & Sede</h3>
                        <div className="text-slate-500 space-y-4 mb-6">
                            <p>
                                <strong className="block text-slate-900 mb-1">Orari Apertura</strong>
                                Lun - Ven: 08:00 - 18:00<br />
                                Sabato: 08:00 - 13:00
                            </p>
                            <p>
                                <strong className="block text-slate-900 mb-1">Sede Operativa</strong>
                                Via Assietta, 6<br />
                                10040 Druento (TO)
                            </p>
                        </div>
                        {/* 
                        <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                            <p className="text-secondary font-bold flex items-center justify-center gap-2">
                                <Clock className="w-4 h-4" /> Pronto Intervento H24
                            </p>
                        </div> 
                        */}

                    </motion.div>

                    {/* WhatsApp Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#25D366] text-white p-8 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg viewBox="0 0 24 24" className="w-32 h-32 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </div>
                        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm shadow-inner text-white">
                            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
                        <p className="text-white/80 mb-6">Scrivici subito su WhatsApp per una risposta rapida.</p>
                        <a href="https://wa.me/393398321087" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:scale-105 transition-transform inline-block bg-white text-[#25D366] px-6 py-2 rounded-full">
                            Chatta Ora
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
