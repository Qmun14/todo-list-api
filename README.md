# Jawaban Technical Test Skenario: API Sederhana untuk Daftar Tugas

## _Build using node v18.16.0, express.js and Typescript_

## Fitur :

- Membuat tugas baru
- Mengambil daftar semua tugas.
- Mengambil detail tugas berdasarkan ID.
- Mengubah tugas berdasarkan ID.
- Menghapus tugas berdasarkan ID.

## Tech

### aplikasi ini menggunakan:

- [node.js] - sebagai development environment

  - - tutorial cara installasi node.js nya :
      - https://www.youtube.com/watch?v=VfN1_pEdQAA&t=633s

- [Typescript] - sebagai bahasa pemrograman
  - - tutorial cara installasi typescript nya :
      - https://www.youtube.com/watch?v=gkPrpGexmho&t=110s
- [express.js] - sebagai framework pengembangan web-service nya
  - - link dokoumentasi resmi nya :
      - https://expressjs.com/

## Installation

requires [Node.js](https://nodejs.org/) v18.16.0 to run.

- copy / clone github repository
- lalu buka dalam text editor anda
- install semua dependencies yang dibutuhkan dengan menjalankan perintah dibawah dalam terminal CLI anda:

```
npm install
```

Pastikan Anda telah menginstal Node.js dan TypeScript sebelum menjalankan program ini, lalu masuk kedalam folder project-nya:

```sh
cd todo-list-api
```

lalu jalankan di script lewat terminal anda :

```
npm run start
```

## Server berjalan pada port : 3000

```
Method GET: http://localhost:3000/tasks      | - endpoint untuk melihat data semua tugas
Method GET: http://localhost:3000/tasks/:id  | - endpoint untuk melihat data tugas by Id
Method POST: http://localhost:3000/tasks     | - endpoint untuk membuat tugas baru
Method PATCH: http://localhost:3000/tasks/:id  | - endpoint untuk mengupdate data tugas by Id
Method DELETE: http://localhost:3000/tasks/:id  | - endpoint untuk menghapus data tugas by Id
```

### API ini menggunakan array ` tasks` untuk menyimpan daftar tugas sementara. Ketika API dijalankan, kita dapat menggunakan aplikasi seperti Postman, Insomnia atau Curl untuk mengakses endpoint-endpoint tersebut.

`- Harap diperhatikan bahwa data yang ada di array tasks tersebut hanya sementara dan apabila server direstart ulang maka data otomatis hilang.`

## License

MIT

**Free Software, Cool Yeah!**
