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
