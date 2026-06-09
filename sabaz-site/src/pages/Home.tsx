import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ShieldCheck, TrendingUp, HandshakeIcon, Car, Home as HomeIcon, HeartPulse, Plane, PawPrint, Umbrella, Phone, Award, Star, Heart, Mail, CheckCircle, Loader2 } from 'lucide-react';

const coreProducts = [
  { id: 'trafik-sigortasi', title: 'Trafik Sigortası', icon: Car, bg: 'bg-blue-50', color: 'text-blue-600' },
  { id: 'kasko', title: 'Kasko', icon: ShieldCheck, bg: 'bg-indigo-50', color: 'text-indigo-600' },
  { id: 'tamamlayici-saglik', title: 'Tamamlayıcı Sağlık', icon: HeartPulse, bg: 'bg-rose-50', color: 'text-rose-600' },
  { id: 'ozel-saglik', title: 'Özel Sağlık', icon: Umbrella, bg: 'bg-emerald-50', color: 'text-emerald-600' },
  { id: 'konut', title: 'Konut', icon: HomeIcon, bg: 'bg-amber-50', color: 'text-amber-600' },
  { id: 'dask', title: 'DASK', icon: HomeIcon, bg: 'bg-orange-50', color: 'text-orange-600' },
  { id: 'seyahat-saglik', title: 'Seyahat Sağlık', icon: Plane, bg: 'bg-cyan-50', color: 'text-cyan-600' },
  { id: 'evcil-hayvan', title: 'Evcil Hayvan', icon: PawPrint, bg: 'bg-purple-50', color: 'text-purple-600' },
];

export default function Home() {
  const [searchParams] = useSearchParams();
  const isSuccessFromUrl = searchParams.get('success') === 'true';

  const [selectedBranch, setSelectedBranch] = useState('Belirtilmedi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(isSuccessFromUrl);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const backgroundPosition = useTransform(mouseX, [0, 1], ["0%", "100%"]);

  const shieldMouseX = useMotionValue(0.5);
  const shieldMouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 150 };

  // Parallax offsets for mini icons
  const icon1X = useSpring(useTransform(shieldMouseX, [0, 1], [-20, 20]), springConfig);
  const icon1Y = useSpring(useTransform(shieldMouseY, [0, 1], [-20, 20]), springConfig);
  
  const icon2X = useSpring(useTransform(shieldMouseX, [0, 1], [30, -30]), springConfig);
  const icon2Y = useSpring(useTransform(shieldMouseY, [0, 1], [30, -30]), springConfig);
  
  const icon3X = useSpring(useTransform(shieldMouseX, [0, 1], [-25, 25]), springConfig);
  const icon3Y = useSpring(useTransform(shieldMouseY, [0, 1], [25, -25]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleShieldMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    shieldMouseX.set(x);
    shieldMouseY.set(y);
  };

  const handleShieldMouseLeave = () => {
    shieldMouseX.set(0.5);
    shieldMouseY.set(0.5);
  };

  const isAuto = ['trafik-sigortasi', 'kasko', 'yesil-kart'].includes(selectedBranch);
  const isHealth = ['tamamlayici-saglik', 'ozel-saglik', 'seyahat-saglik', 'yabanci-saglik'].includes(selectedBranch);
  const isProperty = ['dask', 'konut', 'is-yeri'].includes(selectedBranch);

  useEffect(() => {
    if (isSuccessFromUrl) {
      setIsSuccess(true);
      window.history.replaceState({}, document.title, window.location.pathname);
      setTimeout(() => {
        const element = document.getElementById('hizli-teklif');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isSuccessFromUrl]);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative bg-slate-900 text-white overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Sizin İçin En Doğru Poliçe
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight relative inline-flex flex-wrap justify-center lg:justify-start gap-x-3 items-center"
            >
              Hayatın Risklerini 
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 relative inline-block bg-[length:200%_auto]"
                style={{ backgroundPosition }}
              >
                Şansa Bırakmayın.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Espiye’nin en güvenilir sigorta acentesi ile 30’dan fazla şirketten aynı anda teklif alın, size en uygun ve kapsamlı korumayı dakikalar içinde başlatın.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/iletisim" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/30 text-center flex items-center justify-center gap-2">
                Hemen Teklif Alın
              </Link>
              <Link to="/urunler" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-semibold text-lg transition-all text-center">
                Branşlarımızı İnceleyin
              </Link>
            </motion.div>
          </div>

          <div className="md:w-2/5 mt-16 md:mt-0 relative hidden md:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center aspect-square"
            >
              <div 
                className="aspect-square w-full max-w-sm bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center relative shadow-2xl border border-white/10 backdrop-blur-sm"
                onMouseMove={handleShieldMouseMove}
                onMouseLeave={handleShieldMouseLeave}
              >
                {/* Background decorative circles */}
                <div className="absolute inset-0 rounded-full border border-blue-400/20 scale-110"></div>
                <div className="absolute inset-0 rounded-full border border-blue-400/10 scale-125"></div>
                
                <div className="bg-slate-800 p-10 rounded-full shadow-xl flex items-center justify-center relative z-10 w-48 h-48 border border-slate-700">
                   <ShieldCheck className="w-24 h-24 text-blue-400" />
                   
                   {/* Small floating mini icons */}
                   <motion.div 
                     style={{ x: icon1X, y: icon1Y }}
                     className="absolute -top-4 -right-4 z-20"
                   >
                     <motion.div 
                       animate={{ y: [-10, 10, -10], rotate: [12, 5, 12] }} 
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center shadow-xl border border-slate-600"
                     >
                       <Car className="w-6 h-6 text-emerald-400" />
                     </motion.div>
                   </motion.div>
                   <motion.div 
                     style={{ x: icon2X, y: icon2Y }}
                     className="absolute -bottom-4 -left-4 z-20"
                   >
                     <motion.div 
                       animate={{ y: [10, -10, 10], rotate: [-12, -5, -12] }} 
                       transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                       className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center shadow-xl border border-slate-600"
                     >
                       <HomeIcon className="w-6 h-6 text-amber-400" />
                     </motion.div>
                   </motion.div>
                   <motion.div 
                     style={{ x: icon3X, y: icon3Y }}
                     className="absolute bottom-4 -right-2 z-20"
                   >
                     <motion.div 
                       animate={{ x: [-10, 10, -10], y: [-5, 5, -5], rotate: [12, -5, 12] }} 
                       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                       className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shadow-xl border border-slate-600"
                     >
                       <HeartPulse className="w-5 h-5 text-rose-400" />
                     </motion.div>
                   </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">İhtiyacınız Olan Güvenceyi Seçin</h2>
            <p className="text-slate-600 text-lg">Size en uygun çözümü bulmak için branşlarımıza göz atın ve detaylı bilgi alın.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {coreProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link 
                  to={`/urunler#${product.id}`}
                  className="group flex flex-col items-center bg-white border border-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all text-center h-full"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${product.bg} ${product.color}`}>
                    <product.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{product.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Value Proposition Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Neden Bizi Tercih Etmelisiniz?</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Sigorta sadece bir kağıt parçası değil, geleceğinize ve değerlerinize verdiğiniz bir sözdür. Biz de bu sözün arkasında en güçlü şekilde duruyoruz.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: HandshakeIcon, iconColor: 'text-blue-600', iconBg: 'bg-blue-100', title: 'Geniş Acente Ağı', text: "Sektörün en güçlü 30'dan fazla şirketinin acenteliği ile tek ekrandan tüm alternatifleri sunuyoruz." },
                  { icon: ShieldCheck, iconColor: 'text-indigo-600', iconBg: 'bg-indigo-100', title: 'Şeffaf Bilgilendirme', text: 'Poliçe teminatlarını karmaşık dilden uzak, en net ve eksiksiz haliyle size ifade ediyoruz.' },
                  { icon: TrendingUp, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-100', title: 'Hasar Anında 7/24 Destek', text: 'Sadece poliçe satarken değil, en çok ihtiyacınız olan hasar anında tüm adımlarda yanınızdayız.' },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex gap-4 group"
                  >
                    <div className={`w-12 h-12 shrink-0 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                      <p className="text-slate-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 relative flex items-center justify-center mt-12 md:mt-0">
              <div className="relative w-full max-w-sm">
                {/* Background Cards */}
                <div className="absolute inset-0 bg-blue-100/60 rounded-3xl transform rotate-6 scale-105 transition-transform duration-500 hover:rotate-12"></div>
                <div className="absolute inset-0 bg-indigo-100/60 rounded-3xl transform -rotate-3 scale-105 transition-transform duration-500 hover:-rotate-6"></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl pt-16 sm:pt-20 pb-20 sm:pb-24 px-8 sm:px-10 shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Tam Güvence Kalitesi</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Müşterilerimizin güvenliği ve memnuniyeti önceliğimizdir.</p>
                </div>

                {/* Floating Elements (Corners) */}
                {/* Top Right */}
                <div className="absolute -right-4 sm:-right-8 -top-6 sm:-top-8 bg-white px-5 py-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20">
                  <div className="bg-amber-100 p-2.5 rounded-full hidden sm:block">
                    <Star className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-900">5 Yıldızlı</div>
                    <div className="text-xs text-slate-500">Müşteri Memnuniyeti</div>
                  </div>
                </div>

                {/* Bottom Left */}
                <div className="absolute -left-4 sm:-left-12 -bottom-8 sm:-bottom-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <span className="text-xl font-black">30+</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-slate-900">Sigorta Şirketi</div>
                    <div className="text-sm text-slate-500">Tek Noktada Anlaşmalı</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Quote Form Section */}
      <section id="hizli-teklif" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-blue-50/50 transform -skew-y-2 z-0"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Hızlı Teklif Alın</h2>
            <p className="text-slate-600 text-lg">Formu doldurun, size en uygun sigorta teklifini dakikalar içinde ulaştıralım.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-slate-100 min-h-[400px]">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Teklif İsteğiniz Alınmıştır!</h3>
                  <p className="text-slate-600 text-lg mb-10 max-w-lg mx-auto">
                    Talebiniz başarıyla bize ulaştı. Uzman ekibimiz en kısa sürede sizin için en uygun teklifi hazırlayarak tarafınıza dönüş yapacaktır.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-4 bg-blue-50 text-blue-600 font-bold rounded-xl hover:bg-blue-100 transition-colors shadow-sm"
                  >
                    Yeni Bir Teklif Al
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  action="https://formsubmit.co/buksigorta@hotmail.com" 
                  method="POST" 
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Ana Sayfa Hızlı Teklif Talebi" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={window.location.origin + "/?success=true"} />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Adınız Soyadınız *</label>
                  <input type="text" name="Ad Soyad" placeholder="Adınız ve Soyadınız" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Telefon Numaranız *</label>
                  <input type="tel" name="Telefon" placeholder="0(5XX) XXX XX XX" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">İlgilendiğiniz Branş</label>
                <select name="İlgilenilen Branş" value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700">
                  <option value="Belirtilmedi">Seçiniz...</option>
                  <option value="trafik-sigortasi">Trafik Sigortası</option>
                  <option value="kasko">Kasko Sigortası</option>
                  <option value="yesil-kart">Yeşil Kart Sigortası</option>
                  <option value="tamamlayici-saglik">Tamamlayıcı Sağlık Sigortası (TSS)</option>
                  <option value="ozel-saglik">Özel Sağlık Sigortası (ÖSS)</option>
                  <option value="seyahat-saglik">Seyahat Sağlık Sigortası</option>
                  <option value="yabanci-saglik">Yabancı Sağlık Sigortası</option>
                  <option value="dask">DASK (Zorunlu Deprem Sigortası)</option>
                  <option value="konut">Konut Paket Sigortası</option>
                  <option value="is-yeri">İş Yeri Paket Sigortası</option>
                  <option value="mesleki-sorumluluk">Mesleki Sorumluluk Sigortası</option>
                  <option value="ucuncu-sahis-mali-mesuliyet">Üçüncü Şahıs Mali Mesuliyet Sigortası</option>
                  <option value="nakliyat">Nakliyat (Emtia) Sigortası</option>
                  <option value="hayat-sigortasi">Hayat Sigortası</option>
                  <option value="ferdi-kaza">Ferdi Kaza Sigortası</option>
                  <option value="diger">Diğer</option>
                  <option value="evcil-hayvan">Evcil Hayvan (Pati) Sigortası</option>
                  <option value="cep-telefonu-elektronik">Cep Telefonu / Elektronik Cihaz Sigortası</option>
                </select>
              </div>

              {isAuto && (
                <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-4">
                  <h3 className="font-semibold text-blue-900 border-b border-blue-100 pb-2">Araç Bilgileri</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">TC Kimlik/VKN</label>
                      <input type="text" name="TC_VKN" placeholder="TC/Vergi No" className="w-full bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Doğum Tarihi</label>
                      <input type="date" name="Arac_Dogum_Tarihi" className="w-full bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-600" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Plaka</label>
                      <input type="text" name="Plaka" placeholder="34ABC123" className="w-full bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm uppercase focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Belge No</label>
                      <input type="text" name="Arac_Belge_No" placeholder="AA 123456" className="w-full bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm uppercase focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Ruhsat Görseli (İsteğe Bağlı)</label>
                    <input type="file" name="Ruhsat_Gorseli" accept="image/png, image/jpeg, image/jpg, application/pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 focus:outline-none cursor-pointer" />
                  </div>
                </div>
              )}

              {isHealth && (
                <div className="p-5 bg-rose-50/50 rounded-2xl border border-rose-100 space-y-4">
                  <h3 className="font-semibold text-rose-900 border-b border-rose-100 pb-2">Sağlık Sigortası Bilgileri</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">TC Kimlik No</label>
                      <input type="text" name="Saglik_TC" placeholder="TC Kimlik Nonuz" className="w-full bg-white border border-rose-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Doğum Tarihiniz</label>
                      <input type="date" name="Dogum_Tarihi" className="w-full bg-white border border-rose-200 rounded-lg px-4 py-2 text-sm text-slate-600 focus:ring-2 focus:ring-rose-500 focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Ek Evrak / Görsel (İsteğe Bağlı)</label>
                    <input type="file" name="Saglik_Evrak" accept="image/png, image/jpeg, application/pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-rose-100 file:text-rose-700 hover:file:bg-rose-200 cursor-pointer" />
                  </div>
                </div>
              )}

              {isProperty && (
                <div className="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-4">
                  <h3 className="font-semibold text-amber-900 border-b border-amber-100 pb-2">Mülk Bilgileri</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Açık Adres (UAVT Adres Kodu İçin)</label>
                      <textarea name="Acik_Adres" rows={2} placeholder="İl, İlçe, Mahalle, Sokak, No..." className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none min-h-[50px]"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">TC Kimlik / VKN</label>
                      <input type="text" name="Mulk_TC_VKN" placeholder="Poliçe sahibi kimlik/vergi no" className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Doğum Tarihi</label>
                      <input type="date" name="Mulk_Dogum_Tarihi" className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2 text-sm text-slate-600 focus:ring-2 focus:ring-amber-500 focus:outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Tapu veya DASK Evrakı (İsteğe Bağlı)</label>
                      <input type="file" name="Mulk_Evrak" accept="image/png, image/jpeg, application/pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200 cursor-pointer" />
                    </div>
                  </div>
                </div>
              )}

              {!isAuto && !isHealth && !isProperty && selectedBranch !== 'Belirtilmedi' && (
                <div className="p-5 bg-slate-100/50 rounded-2xl border border-slate-200 space-y-4">
                  <h3 className="font-semibold text-slate-800 border-b border-slate-200 pb-2">Ek Belgeler</h3>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Evrak veya Görsel Ekleyin (İsteğe Bağlı)</label>
                    <input type="file" name="Diger_Evrak" accept=".png, .jpg, .jpeg, .pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-200 file:text-slate-700 hover:file:bg-slate-300 cursor-pointer" />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Açıklama / Mesajınız (İsteğe Bağlı)</label>
                <textarea rows={3} name="Mesaj" placeholder="Eklemek istediğiniz notlar veya detaylar..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"></textarea>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full bg-blue-600 text-white rounded-xl px-8 py-4 font-semibold text-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Mail className="w-5 h-5" />
                )}
                {isSubmitting ? 'Gönderiliyor...' : 'Ücretsiz Teklif Al'}
              </button>
            </motion.form>
            )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Poliçenizin Bitmesini Beklemeyin.</h2>
          <p className="text-blue-100 text-xl mb-10">Mevcut poliçenizi veya yeni poliçe ihtiyaçlarınızı hemen değerlendirelim. Gelin en uygun fiyatları beraber analiz edelim.</p>
          <Link to="/iletisim" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:shadow-xl hover:shadow-white/20 transition-all">
            <Phone className="w-5 h-5" />
            Hemen Bizimle İletişime Geçin
          </Link>
        </div>
      </section>

    </div>
  );
}
