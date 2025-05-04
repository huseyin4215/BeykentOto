// Şehir ve ilçe verileri
const cityDistricts = {

    1: ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"],
    2: ["Merkez", "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kâhta", "Samsat", "Sincik", "Tut"],
    3: ["Merkez", "Başmakçı", "Bayat", "Bolvadin", "Çay", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Sandıklı", "Sinanpaşa", "Sultandağı", "Şuhut"],
    4: ["Merkez", "Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Patnos", "Taşlıçay", "Tutak"],
    5: ["Merkez", "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merzifon", "Suluova", "Taşova"],
    6: ["Akyurt", "Altındağ", "Ayaş", "Balâ", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut", "Evren", "Gölbaşı", "Güdül", "Haymana", "Kalecik", "Kahramankazan", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar", "Yenimahalle"],
    7: ["Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Kepez", "Konyaaltı", "Korkuteli", "Kumluca", "Manavgat", "Muratpaşa", "Serik"],
    8: ["Merkez", "Ardanuç", "Arhavi", "Borçka", "Hopa", "Kemalpaşa", "Murgul", "Şavşat", "Yusufeli"],
    9: ["Bozdoğan", "Buharkent", "Çine", "Didim", "Efeler", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"],
    10: ["Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"],
    11: ["Merkez", "Bozüyük", "Gölpazarı", "İnhisar", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"],
    12: ["Merkez", "Adaklı", "Genç", "Karlıova", "Kiğı", "Solhan", "Yayladere", "Yedisu"],
    13: ["Merkez", "Adilcevaz", "Ahlat", "Güroymak", "Hizan", "Mutki", "Tatvan"],
    14: ["Merkez", "Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Mudurnu", "Seben", "Yeniçağa"],
    15: ["Merkez", "Ağlasun", "Altınyayla", "Bucak", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Tefenni", "Yeşilova"],
    16: ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafa Kemal Paşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"],
    17: ["Merkez", "Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Yenice"],
    18: ["Merkez", "Atkaracalar", "Bayramören", "Çerkeş", "Eldivan", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Orta", "Şabanözü", "Yapraklı"],
    19: ["Merkez", "Alaca", "Bayat", "Boğazkale", "Dodurga", "İskilip", "Kargı", "Laçin", "Mecitözü", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"],
    20: ["Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Güney", "Honaz", "Kale", "Merkezefendi", "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"],
    21: ["Bağlar", "Bismil", "Çermik", "Çınar", "Çüngüş", "Dicle", "Eğil", "Ergani", "Hani", "Hazro", "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan", "Sur", "Yenişehir"],
    22: ["Merkez", "Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Süloğlu", "Uzunköprü"],
    23: ["Merkez", "Ağın", "Alacakaya", "Arıcak", "Baskil", "Karakoçan", "Keban", "Kovancılar", "Maden", "Palu", "Sivrice"],
    24: ["Merkez", "Çayırlı", "İliç", "Kemah", "Kemaliye", "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"],
    25: ["Aşkale", "Aziziye", "Çat", "Hınıs", "Horasan", "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman", "Oltu", "Olur", "Palandöken", "Pasinler", "Pazaryolu", "Şenkaya", "Tekman", "Tortum", "Uzundere", "Yakutiye"],
    26: ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"],
    27: ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"],
    28: ["Merkez", "Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espiye", "Eynesil", "Görele", "Güce", "Keşap", "Piraziz", "Şebinkarahisar", "Tirebolu", "Yağlıdere"],
    29: ["Merkez", "Kelkit", "Köse", "Kürtün", "Şiran", "Torul"],
    30: ["Merkez", "Çukurca", "Derecik", "Şemdinli", "Yüksekova"],
    31: ["Altınözü", "Antakya", "Arsuz", "Belen", "Defne", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladağı"],
    32: ["Merkez", "Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"],
    33: ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"],
    34: ["Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kâğıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"],
    35: ["Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"],
    36: ["Merkez", "Akyaka", "Arpaçay", "Digor", "Kağızman", "Sarıkamış", "Selim", "Susuz"],
    37: ["Merkez", "Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Küre", "Pınarbaşı", "Seydiler", "Şenpazar", "Taşköprü", "Tosya"],
    38: ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"],
    39: ["Merkez", "Babaeski", "Demirköy", "Kofçaz", "Lüleburgaz", "Pehlivanköy", "Pınarhisar", "Vize"],
    40: ["Merkez", "Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Mucur"],
    41: ["Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"],
    42: ["Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Kulu", "Meram", "Sarayönü", "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"],
    43: ["Merkez", "Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Pazarlar", "Şaphane", "Simav", "Tavşanlı"],
    44: ["Akçadağ", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazıhan", "Yeşilyurt"],
    45: ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Şehzadeler", "Turgutlu", "Yunusemre"],
    46: ["Afşin", "Andırın", "Çağlayancerit", "Dulkadiroğlu", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Onikişubat", "Pazarcık", "Türkoğlu"],
    47: ["Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"],
    48: ["Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Ortaca", "Seydikemer", "Ula", "Yatağan"],
    49: ["Merkez", "Bulanık", "Hasköy", "Korkut", "Malazgirt", "Varto"],
    50: ["Merkez", "Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Ürgüp"],
    51: ["Merkez", "Altunhisar", "Bor", "Çamardı", "Çiftlik", "Ulukışla"],
    53: ["Merkez", "Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Pazar"],
    54: ["Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"],
    55: ["19 Mayıs", "Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra", "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak", "Ladik", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü", "Yakakent"],
    56: ["Merkez", "Baykan", "Eruh", "Kurtalan", "Pervari", "Şirvan", "Tillo"],
    57: ["Merkez", "Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Saraydüzü", "Türkeli"],
    58: ["Merkez", "Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Suşehri", "Şarkışla", "Ulaş", "Yıldızeli", "Zara"],
    59: ["Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Süleymanpaşa", "Şarköy"],
    60: ["Merkez", "Almus", "Artova", "Başçiftlik", "Erbaa", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal", "Yeşilyurt", "Zile"],
    61: ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Ortahisar", "Sürmene", "Şalpazarı", "Tonya", "Vakfıkebir", "Yomra"],
    62: ["Merkez", "Çemişgezek", "Hozat", "Mazgirt", "Nazımiye", "Ovacık", "Pertek", "Pülümür"],
    63: ["Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Harran", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"],
    64: ["Merkez", "Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey"],
    65: ["Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit", "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye", "Özalp", "Saray", "Tuşba"],
    66: ["Merkez", "Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli", "Yenifakılı", "Yerköy"],
    67: ["Merkez", "Alaplı", "Çaycuma", "Devrek", "Gökçebey", "Karadeniz Ereğli", "Kilimli", "Kozlu"],
    68: ["Merkez", "Ağaçören", "Eskil", "Gülağaç", "Güzelyurt", "Ortaköy", "Sarıyahşi", "Sultanhanı"],
    69: ["Merkez", "Aydıntepe", "Demirözü"],
    70: ["Merkez", "Ayrancı", "Başyayla", "Ermenek", "Kazımkarabekir", "Sarıveliler"],
    71: ["Merkez", "Bahşili", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Sulakyurt"],
    72: ["Merkez", "Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Sason"],
    73: ["Merkez", "Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Silopi", "Uludere"],
    74: ["Merkez", "Amasra", "Kurucaşile", "Ulus"],
    75: ["Merkez", "Çıldır", "Damal", "Göle", "Hanak", "Posof",],
    76: ["Merkez", "Aralık", "Karakoyunlu", "Tuzluca"],
    77: ["Merkez", "Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Termal"],
    78: ["Merkez", "Eflani", "Eskipazar", "Ovacık", "Safranbolu", "Yenice"],
    79: ["Merkez", "Elbeyli", "Musabeyli", "Polateli"],
    80: ["Merkez", "Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Sumbas", "Toprakkale"],
    81: ["Merkez", "Akçakoca", "Cumayeri", "Çilimli", "Gölyaka", "Gümüşova", "Kaynaşlı", "Yığılca"]
};



// Tüm ilçeleri tutacak değişken
let allDistricts = [];

// Şehir seçimi değiştiğinde ilçe listesini güncelle
document.getElementById('city').addEventListener('change', function () {
    const city = this.value;
    const districtSelect = document.getElementById('district');

    // İlçe seçim kutusunu temizle
    districtSelect.innerHTML = '<option value="">İlçe Seçin</option><option value="allDistrict">Tüm İlçeler</option>';

    // Seçilen şehire göre ilçeleri ekle
    if (cityDistricts[city]) {
        cityDistricts[city].forEach(function (district) {
            const option = document.createElement('option');
            option.value = district.toLowerCase().replace(' ', '-'); // Değerleri URL uyumlu hale getir
            option.textContent = district; // İlçe adını ayarla
            districtSelect.appendChild(option);
        });

        // Tüm ilçeleri ekle
        allDistricts = [].concat(...Object.values(cityDistricts));
    }
});

// İlçe seçim kutusuna değişiklik yapıldığında
document.getElementById('district').addEventListener('change', function () {
    if (this.value === 'allDistrict') {
        

        // Tüm ilçeleri seçili hale getir
        Array.from(districtSelect.options).forEach((option, index) => {
            if (index > 0) { // İlk seçenek 'İlçe Seçin' olduğu için
                option.selected = true;
            }
        });
    }
});



// Tüm dealer-btn butonlarına event listener ekle

// Tüm arama butonlarını seçmek için querySelectorAll kullan
document.querySelectorAll(".searchBtn").forEach(button => {
    button.addEventListener('click', () => {
        // Şehir ve ilçe elementlerini seç
        const city = document.getElementById('city');
        const district = document.getElementById('district');

        // Şehir seçili mi kontrol et
        if (!city.value) {
            alert('Lütfen bir il seçiniz');
        }
        // İlçe seçili mi kontrol et
        else if (!district.value) {
            alert('Lütfen bir ilçe seçiniz');
        } else {
            // Eğer her iki alan da doluysa işlem yapılabilir
   
            
            // Seçilen sonuçları ekrana yazdır

    

            // Filtreleme fonksiyonunu çağır
            filterDealers(`${city.value}`, `${district.value}`);
        }
    });
});

// Filtreleme fonksiyonu
function filterDealers(plaka, ilce) {
    // Tüm dealer-container'ları al
    const dealers = document.querySelectorAll('.dealer-container');
    const deals=document.querySelectorAll(".dealer")
    if(plaka=="allCity"&& ilce=="allDistrict"){
        dealers.forEach(dealer => {
            dealer.style.display="block";
        });
    }
    else if(((plaka !="allCity")&&(plaka !="firstSelect")) &&(ilce=="allDistrict")){
         // Her bir dealer'ı kontrol et
        dealers.forEach(dealer => {
        const dealerPlaka = dealer.getAttribute('data-plaka');

        
        
        // Eğer plaka ve ilçe eşleşiyorsa göster, aksi halde gizle
        if (dealerPlaka === plaka ) {
            dealer.style.display = 'block';  // Eşleşenleri göster
            
            
            
        } else {
            dealer.style.display = 'none';  // Eşleşmeyenleri gizle
        }
        });
    } else {

    // Her bir dealer'ı kontrol et
    dealers.forEach(dealer => {
        const dealerPlaka = dealer.getAttribute('data-plaka');
        const dealerIlce = dealer.getAttribute('data-ilce');

        
        // Eğer plaka ve ilçe eşleşiyorsa göster, aksi halde gizle
        if (dealerPlaka === plaka && dealerIlce === ilce) {
            dealer.style.display = 'block';  // Eşleşenleri göster
            
            
            
        } else {
            dealer.style.display = 'none';  // Eşleşmeyenleri gizle
        }
    });
}

        // Her bir dealer'ı kontrol et
        deals.forEach(deal => {

                deal.style.display="flex";
                deal.style.margin = "auto"; // İstediğiniz margin değerini buraya ekleyin

        });


}







