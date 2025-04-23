const rawProjects = [
  {
    number: "01",
    title: "A.Y Evi",
    summary: "Modern çizgilerle geleneksel öğeleri harmanlayan dubleks villa.",
    description:
      "A.Y Evi, Sakarya’da doğayla iç içe bir yaşam arayışına cevap veren, iki katlı müstakil bir konut olarak tasarlandı. Projede modern mimari çizgilerle geleneksel Türk evinin fonksiyonel unsurları harmanlandı. Geniş cam açıklıkları ve doğal ahşap detaylarla, iç ve dış mekanlar arasında güçlü bir ilişki kuruldu. Enerji verimliliği ve doğal ışık kullanımı ön planda tutularak, sürdürülebilirlik ilkelerine bağlı kalındı.",
    architect: "Rümeysa Ada Kubal",
    concept: "Dubleks müstakil yapı",
    date: "2023",
    location: "Sakarya, Türkiye"
  },
  {
    number: "02",
    title: "U.A İç Mekan Tasarımı",
    summary: "Fonksiyonel ve sade bir iç mekan dönüşümü.",
    description:
      "U.A projesi, eski bir apartman dairesinin çağdaş yaşam ihtiyaçlarına uygun olarak yeniden tasarlanmasını içeriyor. Mekanda kullanılan açık tonlar ve doğal malzemeler, ferahlık hissini artırırken, özel olarak tasarlanan mobilyalar alanın her köşesini fonksiyonel hale getiriyor. Işık ve gölge oyunları ile atmosfer yaratılırken, kullanıcı konforu da maksimuma çıkarıldı.",
    architect: "Rümeysa Ada Kubal",
    concept: "İç mekan renovasyonu",
    date: "2024",
    location: "İstanbul, Türkiye"
  },
  {
    number: "03",
    title: "MFI Ofis Tasarımı",
    summary: "Esnek, şeffaf ve sürdürülebilir bir ofis deneyimi.",
    description:
      "MFI Ofis projesi, genç ve dinamik bir ekip için tasarlanan açık planlı, esnek çalışma alanlarını içeriyor. Ofis ortamında şeffaflık ve etkileşim ön planda tutulurken, akustik konfor için özel çözümler geliştirildi. Doğal ışık kullanımını destekleyen cam bölmeler ve sürdürülebilir malzeme tercihleri, hem çevresel duyarlılığı hem de çalışan memnuniyetini artırmayı hedefliyor.",
    architect: "Rümeysa Ada Kubal",
    concept: "Açık ofis planlaması",
    date: "2022",
    location: "Ankara, Türkiye"
  },
  {
    number: "04",
    title: "Beşiktaş Butik Otel Projesi",
    summary: "Yerel dokuyu çağdaş çizgilerle buluşturan bir butik otel.",
    description:
      "Beşiktaş’ın kalbinde konumlanan bu butik otel projesi, yerel mimari dokuyu modern bir anlayışla yorumluyor. 12 odalı yapı, farklı konseptlerde tasarlanan odaları ve ortak yaşam alanları ile misafirlerine eşsiz bir konaklama deneyimi sunuyor. Mekanda kullanılan taş, ahşap ve metal kombinasyonu; sıcak, davetkar ve çağdaş bir atmosfer yaratıyor.",
    architect: "Rümeysa Ada Kubal",
    concept: "Butik otel tasarımı",
    date: "2023",
    location: "İstanbul, Türkiye"
  },
  {
    number: "05",
    title: "Çankaya Villa Projesi",
    summary: "Doğayla bütünleşen tek katlı yaşam alanı.",
    description:
      "Çankaya Villa, Ankara'nın sakin ve yeşil bir bölgesinde tasarlanmış, tek katlı bir yaşam alanıdır. Projede hem iç hem de dış mekanlar kullanıcı konforuna göre biçimlendirilmiştir. Bahçeyle bütünleşen açık yaşam alanları, geniş teraslar ve doğal taş cephe kaplamaları ile proje, doğayla uyumlu bir yaşam tarzını yansıtır. Projede kullanılan yerel malzemeler ve sade formlar, zamansız bir estetik yakalanmasını sağlamıştır.",
    architect: "Rümeysa Ada Kubal",
    concept: "Doğal peyzaj ile bütünleşen villa",
    date: "2021",
    location: "Ankara, Türkiye"
  }
];

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const projects = rawProjects.map((p) => ({
  ...p,
  slug: slugify(p.title)
}));

export default projects;
