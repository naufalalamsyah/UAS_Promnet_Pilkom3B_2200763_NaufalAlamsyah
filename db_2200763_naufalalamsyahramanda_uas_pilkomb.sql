-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Jan 2024 pada 08.35
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2200763_naufalalamsyahramanda_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjamanbuku_naufal`
--

CREATE TABLE `peminjamanbuku_naufal` (
  `id` int(11) NOT NULL,
  `judul_buku` varchar(100) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `nama_peminjam` varchar(100) NOT NULL,
  `alamat_peminjam` varchar(100) NOT NULL,
  `noHp_peminjam` varchar(100) NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_pengembalian` date NOT NULL,
  `lama_pinjam` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `peminjamanbuku_naufal`
--

INSERT INTO `peminjamanbuku_naufal` (`id`, `judul_buku`, `jumlah`, `nama_peminjam`, `alamat_peminjam`, `noHp_peminjam`, `tanggal_pinjam`, `tanggal_pengembalian`, `lama_pinjam`) VALUES
(1, 'Buku Kalkulus', 1, 'Naufal Alamsyah Ramanda', 'Jl.Geger Arum No.115', '089653225730', '2023-12-10', '2023-12-13', '3 Hari'),
(2, 'Buku Statistika', 2, 'Hana Aurora', 'Jl.Geger Kalong Girang No.49', '089456895236', '2023-12-14', '2023-12-18', '4 Hari'),
(3, 'Buku Science', 3, 'Michael Alex', 'Setiabudhi', '085659877954', '2023-12-18', '2023-12-20', '2 Hari'),
(4, 'Buku Teknik Informatika', 1, 'Kirana Amanda', 'Dago', '082659898756', '2023-12-18', '2023-12-25', '7 Hari'),
(5, 'Buku Algoritma dan Pemrograman', 3, 'Cahya Mutaqin', 'Majalaya', '081532688795', '2023-12-24', '2023-12-30', '6 Hari');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `peminjamanbuku_naufal`
--
ALTER TABLE `peminjamanbuku_naufal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `peminjamanbuku_naufal`
--
ALTER TABLE `peminjamanbuku_naufal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
