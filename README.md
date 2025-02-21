# Angular_Capacitor_App
Angular_Capacitor_App


--CAPACITOR
* Capacitor'un ana npm bağımlılıklarını yükleme komutu
- npm i @capacitor/core
- npm i -D @capacitor/cli
* Capacitor yapılandırmanızı başlatın
- npx cap init
    => What is the name of your app?
        - Bu soru uygulamanın adı
    =What should be the Package ID for your app?
        - Uygulamanın uniq bir packageID si istenir
        - bunun için com.example.app önerilen yapı
        - uniq olmazsa platformlarda yayınlayamayız.
- capacitor.config.ts dosyası oluşturulur ana uygulama dosya yapısında bu dosyanın içerisi 
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.angularcapacitor.app',
  appName: 'angular-capacitor-app',
  webDir: 'dist'
};

export default config;
** webDir buildedilen dosyaynın klasörünü yazıyor default olarak dist yazılmış ancak bu dist değil 
webDir: 'dist/angular_capacitor_app/browser', bu şekilde olmalı


* Android ve iOS projelerinizi oluşturun
- npm i @capacitor/android @capacitor/ios
- npx cap add android
- npx cap add ios

* Senkronizasyon işlemi 
- ios ve android dosyalamalar oluşturulduktan sonra uygulamayı senkron ediyoruz ana koddaki her şey android ve iosa aktarılmış olması için yapılır.
- npx cap sync


Node.js 18 ile uyumlu olan bir Capacitor sürümünü yüklemek için @capacitor/cli paketini eski bir sürüme döndürün. Örneğin, 5.x.x yerine 4.x.x sürümünü yüklemek için şu komutu çalıştırın:

npm install @capacitor/cli@4 @capacitor/core@4
2. Capacitor Platform Paketlerini Eşleştirin
Eğer iOS ve Android platformlarını kullanıyorsanız, bunları da 4.x.x sürümüne eşitlemeniz gerekir:

npm install @capacitor/ios@4 @capacitor/android@4
3. Capacitor’u Senkronize Edin
Eski sürüme geçtikten sonra proje dosyalarını senkronize edin:

npx cap sync

--projeyi ayağa kaldırdığınızda yaptığınız değişiklik anlık olarak telefonda da gözüksün istiyorsanız her seferinde npx cap copy yapmak istemiyorsanız 
 => ng serve --host 0.0.0.0 ile projeyi ayağa kaldırıyoruz daha sonra terminalde yazan 
 Network: http://192.168.0.10:4200/ alanındaki ip li alanı alıyoruz ve capacitor.config.ts içine yerleştiriyoruz 

 import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.angularcapacitor.app',
  appName: 'angular-capacitor-app',
  webDir: 'dist/angular_capacitor_app/browser',
  server: {
    url: 'http://192.168.0.10:4200/',
    cleartext: true,
  },
};

export default config;

 bu şekilde son halini alıyor. daha sonra proje açıkken yani ng serve --host 0.0.0.0 bu kodu çalıştırdıktan sonra başka bir terminal açıp
 - npx cap copy kodunu çalıştırıyoruz ve artık yaptığımız değiişklik anlık olarak telefona yansıyor.

--uygulama geliştirmesi bitip canlıya alınacak olduğu zaman server kısmı kapatılıp
 - ng build çaıştırılıp
 - npx cap copy ile tekrar kopyalıyoruz.
 eğer bu yapılmazsa canlı sistem local ipye gideceği için hata alır