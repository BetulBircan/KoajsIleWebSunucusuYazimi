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