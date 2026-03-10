import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Brain, 
  Flame, 
  Moon, 
  Apple, 
  Clock, 
  ChevronRight,
  Info,
  Activity,
  Droplets,
  Sun,
  User,
  Scale,
  TrendingUp,
  ClipboardCheck,
  Calendar,
  BookOpen,
  Home,
  Timer,
  Heart,
  Coffee,
  Sparkles
} from 'lucide-react';

// --- Components ---

const SectionTitle = ({ children, subtitle, chapter }: { children: React.ReactNode, subtitle?: string, chapter?: string }) => (
  <div className="mb-12">
    {chapter && <span className="text-brand-lime font-mono text-xs tracking-widest uppercase mb-2 block">{chapter}</span>}
    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{children}</h2>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>}
  </div>
);

const Card = ({ title, children, icon: Icon, active = false }: { title: string, children: React.ReactNode, icon?: any, active?: boolean }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass-card ${active ? 'border-brand-lime/50 ring-1 ring-brand-lime/20' : ''}`}
  >
    {Icon && <Icon className="text-brand-lime mb-4 w-8 h-8" />}
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <div className="text-gray-400 text-sm leading-relaxed">{children}</div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-lime selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center">
              <Activity className="text-black w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tighter uppercase">30-Day Challenge</span>
          </div>
          <a 
            href="https://go.hotmart.com/W104827096F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-lime text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform inline-block"
          >
            JETZT SICHERN
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/60 to-brand-dark" />
          <img 
            src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=2000" 
            alt="Entspanntes Paar zu Hause" 
            className="w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-brand-lime/10 text-brand-lime text-sm font-bold tracking-widest uppercase mb-6 border border-brand-lime/20">
                100% Home-Based System
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.95] tracking-tighter uppercase">
                RESET FÜR <br />
                <span className="text-brand-lime">IHRE MITTE</span> <br />
                IN 30 TAGEN
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-brand-card/40 border border-white/5 p-8 md:p-10 rounded-[40px] mb-10 backdrop-blur-xl"
            >
              <p className="text-xl md:text-2xl text-white font-bold mb-6">
                Ein praktischer Plan für zu Hause, der Ihnen zeigt, wie Sie:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-brand-lime w-4 h-4" />
                    </div>
                    <span>Bauchumfang reduzieren</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-brand-lime w-4 h-4" />
                    </div>
                    <span>Stoffwechsel sanft aktivieren</span>
                  </li>
                </ul>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-brand-lime w-4 h-4" />
                    </div>
                    <span>Energielevel natürlich steigern</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-brand-lime w-4 h-4" />
                    </div>
                    <span>Wohlbefinden im Alltag finden</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-brand-lime font-bold">
                  <Home className="w-5 h-5" />
                  <span>KEIN FITNESSSTUDIO</span>
                </div>
                <div className="flex items-center gap-2 text-brand-lime font-bold">
                  <Coffee className="w-5 h-5" />
                  <span>KEINE EXTREMEN DIÄTEN</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <a 
                href="https://go.hotmart.com/W104827096F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-lime text-black px-12 py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(132,204,22,0.4)] transition-all active:scale-95"
              >
                JETZT STARTEN <ArrowRight className="w-6 h-6" />
              </a>
              <div className="text-center sm:text-left">
                <div className="text-gray-500 text-sm uppercase tracking-widest font-bold mb-1">Einmalige Investition</div>
                <div className="text-3xl font-black">NUR €35</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="bg-brand-olive/20 border border-brand-olive/50 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="bg-brand-olive p-3 rounded-xl">
                <Info className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Wichtiger Hinweis</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Die Inhalte dieses Buches dienen ausschließlich zu Informations- und Bildungszwecken. Sie ersetzen keine medizinische Beratung oder Behandlung durch einen Arzt.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Bevor Sie ein neues Ernährungs- oder Bewegungsprogramm beginnen, konsultieren Sie bitte einen qualifizierten Gesundheitsfachmann.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <SectionTitle chapter="DAS VERSTECKTE PROBLEM">Warum Bauchfett oft trotz Diäten bleibt</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Viele Menschen glauben, Bauchfett entsteht nur durch zu viele Kalorien. Doch der Körper funktioniert komplexer.
              </p>
              <p>
                Moderne Lebensgewohnheiten können den Stoffwechsel massiv beeinflussen. Wenn Hormone, die den Fettstoffwechsel regulieren, aus dem Gleichgewicht geraten, speichert der Körper Fett bevorzugt im Bauchbereich.
              </p>
              <div className="bg-brand-lime/10 border-l-4 border-brand-lime p-6 italic text-white">
                "Das Ergebnis ist oft frustrierend: Trotz Diäten und Verzicht bleibt die hartnäckige Fettschicht in der Körpermitte bestehen."
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Stress', icon: Brain },
                { label: 'Lange Sitzzeiten', icon: Clock },
                { label: 'Wenig Bewegung', icon: Activity },
                { label: 'Schlechter Schlaf', icon: Moon },
                { label: 'Verarbeitete Lebensmittel', icon: Apple }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-brand-card p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 ${i === 4 ? 'col-span-2' : ''}`}
                >
                  <item.icon className="text-brand-lime w-10 h-10" />
                  <span className="font-bold">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metabolic Reset Section */}
      <section className="py-24 bg-brand-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle chapter="DER STOFFWECHSEL RESET">Warum ein metabolischer Reset helfen kann</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Wenn tägliche Gewohnheiten gezielt angepasst werden, kann der Körper wieder lernen, Energie effizienter zu nutzen und den Stoffwechsel zu stabilisieren.
              </p>
              <div className="glass-card border-brand-lime/20">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="text-brand-lime" /> Ein Reset unterstützt:
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Effiziente Energienutzung',
                    'Stoffwechselstabilität',
                    'Hormonelle Balance',
                    'Langfristige Veränderungen'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-brand-lime rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-brand-lime text-black p-12 rounded-[40px] font-black text-4xl shadow-2xl rotate-3 hover:rotate-0 transition-transform">
                DIE METHODE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <SectionTitle chapter="PRINZIPIEN">Die Home-Reset Methode</SectionTitle>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Drei einfache Säulen, die sich nahtlos in Ihren Alltag zu Hause integrieren lassen.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '1. Ernährung', desc: 'Natürliche Lebensmittel unterstützen den Stoffwechsel und reduzieren Entzündungen.', icon: Apple },
              { title: '2. Alltagsbewegung', desc: 'Sanfte Aktivität zu Hause aktiviert den Energieverbrauch ohne Schweißausbrüche.', icon: Activity },
              { title: '3. Mindset', desc: 'Kleine tägliche Routinen schaffen die mentale Basis für langfristigen Erfolg.', icon: Zap }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] bg-brand-card border border-white/5 flex flex-col items-center gap-6 group hover:bg-brand-lime transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-brand-lime/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <item.icon className="w-10 h-10 text-brand-lime group-hover:text-black transition-colors" />
                </div>
                <h4 className="text-2xl font-bold group-hover:text-black">{item.title}</h4>
                <p className="text-gray-400 group-hover:text-black/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-brand-card/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle chapter="STRUKTUR">So funktioniert die Challenge</SectionTitle>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl">
            Das Programm ist in drei einfache Phasen aufgeteilt, um Ihren Körper schrittweise umzustellen.
          </p>
          
          <div className="space-y-12">
            {[
              { 
                phase: 'Phase 1 – Reset', 
                days: 'TAGE 1–10', 
                goal: 'Ziel: den Körper stabilisieren.', 
                habits: ['Mehr Wasser trinken', 'Proteinreiche Mahlzeiten', 'Tägliche Bewegung', 'Besserer Schlaf'],
                icon: Droplets 
              },
              { 
                phase: 'Phase 2 – Aktivierung', 
                days: 'TAGE 11–20', 
                goal: 'Der Körper beginnt, Energie effizienter zu nutzen.', 
                habits: ['Essensfenster einhalten', 'Spaziergänge nach Mahlzeiten', 'Mehr Gemüse integrieren'],
                icon: Flame 
              },
              { 
                phase: 'Phase 3 – Definition', 
                days: 'TAGE 21–30', 
                goal: 'Die Gewohnheiten werden stabilisiert.', 
                habits: ['Regelmäßige Bewegung', 'Ausgewogene Ernährung', 'Weniger stark verarbeitete Lebensmittel'],
                icon: CheckCircle2 
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start bg-brand-dark p-8 md:p-12 rounded-[40px] border border-white/5 relative group hover:border-brand-lime/30 transition-colors"
              >
                <div className="w-20 h-20 rounded-3xl bg-brand-lime/10 flex items-center justify-center shrink-0">
                  <p.icon className="text-brand-lime w-10 h-10" />
                </div>
                <div className="flex-grow">
                  {/* Phase 1 */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-brand-lime font-mono text-sm tracking-widest block mb-1">{p.days}</span>
                      <h4 className="text-3xl font-black">{p.phase}</h4>
                    </div>
                    <div className="bg-brand-lime text-black px-4 py-1 rounded-full text-sm font-bold">
                      {p.goal}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {p.habits.map((habit, hi) => (
                      <div key={hi} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 className="text-brand-lime w-5 h-5" />
                        <span>{habit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle chapter="LIEFERUMFANG">Ihr komplettes Home-Reset System</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: '30-Day Reset Guide', 
                desc: 'Ein klar strukturierter Plan für jeden Tag, optimiert für den Alltag zu Hause.',
                icon: BookOpen
              },
              { 
                title: 'Daily Habits Checklist', 
                desc: 'Eine einfache Checkliste, die Sie täglich begleitet und motiviert.',
                icon: ClipboardCheck
              },
              { 
                title: '7-Tage Ernährungsplan', 
                desc: 'Einfache Rezepte mit Zutaten aus Ihrem lokalen Supermarkt.',
                icon: Apple
              },
              { 
                title: '10-Minuten Home-Routine', 
                desc: 'Sanfte Bewegungsabläufe ohne jegliche Geräte oder Vorkenntnisse.',
                icon: Timer
              },
              { 
                title: 'Progress Tracker', 
                desc: 'Behalten Sie Ihr Wohlbefinden und Ihre Energielevel im Blick.',
                icon: Heart
              },
              { 
                title: 'Bonus: Stress-Reset', 
                desc: 'Kurze Techniken zur Cortisol-Senkung für bessere Fettverbrennung.',
                icon: Sparkles
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card group hover:border-brand-lime/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-lime/10 flex items-center justify-center mb-6 group-hover:bg-brand-lime group-hover:scale-110 transition-all duration-500">
                  <item.icon className="text-brand-lime w-8 h-8 group-hover:text-black transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-brand-lime transition-colors">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-brand-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle chapter="VORTEILE">Was viele Teilnehmer berichten</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Nach 30 Tagen berichten viele Menschen über mehr Energie, besseren Schlaf und eine sichtbare Veränderung der Taille.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: 'Mehr Energie', icon: Zap },
                  { label: 'Besserer Schlaf', icon: Moon },
                  { label: 'Weniger Blähungen', icon: Activity },
                  { label: 'Sichtbare Taille', icon: TrendingUp }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <benefit.icon className="text-brand-lime w-6 h-6" />
                    <span className="font-bold">{benefit.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-lime p-10 rounded-[40px] text-black">
              <h4 className="text-3xl font-black mb-8 uppercase">Typische Veränderungen</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-black/10 pb-4">
                  <span className="text-xl font-bold">Gewichtsverlust</span>
                  <span className="text-3xl font-black">2–5 kg</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/10 pb-4">
                  <span className="text-xl font-bold">Bauchumfang</span>
                  <span className="text-3xl font-black">Reduziert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Tägliche Energie</span>
                  <span className="text-3xl font-black">Besser</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-brand-card p-12 rounded-[50px] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/10 blur-[100px] -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-8 text-center uppercase tracking-tighter">
                FÜR WEN IST DIESES PROGRAMM?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Bauchfett reduzieren möchten',
                  'Ihren Stoffwechsel unterstützen wollen',
                  'Einfache Strategien für zu Hause suchen',
                  'Keine Lust auf Fitnessstudios haben'
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/5"
                  >
                    <CheckCircle2 className="text-brand-lime w-6 h-6 shrink-0" />
                    <span className="text-lg font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 uppercase">IHR INVESTMENT</h2>
              <p className="text-gray-400">Wenn diese Inhalte einzeln verkauft würden:</p>
            </div>
            <div className="bg-brand-card rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12 space-y-4">
                {[
                  { item: '30-Day Guide', price: '€29' },
                  { item: 'Ernährungsplan', price: '€19' },
                  { item: 'Home-Routine Guide', price: '€19' },
                  { item: 'Habit Checklist', price: '€9' },
                  { item: 'Progress Tracker', price: '€9' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center text-lg text-gray-300">
                    <span>{row.item}</span>
                    <span className="font-mono">{row.price}</span>
                  </div>
                ))}
                <div className="pt-6 border-t border-white/10 flex justify-between items-center text-2xl font-black">
                  <span className="uppercase">Gesamtwert</span>
                  <span className="text-gray-500 line-through">€85</span>
                </div>
              </div>
              <div className="bg-brand-lime p-12 text-center text-black">
                <p className="text-xl font-bold mb-2 uppercase tracking-widest">Heute erhalten Sie alles für nur</p>
                <div className="text-7xl font-black mb-6">€35</div>
                <p className="font-bold mb-8 opacity-70 italic">Einmalige Zahlung. Sofortiger Zugang.</p>
                <a 
                  href="https://go.hotmart.com/W104827096F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white py-6 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-2xl flex items-center justify-center"
                >
                  JETZT ZUGANG SICHERN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="relative py-32 bg-brand-card border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter">
            Beginnen Sie heute Ihre <br />
            <span className="text-brand-lime">30-Tage Challenge</span>
          </h2>
          <div className="flex flex-col items-center gap-6 mb-12">
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Mit klarer Struktur. Mit einfachen täglichen Gewohnheiten. Und mit einem Plan, der in Ihren Alltag passt.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-brand-lime font-bold uppercase tracking-widest text-sm">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Klare Struktur</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Einfache Gewohnheiten</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Alltagstauglich</span>
            </div>
          </div>
          
          <div className="max-w-md mx-auto bg-brand-dark p-8 rounded-3xl border border-white/10 mb-12">
            <h3 className="text-2xl font-black mb-2">Belly Reset 30-Day Challenge</h3>
            <div className="text-4xl font-black text-brand-lime mb-6">Nur €35</div>
            <a 
              href="https://go.hotmart.com/W104827096F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-brand-lime text-black py-4 rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center justify-center"
            >
              JETZT STARTEN
            </a>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              <span className="font-bold text-white uppercase tracking-tighter">Belly Reset 30-Day Challenge</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">Kontakt</a>
            </div>
            <p>© 2024 Belly Reset. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
