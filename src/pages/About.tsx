import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 text-center border-b border-slate-800">
        <h1 className="text-4xl font-bold text-white mb-4">Hakkımızda</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto px-4">
          Espiye'de modern sigortacılık vizyonuyla, güveninizi değere dönüştürüyoruz.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Hikayemiz</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              2023 yılında Espiye'de kurulan <strong>Sabaz Sigorta</strong>, klasik sigorta acenteliği anlayışını değiştirme vizyonuyla yola çıkmıştır. Artık müşterilerimizin tek bir şirkete bağlı kalıp yüksek fiyatlar veya yetersiz poliçeler alması devri kapanmıştır.
            </p>
            <p>
              Kuruluşumuzdan itibaren temel ilkemiz; <strong>"Sizin Değerinizi, Sizin Gibi Korumak"</strong> olmuştur. Bu doğrultuda, sektörün dev markalarından oluşan 30'u aşkın çözüm ortağıyla entegre çalışarak her müşterimize terzi usulü poliçe seçenekleri sunuyoruz. 
            </p>
            <p>
              İster zorunlu bir trafik poliçesi olsun ister kapsamlı bir ticari tesis sigortası, her müşterimize aynı ciddiyet, aynı güler yüz ve aynı uzmanlıkla yaklaşıyoruz. Çünkü biliyoruz ki sattığımız şey bir kağıt değil, kötü gününüzde tutunacağınız güvendir.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-blue-100 leading-relaxed">
                Sigorta bilincini artırarak, bölgenin en çok tercih edilen, dijital altyapısı güçlü ve tamamen şeffaflığa dayalı lider sigorta acentesi olmak. Her hanede ve her işletmede güven veren ilk isim olmak.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
            <p className="text-slate-300 leading-relaxed">
              Müşterilerimizin risk profilini en doğru şekilde analiz ederek, piyasadaki tüm seçenekler arasından bütçeye ve ihtiyaca en uygun poliçeyi hızlı, tarafsız ve anlaşılır biçimde sunmak.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Temel Değerlerimiz</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Şeffaflık</h4>
                <p className="text-slate-600 text-sm mt-1">Sürpriz muafiyetler veya gizli şartlar yok. Neyi satın aldığınızı net bilirsiniz.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Hızlı Hasar Yönetimi</h4>
                <p className="text-slate-600 text-sm mt-1">Hasar dosyalarınızı yakından takip eder, tazminat sürecini hızlandırırız.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Bağımsızlık</h4>
                <p className="text-slate-600 text-sm mt-1">Tek bir şirketin değil, sizing menfaatinizin temsilcisi olarak çalışırız.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Erişilebilirlik</h4>
                <p className="text-slate-600 text-sm mt-1">Mesai saatleri dışında dahi acil durumlarınızda bize her zaman ulaşabilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
