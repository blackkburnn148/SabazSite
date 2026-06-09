import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full p-1 border-2 border-slate-700">
                 <img src="/images/sabaz-logo.png" alt="Sabaz Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-bold text-xl text-white">SABAZ SİGORTA</div>
                <div className="text-sm text-blue-400 font-medium">ESPİYE ŞUBESİ</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Profesyonel ekibimiz ve 30'dan fazla çözüm ortağımızla, hayatınızdaki en değerli varlıkları şeffaf ve güvenilir şekilde güvence altına alıyoruz.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/sabazespiye?igsh=aGI5YmRtMGt0c2Rj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-colors shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/urunler" className="hover:text-blue-400 transition-colors">Bireysel ve Kurumsal Ürünler</Link></li>
              <li><Link to="/sirketler" className="hover:text-blue-400 transition-colors">Anlaşmalı Şirketlerimiz</Link></li>
              <li><Link to="/hakkimizda" className="hover:text-blue-400 transition-colors">Hakkımızda & Vizyonumuz</Link></li>
              <li><Link to="/iletisim" className="hover:text-blue-400 transition-colors">Bize Ulaşın</Link></li>
            </ul>
          </div>

          {/* Core Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Öne Çıkan Ürünler</h3>
            <ul className="space-y-3">
              <li><Link to="/urunler#trafik-sigortasi" className="hover:text-blue-400 transition-colors">Zorunlu Trafik Sigortası</Link></li>
              <li><Link to="/urunler#kasko" className="hover:text-blue-400 transition-colors">Genişletilmiş Kasko</Link></li>
              <li><Link to="/urunler#tamamlayici-saglik" className="hover:text-blue-400 transition-colors">Tamamlayıcı Sağlık (TSS)</Link></li>
              <li><Link to="/urunler#dask" className="hover:text-blue-400 transition-colors">DASK / Zorunlu Deprem</Link></li>
              <li><Link to="/urunler#konut" className="hover:text-blue-400 transition-colors">Konut Paket Sigortası</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">İletişim Bilgileri</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm">Merkez Mah. Kemal Şahan Cad. No:20/5 Espiye / Giresun</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <Link to="/iletisim" className="text-sm hover:text-white transition-colors">0539 545 94 00</Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:buksigorta@hotmail.com" className="text-sm hover:text-white transition-colors">buksigorta@hotmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Sabaz Sigorta Espiye Şubesi. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
