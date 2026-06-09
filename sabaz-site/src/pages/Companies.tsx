export default function Companies() {
  const companies = [
    { id: 'aksigorta', name: 'AKSigorta', logo: '/images/aksigorta.png', desc: 'Güçlü sermaye yapısı ve yılların tecrübesiyle AKSigorta, güven veren teminatlar sunar.' },
    { id: 'allianz', name: 'Allianz Sigorta', logo: '/images/allianz.png', desc: 'Dünyanın önde gelen finans topluluklarından Allianz, küresel güvenceyi yerel çözümlerle sunuyor.' },
    { id: 'anadolu', name: 'Anadolu Sigorta', logo: '/images/anadolu.png', desc: 'Türkiye’nin ilk milli sigorta şirketi olma gururuyla, geleneksel güveni modern hizmetle birleştirir.' },
    { id: 'axa', name: 'AXA Sigorta', logo: '/images/axa.png', desc: 'Geniş acente ağı ve müşteri memnuniyeti odaklı yaklaşımıyla AXA, hayatın her anında yanınızda.' },
    { id: 'sompo', name: 'Sompo Sigorta', logo: '/images/sompo.png', desc: 'Japon kalite anlayışını Türk pazarının dinamikleriyle buluşturan yenilikçi çözümler sunar.' },
    { id: 'hdi', name: 'HDI Sigorta', logo: '/images/hdi.png', desc: 'Alman disiplini ve finansal gücüyle, bireysel ve kurumsal sigortacılıkta sağlam adımlar.' },
    { id: 'quick', name: 'Quick Sigorta', logo: '/images/quick.png', desc: 'Dijital sigortacılığın öncülerinden, hızlı süreçler ve pratik çözümler arayanların tercihi.' },
    { id: 'hepiyi', name: 'Hepiyi Sigorta', logo: '/images/hepiyi.png', desc: 'Yeni nesil sigortacılık vizyonuyla, müşteri dostu, yalın ve şeffaf teminatlar sunar.' },
    { id: 'ankara', name: 'Ankara Sigorta', logo: '/images/ankara.png', desc: 'Köklü geçmişi ve deneyimli kadrosuyla Türkiye’nin dört bir yanında güvenilir koruma.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 text-center border-b border-slate-800">
        <h1 className="text-4xl font-bold text-white mb-4">Şirketlerimiz</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto px-4">
          Gücümüzü sektörün en köklü ve güvenilir 30'dan fazla şirketinden alıyoruz. 
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div key={company.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="h-24 w-full flex items-center justify-center mb-6">
                <img src={company.logo} alt={company.name} className="max-h-full max-w-[70%] object-contain mix-blend-multiply" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{company.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {company.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Note */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Ve +25 Şirket Daha...</h3>
          <p className="text-blue-800">
            Ekranınızı logolara boğmamak adına yalnızca en sık çalıştığımız iş ortaklarımızı listeledik. İhtiyacınıza uygun fiyatlamayı yaparken sistemimizdeki 30'dan fazla şirketin tümünden teklif alıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
}
