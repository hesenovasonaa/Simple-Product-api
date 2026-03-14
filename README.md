#  Express.js Məhsul İdarəetmə Sistemi (API)

Bu layihə, **Node.js** mühitində **Express.js framework-ü** istifadə edilərək hazırlanmış, yüngül və sürətli bir RESTful API nümunəsidir.


##  Layihə Haqqında Ümumi Məlumat

Bu API, real vaxt rejimində məhsul (inventory) məlumatlarını idarə etmək üçün nəzərdə tutulub. Kod strukturunda tətbiq edilən **Pagination (Səhifələmə)** məntiqi sayəsində, böyük məlumat kütlələri arasından yalnız lazım olan hissəni çəkmək mümkündür.



##  Əsas Üstünlüklər

* **Dinamik Pagination:** `count` və `offset` parametrləri ilə məlumatın idarə olunması.
* **Parametrik Routing:** Məhsulların unikal ID-ləri vasitəsilə sürətli axtarış.
* **Səmərəli Yaddaş İdarəetməsi:** Məlumatlar JSON formatında massiv daxilində saxlanılır.


##  Texnologiya Steki

Layihənin qurulmasında aşağıdakı texnologiyalardan istifadə olunub:

* **Node.js**
* **Express.js** 
* **JavaScript**



##  API Endpoint-ləri

### 1. Məhsul Siyahısı
`GET /products`
> Bütün məhsulları pagination ilə gətirir.
> **Nümunə:** `http://localhost:3000/products?count=5&offset=2`

### 2. Məhsul Detalı
`GET /products/:id`
> ID-yə görə tək bir məhsul haqqında məlumat qaytarır.
> **Nümunə:** `http://localhost:3000/products/3`



##  Məlumat Strukturu

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 1500,
  "quantity": 5
}
