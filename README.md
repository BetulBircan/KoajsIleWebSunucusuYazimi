# KoajsIleWebSunucusuYazimi

## Proje Açıklaması:

Koa.js ile web sunucumuzu yazalım.

-koa paketini indirelim.

-index, hakkimda ve iletisim sayfaları oluşturalım.

**Not: Programın Çlaışması için npm install demenizgerekmektedr.**

-Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.

-port numarası olarak 3000'i kullanalım.

Bunun için ilk başta npm i koa ve  npm i @koa/router komutları yardımıyla koa.js ve router kısımlarını yüklemek gerektiği için bunları proje dosyama kurdum ve daha sonra da server.js dosyasını oluşturdum.

Daha sonra server.js dosyasına `const Koa = require('koa')` ve `const Router = require('@koa/router')` komutları yardımıyla koa ve router ı ekledim.

app adında `const app = new Koa()` koa nesnesini, `const router = new Router()` ile de rooter nesnesi oluşturdum.

Sonrasında bu nesnelerden faydalanarak index, hakkimizda ve iletisim sayfalarına get metodu ile request(istek) oluşturdum ve buna response(cevap) olarak da sayfalara h1 etiketi yardımıyla "xxx sayfasına hoşgeldiniz" yazan gerekli kodları yazdım. En sonunda listen metodu ile de sunucuyu çalıştırmaya başladım.

```
/*
Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
 */

//koa.js i  ekleme
const Koa = require('koa')
//app adında koadan nesne yaratma
const app = new Koa()

//restapisini oluşturmak için router ı ekleme
const Router = require('@koa/router')
//router adında router nesnesi yaratma
const router = new Router()

//Burada get isteği yapıyoruz ve response olarak ctx.body ile sayfaya hoşgeldiniz mesajı yazdırıyoruz.
router.get('/',ctx => {
    ctx.body =  '<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>'
})

//Burada index sayfasına get isteği yapıyoruz ve response olarak ctx.body ile sayfaya hoşgeldiniz mesajı yazdırıyoruz.
router.get('/index',ctx => {
    ctx.body =  '<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>'
})

//Burada hakkimizda sayfasına get isteği yapıyoruz ve response olarak ctx.body ile sayfaya hoşgeldiniz mesajı yazdırıyoruz.
router.get('/hakkimizda',ctx => {
    ctx.body =  '<h1>HAKKIMIZDA SAYFASINA HOŞGELDİNİZ</h1>'
})

//Burada iletisim sayfasına get isteği yapıyoruz ve response olarak ctx.body ile sayfaya hoşgeldiniz mesajı yazdırıyoruz.
router.get('/iletisim',ctx => {
    ctx.body =  '<h1>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h1>'
})

//router kullanımı
app.use(router.routes())

//serverın çalıştığını gösterir

const port = 3000
  app.listen(port,() => {
      console.log(`Sunucu ${port} Portu Üzerinden Çalıştırıldı.`)
  })

```

**Programın Sonucu**

-**Index ve Root(Kök) Dizini**

![koajsroot](https://user-images.githubusercontent.com/86554799/157132817-2dfb4968-6ee7-44c8-a3a7-fae618ff899e.jpg)

![koajsindex](https://user-images.githubusercontent.com/86554799/157132831-c005e7f9-adbf-4d0c-949d-24a8bec9c876.jpg)

-**Hakkımızda Sayfası**

![koajshakkimizda](https://user-images.githubusercontent.com/86554799/157132896-486f9543-6940-4abf-8c05-56532da20470.jpg)

-**İletişim Sayfası**

![koajsiletisim](https://user-images.githubusercontent.com/86554799/157132945-c6835e22-9cd8-4e57-94ad-1b6e1191311c.jpg)
