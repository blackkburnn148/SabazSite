import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Car, ShieldCheck, HeartPulse, Umbrella, Home as HomeIcon, Plane, PawPrint, Globe, Heart, Activity, Building, Briefcase, Truck, Smartphone, Users, Map } from 'lucide-react';

const products = [
  {
    id: 'trafik-sigortasi',
    title: 'Zorunlu Trafik Sigortası',
    icon: Car,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    desc: 'Karayolları Motorlu Araçlar Zorunlu Mali Sorumluluk Sigortası; aracınızla üçüncü şahıslara verebileceğiniz bedeni ve maddi zararları karşılayan zorunlu bir sigorta türüdür.',
    features: ['Üçüncü Şahıs Maddi Zararlar', 'Vefat ve Sürekli Sakatlık', 'Sağlık Giderleri', 'Geniş Limit Seçenekleri']
  },
  {
    id: 'kasko',
    title: 'Kasko Sigortası',
    icon: ShieldCheck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    desc: 'Aracınızı çarpma, çarpışma, çalınma, doğal afetler ve terör eylemlerine karşı korur. Genişletilmiş kasko seçenekleri ile ikame araç gibi ek ayrıcalıklardan yararlanın.',
    features: ['Çarpma & Çarpışma', 'Doğal Afetler', 'İkame Araç Hizmeti', 'Orjinal Parça Güvencesi']
  },
  {
    id: 'yesil-kart',
    title: 'Yeşil Kart Sigortası',
    icon: Map,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    desc: 'Yurt dışı seyahatlerinizde aracınızın karıştığı kazalarda, bulunduğunuz ülkenin zorunlu trafik sigortası limitleri dahilinde üçüncü şahıslara verilecek zararları güvence altına alır.',
    features: ['Uluslararası Geçerlilik', 'Üçüncü Şahıs Koruması', 'Maddi Hasarlar', 'Bedeni Hasarlar']
  },
  {
    id: 'tamamlayici-saglik',
    title: 'Tamamlayıcı Sağlık Sigortası (TSS)',
    icon: HeartPulse,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    desc: 'Özel hastanelerde SGK farkı ödemeden muayene, tahlil ve ameliyat masraflarınızı karşılar. Sağlığınızı yüksek maliyetler düşünmeden özel sağlık kurumlarında güvence altına alın.',
    features: ['Ayakta Tedavi', 'Yatarak Tedavi', 'Fark Ücreti Ödememe', 'Anlaşmalı Kurumlar']
  },
  {
    id: 'ozel-saglik',
    title: 'Özel Sağlık Sigortası (ÖSS)',
    icon: Activity,
    color: 'text-red-600',
    bg: 'bg-red-50',
    desc: 'Dünya standartlarında sağlık hizmetlerine dilediğiniz hastanede, dilediğiniz doktorla ulaşmanızı sağlayan en kapsamlı sağlık güvencesidir.',
    features: ['Geniş Hastane Ağı', 'Yurt Dışı Tedavi', 'VIP Hizmet', 'Kapsamlı Teminatlar']
  },
  {
    id: 'seyahat-saglik',
    title: 'Seyahat Sağlık Sigortası',
    icon: Plane,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    desc: 'Vize başvurularında zorunlu olan veya yurt dışı seyahatlerinizde, hastalık ve kaza durumlarında tıbbi yardım almanızı sağlayan tıbbi koruma paketidir.',
    features: ['Vize İçin Zorunlu', 'Acil Tıbbi Müdahale', 'Tıbbi Nakil', 'Bagaj Kayıp Güvencesi']
  },
  {
    id: 'yabanci-saglik',
    title: 'Yabancı Sağlık Sigortası',
    icon: Globe,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    desc: 'Türkiye’de ikamet izni (oturma izni) almak isteyen yabancı uyruklu kişiler için zorunlu olan ve yasal gereksinimleri karşılayan ilgili sağlık sigortasıdır.',
    features: ['İkamet İzni İçin Geçerli', 'Yatarak Tedavi', 'Ayakta Tedavi', 'Yasal Zorunluluk']
  },
  {
    id: 'dask',
    title: 'DASK (Zorunlu Deprem Sigortası)',
    icon: HomeIcon,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    desc: 'Zorunlu bir devlet güvencesi olan DASK, deprem ve depremin doğrudan neden olduğu yangın, infilak ve yer kaymasının evinizde oluşturacağı maddi zararları karşılar.',
    features: ['Yasal Zorunluluk', 'Deprem Teminatı', 'Bina Hasarları', 'Devlet Güvencesi']
  },
  {
    id: 'konut',
    title: 'Konut Paket Sigortası',
    icon: HomeIcon,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    desc: 'Evinizi ve eşyalarınızı hırsızlık, yangın, su baskını gibi tehlikelere karşı korur. Geniş ve ücretsiz asistans hizmetleriyle evinize huzur katar.',
    features: ['Yangın & Su Baskını', 'Hırsızlık Teminatı', 'Eşya Koruması', 'Çilingir Hizmeti']
  },
  {
    id: 'is-yeri',
    title: 'İş Yeri Paket Sigortası',
    icon: Building,
    color: 'text-blue-700',
    bg: 'bg-blue-100',
    desc: 'İşletmenizi yangın, hırsızlık, su baskını ve çalışanlara gelebilecek zararlar gibi pek çok riske karşı güvence altına alarak ticari hayatınızın kesintiye uğramasını engeller.',
    features: ['Demirbaş Koruması', 'İş Durması Teminatı', 'Üçüncü Şahıs Sorumluluk', 'Yangın & Hırsızlık']
  },
  {
    id: 'mesleki-sorumluluk',
    title: 'Mesleki Sorumluluk Sigortası',
    icon: Briefcase,
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
    desc: 'Mesleki faaliyetlerinizi yürütürken üçüncü şahıslara verebileceğiniz zararlar nedeniyle oluşabilecek tazminat taleplerine karşı sizi yasa önünde güvenle korur.',
    features: ['Tazminat Koruması', 'Hukuki Destek', 'Mesleki Hatalar', 'Savunma Masrafları']
  },
  {
    id: 'ucuncu-sahis-mali-mesuliyet',
    title: 'Üçüncü Şahıs Mali Mesuliyet Sigortası',
    icon: Users,
    color: 'text-lime-600',
    bg: 'bg-lime-50',
    desc: 'Sizin veya çalışanlarınızın, üçüncü şahıslara vereceği bedeni ve maddi zararlardan doğabilecek hukuki sorumlulukları geniş teminatlarla kapsamlı şekilde garanti altına alır.',
    features: ['Maddi Hasarlar', 'Bedeni Zararlar', 'Hukuki Savunma', 'İşletme Koruması']
  },
  {
    id: 'nakliyat',
    title: 'Nakliyat (Emtia) Sigortası',
    icon: Truck,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    desc: 'Mallarınızın bir yerden başka bir yere taşınması sırasında karşılaşabileceği kazalar, hırsızlık veya fiziksel hasarlara karşı yatırımınızı tam kapsamlı olarak güvence altına alır.',
    features: ['Emtia Koruması', 'Deniz/Hava/Kara/Demiryolu', 'Tam Ziya Teminatı', 'Geniş Teminat Seçenekleri']
  },
  {
    id: 'hayat-sigortasi',
    title: 'Hayat Sigortası',
    icon: Heart,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    desc: 'Beklenmedik durumlarda sevdiklerinizin finansal güvencesini sağlar, yaşam kalitelerini korumalarına yardımcı olur ve kredili borçlarınızın ailenize miras kalmasını engeller.',
    features: ['Vefat Teminatı', 'Maluliyet', 'Kredi Koruması', 'Vergi Avantajı']
  },
  {
    id: 'ferdi-kaza',
    title: 'Ferdi Kaza Sigortası',
    icon: Umbrella,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    desc: 'Ani ve beklenmedik kazalar sonucu oluşabilecek tedavi masraflarını karşılar, sakatlık veya vefat durumunda size ve ailenize ciddi oranda maddi destek sağlar.',
    features: ['Kaza Sonucu Vefat', 'Kaza Sonucu Maluliyet', 'Tedavi Masrafları', 'Gündelik Tazminat']
  },
  {
    id: 'evcil-hayvan',
    title: 'Evcil Hayvan (Pati) Sigortası',
    icon: PawPrint,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    desc: 'Patili dostlarımızın acil sağlık sorunları ve rutin veteriner masraflarını hafifletir. Onların sağlığı ve güvenliği, daima sizin en büyük huzurunuzdur.',
    features: ['Acil Müdahale', 'Rutin Veteriner Muayenesi', 'Tahlil ve Röntgen', 'Kayıp İlanı Desteği']
  },
  {
    id: 'cep-telefonu-elektronik',
    title: 'Cep Telefonu / Elektronik Cihaz Sigortası',
    icon: Smartphone,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    desc: 'Cep telefonu, tablet veya bilgisayarlarınızı sıvı teması, ekran kırılması, voltaj dalgalanması ve hırsızlık gibi risklere karşı kasko güvencesi ile en üst düzeyde korur.',
    features: ['Ekran Kırılması', 'Sıvı Teması', 'Hırsızlık Teminatı', 'Voltaj Dalgalanması']
  }
];

export default function Products() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 text-center border-b border-slate-800">
        <h1 className="text-4xl font-bold text-white mb-4">Ürünlerimiz</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto px-4">
          Bireysel ve kurumsal tüm sigorta ihtiyaçlarınız için size özel olarak hazırlanmış geniş ürün yelpazemiz.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        {products.map((p) => (
          <div 
            key={p.id} 
            id={p.id}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start scroll-mt-28"
          >
            <div className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center ${p.bg} ${p.color}`}>
              <p.icon className="w-10 h-10" />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{p.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {p.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {p.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link to={`/iletisim?urun=${p.id}`} className="inline-flex items-center justify-center bg-blue-50 text-blue-700 font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
                  Bu Ürün İçin Fiyat Al
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
