import { Phone, Mail, MapPin, Send, Paperclip, Instagram, CheckCircle, Loader2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialUrun = searchParams.get('urun') || 'Belirtilmedi';
  const isSuccessFromUrl = searchParams.get('success') === 'true';

  const [selectedBranch, setSelectedBranch] = useState(initialUrun);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(isSuccessFromUrl);

  useEffect(() => {
    const urun = searchParams.get('urun');
    if (urun) setSelectedBranch(urun);
  }, [searchParams]);

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

  const isAuto = ['trafik-sigortasi', 'kasko', 'yesil-kart'].includes(selectedBranch);
  const isHealth = ['tamamlayici-saglik', 'ozel-saglik', 'seyahat-saglik', 'yabanci-saglik'].includes(selectedBranch);
  const isProperty = ['dask', 'konut', 'is-yeri'].includes(selectedBranch);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 text-center border-b border-slate-800">
        <h1 className="text-4xl font-bold text-white mb-4">Bize Ulaşın</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto px-4">
          Sigorta ihtiyaçlarınız için teklif almak veya hasar ihbarında bulunmak için iletişime geçin.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Information & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">İletişim Bilgileri</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Telefon / WhatsApp</h4>
                    <a href="tel:05395459400" className="text-slate-600 mt-1 block hover:text-blue-600 transition-colors">0539 545 94 00</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">E-Posta</h4>
                    <a href="mailto:buksigorta@hotmail.com" className="text-slate-600 mt-1 block hover:text-indigo-600 transition-colors">buksigorta@hotmail.com</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Adres</h4>
                    <p className="text-slate-600 mt-1">
                      Merkez Mah. Kemal Şahan Cad.<br />
                      No:20/5 Espiye / Giresun
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Instagram</h4>
                    <a href="https://www.instagram.com/sabazespiye?igsh=aGI5YmRtMGt0c2Rj" target="_blank" rel="noopener noreferrer" className="text-slate-600 mt-1 block hover:text-pink-600 transition-colors">
                      @sabazespiye
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-80 bg-slate-200 rounded-3xl overflow-hidden relative shadow-sm border border-slate-100 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.5496808222047!2d38.704277376422695!3d40.94753562316246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40637964c6929559%3A0x8d469e22be0a1d5a!2sGiresun%20%2F%20Sabaz%20Sigorta%20Espiye%20%C5%9Eubesi!5e0!3m2!1str!2str!4v1780859710386!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div id="hizli-teklif" className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm h-full min-h-[400px]">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Hızlı Teklif / Mesaj Gönderin</h2>
              <p className="text-slate-600 mb-8">Talep ettiğiniz branş hakkında hızlıca teklif almak için formu doldurabilirsiniz. Ek belgeleri yükleyerek sürecinizi hızlandırabilirsiniz.</p>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center h-full"
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
                    {/* Yönlendirme ve Captcha Ayarları */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="Web Sitesinden Yeni Teklif/İletişim Talebi" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={window.location.origin + "/iletisim?success=true"} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Adınız Soyadınız *</label>
                    <input 
                      type="text" 
                      name="Ad Soyad"
                      placeholder="Ad Soyad"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Telefon Numaranız *</label>
                    <input 
                      type="tel" 
                      name="Telefon"
                      placeholder="0(5XX) XXX XX XX"
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">İlgilendiğiniz Branş</label>
                  <select 
                    name="İlgilenilen Branş" 
                    value={selectedBranch} 
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700"
                  >
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

                {/* Conditional Fields Based on Branch */}
                {isAuto && (
                  <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 space-y-4">
                    <h3 className="font-semibold text-blue-900 border-b border-blue-100 pb-2">Araç Bilgileri</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">TC Kimlik / VKN</label>
                        <input type="text" name="TC_VKN" placeholder="TC veya Vergi No" className="w-full bg-white border border-blue-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Doğum Tarihi</label>
                        <input type="date" name="Arac_Dogum_Tarihi" className="w-full bg-white border border-blue-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm text-slate-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Araç Plakası</label>
                        <input type="text" name="Plaka" placeholder="Örn: 34ABC123" className="w-full bg-white border border-blue-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm uppercase" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Araç Belge No</label>
                        <input type="text" name="Arac_Belge_No" placeholder="Örn: AA 123456" className="w-full bg-white border border-blue-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm uppercase" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Ruhsat Görseli (İsteğe Bağlı) <span className="text-slate-400 text-xs">- Hızlı işlem için fotoğraf ekleyebilirsiniz</span></label>
                      <input type="file" name="Ruhsat_Gorseli" accept="image/png, image/jpeg, image/jpg, application/pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 focus:outline-none cursor-pointer file:cursor-pointer transition-all" />
                    </div>
                  </div>
                )}

                {isHealth && (
                  <div className="p-5 bg-rose-50/50 rounded-2xl border border-rose-100 space-y-4">
                    <h3 className="font-semibold text-rose-900 border-b border-rose-100 pb-2">Sağlık Sigortası Bilgileri</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">TC Kimlik No</label>
                        <input type="text" name="Saglik_TC" placeholder="TC Kimlik Nonuz" className="w-full bg-white border border-rose-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Doğum Tarihiniz</label>
                        <input type="date" name="Dogum_Tarihi" className="w-full bg-white border border-rose-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all text-sm text-slate-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Ek Evrak / Görsel (İsteğe Bağlı)</label>
                      <input type="file" name="Saglik_Evrak" accept="image/png, image/jpeg, application/pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-rose-100 file:text-rose-700 hover:file:bg-rose-200 focus:outline-none cursor-pointer file:cursor-pointer transition-all" />
                    </div>
                  </div>
                )}

                {isProperty && (
                  <div className="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 space-y-4">
                    <h3 className="font-semibold text-amber-900 border-b border-amber-100 pb-2">Mülk Bilgileri</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Açık Adres (UAVT Adres Kodu İçin)</label>
                        <textarea name="Acik_Adres" rows={2} placeholder="İl, İlçe, Mahalle, Sokak, No..." className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm min-h-[60px]"></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">TC Kimlik / VKN</label>
                        <input type="text" name="Mulk_TC_VKN" placeholder="Poliçe sahibi kimlik/vergi no" className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Doğum Tarihi</label>
                        <input type="date" name="Mulk_Dogum_Tarihi" className="w-full bg-white border border-amber-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm text-slate-600" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Tapu veya DASK Evrakı (İsteğe Bağlı)</label>
                        <input type="file" name="Mulk_Evrak" accept="image/png, image/jpeg, application/pdf" className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200 focus:outline-none cursor-pointer file:cursor-pointer transition-all" />
                      </div>
                    </div>
                  </div>
                )}

                {!isAuto && !isHealth && !isProperty && selectedBranch !== 'Belirtilmedi' && (
                  <div className="p-5 bg-slate-100/50 rounded-2xl border border-slate-200 space-y-4">
                    <h3 className="font-semibold text-slate-800 border-b border-slate-200 pb-2">Ek Belgeler</h3>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Evrak veya Görsel Ekleyin (İsteğe Bağlı)</label>
                      <input type="file" name="Diger_Evrak" accept=".png, .jpg, .jpeg, .pdf, .doc, .docx" className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-200 file:text-slate-700 hover:file:bg-slate-300 focus:outline-none cursor-pointer file:cursor-pointer transition-all" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Açıklama / Mesajınız (İsteğe Bağlı)</label>
                  <textarea 
                    rows={4}
                    name="Mesaj"
                    placeholder="Eklemek istediğiniz notlar veya detaylar..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <p className="text-xs text-slate-500">
                  * Form Submit servisi 1 adete kadar ve en fazla birkaç megabayt boyutunda dosya eklemenize izin verir. Daha yüksek boyutlu evraklarınız için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
                </p>

                <button disabled={isSubmitting} type="submit" className="w-full bg-blue-600 text-white rounded-xl px-8 py-4 font-semibold text-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed">
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Mail className="w-5 h-5" />}
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </motion.form>
              )}
            </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
