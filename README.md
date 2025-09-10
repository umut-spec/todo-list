📝 Modern Todo App | Yapılacaklar Listesi

Modern ve kullanıcı dostu bir görev yönetim uygulaması. Günlük işlerinizi organize edin, projelerinizi yönetin ve hedeflerinizi takip edin.

🌟 Özellikler
🎯 Görev Yönetimi

Hızlı Görev Ekleme: Tek tıkla veya Enter tuşu ile görev ekleme
Akıllı Tamamlama: Görevleri tıklayarak tamamlandı olarak işaretleme
Görev Silme: İstenmeyen görevleri kolayca silme
Durum Gösterimi: Tamamlanan görevler için görsel geri bildirim

📁 Proje Organizasyonu

Proje Oluşturma: İstediğiniz kadar proje oluşturun
Proje Bazlı Filtreleme: Görevleri projelere göre gruplandırın
Proje Görev Sayaçları: Her projede kaç görev olduğunu görün
Dinamik Proje Yönetimi: Projeleri anında oluşturun ve yönetin

⭐ Önemli Görev İşaretleme

Yıldız Sistemi: Önemli görevleri yıldızla işaretleyin
Öncelik Filtreleme: Sadece önemli görevleri görüntüleyin
Görsel Vurgulama: Önemli görevler altın sarısı renkte görünür

🔍 Akıllı Filtreleme Sistemi

Bugün: Bugün yapılması gereken görevler
Önemli: Yıldızlı görevler
Planlanan: Tarihi belirlenmiş görevler
Tüm Görevler: Bütün görevlerin genel görünümü

💾 Güvenli Veri Saklama

Otomatik Kaydetme: Her değişiklik anında kaydedilir
LocalStorage Desteği: Verileriniz tarayıcınızda güvenle saklanır
Oturum Sürdürme: Tarayıcıyı kapatsanız bile verileriniz kalır

🎨 Modern Tasarım

Dark Theme: Göz yormayan koyu tema
Gradient Arka Plan: Profesyonel görünüm için gradient renkler
Micro Animasyonlar: Hover efektleri ve geçiş animasyonları
İkon Desteği: Font Awesome ikonları ile zengin görsel deneyim

📱 Responsive Tasarım

Mobil Uyumlu: Telefon ve tablette mükemmel görünüm
Adaptive Layout: Ekran boyutuna göre otomatik ayarlama
Touch Friendly: Dokunmatik cihazlar için optimize edilmiş

🛠️ Teknik Detaylar
Kullanılan Teknolojiler

Frontend: HTML5, CSS3, Vanilla JavaScript (ES6+)
Styling: Modern CSS (Flexbox, Grid, Animations)
Icons: Font Awesome 6.0
Fonts: Google Fonts (Roboto ailesi)
Storage: Browser LocalStorage API

Tarayıcı Desteği

✅ Chrome 70+
✅ Firefox 65+
✅ Safari 12+
✅ Edge 79+
✅ Mobile browsers

🚀 Kurulum ve Kullanım
Hızlı Başlangıç

Repository'yi klonlayın:

bashgit clone https://github.com/[username]/modern-todo-app.git

Dosyaları açın:

index.html dosyasını herhangi bir tarayıcıda açın
Hiçbir sunucu kurulumu gerektirmez!


Hemen kullanmaya başlayın:

İlk görevinizi ekleyin
Projelerinizi oluşturun
Filtrelerle görevlerinizi organize edin



💡 Kullanım Kılavuzu
📝 Görev İşlemleri
Görev Ekleme

Sayfanın alt kısmındaki input alanına görevinizi yazın
"Ekle" butonuna tıklayın veya Enter tuşuna basın
Görev otomatik olarak seçili kategori/projeye eklenir

Görev Tamamlama

Tamamlamak istediğiniz görevin üzerine tıklayın
Görev üzerinde çizgi belirir ve solunda ✓ işareti görünür
Rengi değişerek tamamlandığı belli olur

Önemli Görev İşaretleme

Görevin sağ tarafındaki ⭐ ikonuna tıklayın
İkon altın sarısı renginde yanar
"Önemli" filtresinde bu görevler görüntülenir

Görev Silme

Görevin sağ tarafındaki × ikonuna tıklayın
Görev anında listeden kaldırılır
Bu işlem geri alınamaz

📁 Proje Yönetimi
Yeni Proje Oluşturma

Sol panelde "Yeni Proje Ekle" butonuna tıklayın
Açılan pencereye proje adını yazın
Proje otomatik olarak listeye eklenir

Projeye Görev Ekleme

Sol panelden istediğiniz projeye tıklayın
Proje seçili haldeyken görev ekleyin
Görev otomatik olarak o projeye atanır

Proje Görüntüleme

Bir projeye tıkladığınızda sadece o projenin görevleri görünür
Üst kısımda proje adı gösterilir
Sol panelde proje yanında görev sayısı gösterilir

🔍 Filtreleme Sistemi
Bugün

Sadece bugün yapılması planlanan görevleri gösterir
Günlük odaklanma için idealdir

Önemli

Yıldızla işaretlenen görevleri filtreler
Öncelikli işleri görmek için kullanın

Planlanan

Belirli bir tarihe atanan görevleri listeler
İleri tarihli planlamalar için

Tüm Görevler

Bütün görevleri kategori ayırt etmeksizin gösterir
Genel görünüm için kullanın

🎨 Özelleştirme Rehberi
Renk Temasını Değiştirme
style.css dosyasında ana renkleri değiştirebilirsiniz:
css/* Ana renkler */
:root {
    --primary-color: #667eea;      /* Ana mavi ton */
    --secondary-color: #4c51bf;    /* Koyu mavi */
    --accent-color: #fbbf24;       /* Altın sarısı */
    --success-color: #10b981;      /* Yeşil */
    --danger-color: #ef4444;       /* Kırmızı */
    --background: #1a202c;         /* Ana arka plan */
    --surface: #2d3748;            /* Yüzey rengi */
}
Font Değiştirme
Google Fonts'tan farklı bir font kullanmak için:
html<!-- HTML head kısmına ekleyin -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
css/* CSS'de font family'yi güncelleyin */
body {
    font-family: 'Inter', sans-serif;
}
Yeni İkon Ekleme
Font Awesome ikonları eklemek için:
html<!-- Yeni ikon örneği -->
<i class="fas fa-calendar-alt"></i>
<i class="fas fa-bell"></i>
<i class="fas fa-tag"></i>
🚀 Performans Optimizasyonları
Hız İyileştirmeleri

Vanilla JavaScript: Framework yükü yok, maksimum hız
Local Storage: Sunucu istekleri yok, anında yükleme
CSS Optimizasyonu: Minimal ve optimize edilmiş stiller
Lazy Loading: Gerektiğinde yükleme

Hafıza Yönetimi

Efficient DOM Manipulation: Minimum DOM değişikliği
Event Delegation: Optimized event handling
Memory Cleanup: Unused variables cleanup

📋 Gelecek Özellikler (Roadmap)
Versiyon 2.0

 Görev Tarihleri: Başlangıç ve bitiş tarihleri
 Hatırlatıcılar: Browser notification desteği
 Alt Görevler: Görevleri alt parçalara bölme
 Görev Notları: Detaylı açıklamalar
 Drag & Drop: Görev sıralaması için sürükle-bırak

Versiyon 2.5

 Light Theme: Aydınlık tema seçeneği
 Tema Özelleştirme: Kullanıcı tanımlı renkler
 Ses Efektleri: İşlem onay sesleri
 Keyboard Shortcuts: Hızlı tuş kombinasyonları

Versiyon 3.0

 Cloud Sync: Google Drive entegrasyonu
 Export/Import: JSON, CSV formatlarında veri aktarımı
 İstatistikler: Görev tamamlama grafikleri
 Pomodoro Timer: Entegre odaklanma zamanlayıcısı
 Multi-language: Çoklu dil desteği

🤝 Katkıda Bulunma
Nasıl Katkı Sağlayabilirsiniz

Fork edin: Repository'yi kendi hesabınıza fork edin
Branch oluşturun: git checkout -b feature/yeni-ozellik
Kodlayın: Özelliğinizi ekleyin veya hata düzeltmesi yapın
Test edin: Değişikliklerinizi farklı tarayıcılarda test edin
Commit edin: git commit -am 'Yeni özellik: açıklama'
Push edin: git push origin feature/yeni-ozellik
Pull Request: GitHub'da pull request oluşturun

Katkı Kuralları

Clean Code: Okunabilir ve temiz kod yazın
Comments: Karmaşık kısımları yorumlayın
Testing: Değişikliklerinizi test edin
Documentation: README'yi güncelleyin

Bug Raporu
Hata bulduğunuzda issue oluştururken:

Tarayıcı bilgisi (Chrome, Firefox vs.)
İşletim sistemi (Windows, Mac, Linux)
Hata adımları (nasıl reproduce edilir)
Ekran görüntüsü (mümkünse)

📊 İstatistikler

Kod Satırı: ~500 lines
Dosya Boyutu: < 50KB total
Yükleme Süresi: < 1 saniye
Responsive: 100% mobile-ready
Browser Support: 95%+ modern browsers

🔐 Güvenlik
Veri Güvenliği

Local Storage: Veriler sadece kendi tarayıcınızda
No Server: Sunucu gönderimi yok
Privacy First: Kişisel verileriniz paylaşılmıyor

Best Practices

XSS koruması
Input validation
Secure storage methods

📞 İletişim ve Destek
Sorularınız için:

GitHub Issues: Teknik sorular ve öneriler
Discussions: Genel konuşmalar
Wiki: Detaylı dokumentasyon

Topluluk

⭐ Star vererek destekleyin
🍴 Fork ederek geliştirin
📢 Share ederek yayın

📄 Lisans
MIT License

Copyright (c) 2024 Modern Todo App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

🎉 Teşekkürler
Bu projeyi tercih ettiğiniz için teşekkürler!
Özel Teşekkürler

Font Awesome - Harika ikonlar için
Google Fonts - Roboto font ailesi için
MDN Web Docs - Teknik referanslar için
GitHub Community - Sürekli ilham için
