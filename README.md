Angular Capacitor App

Bu proje, Angular ile geliştirilen bir web uygulamasının Capacitor kullanılarak nasıl mobil uygulamaya dönüştürülebileceğini göstermektedir. Uygulama AdminLTE teması üzerine inşa edilmiştir ve modern bir yönetim paneli arayüzü sunmaktadır.

🚀 Angular ve Capacitor ile Mobil Uygulama Geliştirme

📌 Capacitor Nedir?

Capacitor, Ionic ekibi tarafından geliştirilen, modern web teknolojilerini kullanarak mobil, web ve masaüstü uygulamaları oluşturmayı sağlayan bir çapraz platform çalışma zamanıdır. Cordova'nın modern alternatifi olarak geliştirilmiştir ve native özelliklere erişim için API desteği sunar.

📥 Capacitor Kurulumu ve Entegrasyonu

Capacitor'u Angular projenize entegre etmek için aşağıdaki adımları takip edebilirsiniz:

1️⃣ Capacitor'u Projeye Dahil Edin

npm install @capacitor/core @capacitor/cli

2️⃣ Capacitor Konfigürasyonunu Başlatın

npx cap init

Bu komut çalıştırıldığında, sizden proje adı ve package ID bilgileri istenecektir. Örnek bir yapılandırma:

? App name: Angular Capacitor App
? App Package ID: com.example.app

3️⃣ Mobil Platformları Ekleyin

Capacitor, Android ve iOS platformlarını destekler. Aşağıdaki komutları kullanarak ilgili platformları ekleyebilirsiniz:

npx cap add android
npx cap add ios

📌 Not: iOS platformunu eklemek için bir Mac bilgisayara ve Xcode’a ihtiyacınız vardır.

4️⃣ Angular Projesini Mobil Platforma Aktarma

npm run build
npx cap copy
npx cap sync

Bu komutlar, Angular uygulamasını www/ dizinine derler ve Capacitor ile mobil platforma aktarır.

📦 APK ve iOS IPA Dosyası Nasıl Oluşturulur?

📌 Android İçin APK Oluşturma

Android projesini açın:

npx cap open android

Android Studio açıldığında, Build > Build Bundle(s) / APK(s) > Build APK(s) seçeneğini kullanarak APK oluşturabilirsiniz.

Oluşturulan APK dosyası, android/app/build/outputs/apk/debug/app-debug.apk dizininde bulunur.

📌 iOS İçin IPA Dosyası Oluşturma

Xcode’u açarak iOS projenizi çalıştırın:

npx cap open ios

Product > Archive seçeneğini kullanarak IPA dosyanızı oluşturabilirsiniz.

📸 Ekran Görüntüleri

 

📌 Not: Ekran görüntülerinin olduğu screenshots klasörünü oluşturun ve ilgili görselleri buraya ekleyin.

📜 Lisans

MIT Lisansı altında sunulmaktadır.