import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Star, 
  Clock, 
  UtensilsCrossed,
  MessageCircle,
  ArrowUp,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from './constants';
import { MenuItem } from './types';

// --- Components ---

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-andino-earth text-andino-beige"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <UtensilsCrossed className="w-16 h-16 mx-auto mb-4 text-andino-gold animate-pulse" />
      <h1 className="text-4xl font-serif tracking-widest uppercase">Sabor Andino</h1>
      <p className="mt-2 text-sm tracking-[0.3em] opacity-60 uppercase">Fusión Gourmet</p>
    </motion.div>
    <motion.div 
      className="absolute bottom-12 w-48 h-[1px] bg-andino-gold/20 overflow-hidden"
    >
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-full h-full bg-andino-gold"
      />
    </motion.div>
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <UtensilsCrossed className={`w-6 h-6 ${isScrolled ? 'text-andino-gold' : 'text-white'}`} />
        <span className={`font-serif text-xl tracking-tight ${isScrolled ? 'text-andino-earth' : 'text-white'}`}>
          Sabor Andino
        </span>
      </div>
      <a 
        href="https://maps.app.goo.gl/fYnnE4keHh9rD46S7" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`p-2 rounded-full transition-colors ${
          isScrolled ? 'bg-andino-olive text-white' : 'bg-white/20 text-white backdrop-blur-sm'
        }`}
      >
        <MapPin className="w-5 h-5" />
      </a>
    </motion.nav>
  );
};

const Hero = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920" 
        alt="Gourmet Peruvian Food" 
        className="w-full h-full object-cover scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-andino-beige" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-[0.2em] text-andino-gold uppercase border border-andino-gold/30 rounded-full backdrop-blur-sm">
          Experiencia Gastronómica
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Tradición andina con un toque <span className="italic text-andino-gold">moderno</span>
        </h1>
        <p className="text-andino-beige/80 text-lg mb-8 font-light leading-relaxed">
          Descubre la esencia de los Andes a través de una propuesta de alta cocina que rinde homenaje a nuestras raíces.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-andino-olive text-white px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-sm shadow-xl hover:bg-andino-earth transition-colors"
        >
          Explorar Menú
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const CategoryTabs = ({ activeCategory, setActiveCategory }: { activeCategory: string, setActiveCategory: (id: string) => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sticky top-[72px] z-40 bg-andino-beige/95 backdrop-blur-sm border-b border-andino-earth/5">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar px-4 py-4 gap-3"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.id 
                ? 'bg-andino-earth text-white shadow-md' 
                : 'bg-white text-andino-earth/60 hover:bg-andino-earth/5 border border-transparent'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ item }: { item: MenuItem }) => {
  const whatsappMessage = `Hola, me gustaría ordenar el plato: *${item.name}* (S/ ${item.price.toFixed(2)}) desde el menú digital.`;
  const whatsappUrl = `https://wa.me/51932350348?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 group border border-andino-earth/5 h-full flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {item.labels?.map((label) => (
            <span key={label} className="bg-andino-gold text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-lg">
              {label}
            </span>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-white font-serif text-xl">S/ {item.price.toFixed(2)}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-serif mb-2 group-hover:text-andino-gold transition-colors">{item.name}</h3>
        <p className="text-andino-earth/60 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-andino-olive">S/ {item.price.toFixed(2)}</span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-andino-olive text-andino-olive font-semibold text-xs uppercase tracking-widest hover:bg-andino-olive hover:text-white transition-all duration-300"
          >
            Ordenar
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => (
  <section className="py-20 px-6 bg-andino-earth text-andino-beige relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-andino-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    <div className="max-w-4xl mx-auto grid md:grid-row-2 gap-12 items-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-andino-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Nuestra Historia</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">El Alma de los Andes</h2>
          <p className="text-andino-beige/70 leading-relaxed text-lg font-light">
            Sabor Andino Fusión nace del deseo de elevar los ingredientes ancestrales de nuestra tierra a nuevas alturas. 
            Cada plato es un viaje por los microclimas del Perú, desde la costa hasta las cumbres más altas, 
            reinterpretados con técnicas contemporáneas y un respeto profundo por el productor local.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400',
          'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400',
          'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400'
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
          >
            <img src={img} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-andino-beige pt-20 pb-10 px-6 border-t border-andino-earth/5">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <UtensilsCrossed className="w-8 h-8 text-andino-gold" />
            <span className="font-serif text-2xl tracking-tight">Sabor Andino</span>
          </div>
          <p className="text-andino-earth/60 leading-relaxed mb-6">
            Redescubriendo la gastronomía peruana a través de la innovación y la pasión por lo nuestro.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full bg-white text-andino-earth hover:bg-andino-gold hover:text-white transition-all shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white text-andino-earth hover:bg-andino-gold hover:text-white transition-all shadow-sm">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-6">Contacto</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-andino-earth/70">
              <MapPin className="w-5 h-5 text-andino-gold shrink-0" />
              <span>Av. Los Incas 123, Miraflores, Lima</span>
            </li>
            <li className="flex items-center gap-3 text-andino-earth/70">
              <Phone className="w-5 h-5 text-andino-gold shrink-0" />
              <span>+51 932 350 348</span>
            </li>
            <li className="flex items-center gap-3 text-andino-earth/70">
              <Clock className="w-5 h-5 text-andino-gold shrink-0" />
              <span>Lun - Dom: 12:00 PM - 11:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Newsletter</h4>
          <p className="text-andino-earth/60 mb-4 text-sm">Suscríbete para recibir noticias sobre eventos especiales y nuevos platos.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Tu correo" 
              className="bg-white border border-andino-earth/10 rounded-xl px-4 py-3 text-sm flex-1 focus:outline-none focus:border-andino-gold"
            />
            <button className="bg-andino-earth text-andino-beige px-4 py-3 rounded-xl hover:bg-andino-gold transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-andino-earth/5 text-center text-andino-earth/40 text-xs tracking-widest uppercase">
        © 2024 Sabor Andino Fusión. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/51932350348?text=Hola,%20quiero%20hacer%20un%20pedido%20desde%20el%20menú%20digital"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
  >
    <MessageCircle className="w-7 h-7" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-medium">
      ¡Pide por WhatsApp!
    </span>
  </motion.a>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 bg-white/80 backdrop-blur-md text-andino-earth p-3 rounded-full shadow-lg border border-andino-earth/5"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('entradas');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen selection:bg-andino-gold/30">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-andino-gold z-[60] origin-left"
            style={{ scaleX }}
          />
          
          <Navbar />
          
          <main>
            <Hero />
            
            <section id="menu" className="py-12">
              <div className="px-6 mb-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif mb-4">Nuestra Carta</h2>
                  <div className="w-24 h-1 bg-andino-gold mx-auto rounded-full" />
                </motion.div>
              </div>

              <CategoryTabs 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />

              <div className="px-6 py-12 max-w-7xl mx-auto">
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProductCard item={item} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>

            <AboutUs />
          </main>

          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}
