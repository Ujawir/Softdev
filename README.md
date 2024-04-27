API ini digunakan untuk menyimpan dan mengelola daftar pengguna (users) dengan menggunakan metode 
HTTP GET, POST, DELETE, dan PUT.

Endpoint
GET /
Mengambil daftar pengguna yang tersimpan.

POST /
Menambahkan pengguna baru ke dalam daftar pengguna.

DELETE /:name
Menghapus pengguna dari daftar pengguna berdasarkan nama pengguna.

PUT /
Mengubah nama pengguna berdasarkan program studi.

Penggunaan
Anda dapat menggunakan endpoint-endpoint di atas untuk berinteraksi dengan daftar pengguna.

Contoh Permintaan dan Respons
Anda dapat menemukan contoh permintaan dan respons untuk setiap endpoint di bawah ini. 

GET http://127.0.0.1:4000

POST http://127.0.0.1:4000 
Content-Type: application/jso
{ "nama": "Bintang", "nrp": "3223600023" }

DELETE http://127.0.0.1:4000/Irsyad V

PUT http://127.0.0.1:4000 
Content-Type: application/json
{ "nama": "Bintang S", "nrp": "3223600023" }
