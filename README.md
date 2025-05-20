# 🚀 GitHub Stats Viewer
<div align="center">
Show Image
Show Image
Show Image
Show Image

Aplikasi web yang menampilkan statistik GitHub dengan tampilan glassmorphism yang memukau

Demo Live | Report Bug | Request Feature

</div>

## 📋 Daftar Isi

Tentang Proyek
Fitur
Screenshot
Teknologi yang Digunakan
Instalasi
Penggunaan
Pengembangan
Kontribusi
Lisensi
Kontak

## 🎯 Tentang Proyek

GitHub Stats Viewer adalah aplikasi web yang menampilkan statistik GitHub secara visual dengan desain glassmorphism yang modern. Aplikasi ini memungkinkan pengguna untuk melihat berbagai metrik GitHub seperti commit history, bahasa pemrograman yang digunakan, activity graph, dan banyak lagi hanya dengan memasukkan username GitHub.

## ✨ Mengapa Proyek Ini?

Visual yang Memukau: Desain glassmorphism dengan tema yang selaras dengan GitHub
Responsif: Tampilan yang optimal di semua perangkat
Mudah Digunakan: Interface yang intuitif dan user-friendly
Informatif: Menampilkan statistik lengkap dalam satu halaman

## 🌟 Fitur

📊 Statistik Lengkap
GitHub Stats: Total commits, stars, PRs, dan issues
Top Languages: Bahasa pemrograman yang paling sering digunakan
Activity Graph: Grafik aktivitas kontribusi harian
Profile Summary: Ringkasan profil lengkap
Repos per Language: Distribusi repository berdasarkan bahasa
Most Commit Language: Bahasa dengan commit terbanyak
Profile Stats: Statistik profil detail
Productive Time: Waktu produktif kontribusi
GitHub Trophies: Pencapaian dan trophy GitHub

## 🎨 Desain & UI/UX

Glassmorphism Effect: Efek kaca transparan yang modern
Dark Theme: Tema gelap yang nyaman di mata
Responsive Design: Layout yang adaptif untuk semua ukuran layar
Smooth Animations: Animasi yang halus dan menarik
Interactive Elements: Hover effects dan micro-interactions

## 🔧 Teknikal

TypeScript: Type safety dan development experience yang lebih baik
Next.js 13+: Framework React terbaru dengan App Router
Tailwind CSS: Utility-first CSS framework
Optimized Images: Lazy loading dan optimasi gambar
SEO Friendly: Meta tags dan struktur yang SEO-friendly

## 📸 Screenshot
Desktop View
Show Image
belum upload sabar...
Mobile View
belum upload sabar...
Features Preview
GitHub Stats	Top Languages	Activity Graph
Show Image
Show Image
Show Image

## 🛠️ Teknologi yang Digunakan

Framework: Next.js 13+
Language: TypeScript
Styling: Tailwind CSS
Icons: Lucide React
API: GitHub Stats APIs
Deployment: Vercel
🚀 Instalasi
Prerequisites
Pastikan Anda telah menginstall:

Node.js (v18.17 atau lebih tinggi)
npm atau yarn atau pnpm
Setup Lokal
Clone repository
bash
git clone https://github.com/yourusername/github-stats-viewer.git
cd github-stats-viewer
Install dependencies
bash
npm install
# atau
yarn install
# atau
pnpm install
Setup environment variables (optional)
bash
cp .env.example .env.local
Edit .env.local jika diperlukan:
env
NEXT_PUBLIC_APP_URL=http://localhost:3000
Jalankan development server
bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
Buka browser Navigasi ke http://localhost:3000 untuk melihat aplikasi.
📱 Penggunaan
Langkah-langkah:
Buka aplikasi di browser
Masukkan username GitHub di kolom input
Klik tombol "Tampilkan Stats" atau tekan Enter
Lihat statistik yang ditampilkan secara otomatis
Scroll down untuk melihat semua jenis statistik
Tips:
Gunakan username GitHub yang valid untuk hasil terbaik
Statistik akan dimuat secara lazy loading untuk performa optimal
Klik link GitHub untuk mengunjungi profil asli
🔨 Pengembangan
Structure Proyek
github-stats-viewer/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── GitHubStatsViewer.tsx
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
Available Scripts
bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler

# Deployment
npm run deploy       # Deploy to Vercel
Customization
Mengubah Tema Warna
Edit file components/GitHubStatsViewer.tsx:

typescript
// Ubah gradient background
className="min-h-screen bg-gradient-to-br from-your-color via-your-color to-your-color"

// Ubah warna button
className="bg-gradient-to-r from-your-color to-your-color"
Menambah Statistik Baru
Tambahkan objek baru ke array statsCards:

typescript
{
  title: 'New Stat',
  src: `https://new-api-url.com/api?username=${displayUsername}&theme=github_dark`,
}
🤝 Kontribusi
Kontribusi selalu diterima! Berikut cara berkontribusi:

Fork repository ini
Create branch fitur (git checkout -b feature/amazing-feature)
Commit perubahan (git commit -m 'Add some amazing feature')
Push ke branch (git push origin feature/amazing-feature)
Open Pull Request
Guidelines Kontribusi
Pastikan kode mengikuti style guide yang ada
Tambahkan tests untuk fitur baru
Update dokumentasi jika diperlukan
Gunakan conventional commits
📄 Lisensi
Didistribusikan di bawah Lisensi MIT. Lihat LICENSE untuk informasi lebih lanjut.

📞 Kontak
Your Name - @yourtwitter - your.email@example.com

Project Link: https://github.com/yourusername/github-stats-viewer

🙏 Terima Kasih
GitHub Readme Stats
GitHub Profile Summary Cards
GitHub Activity Graph
GitHub Profile Trophy
Lucide Icons
Tailwind CSS
<div align="center">
⭐ Jika proyek ini membantu, jangan lupa kasih star! ⭐

Show Image

</div>
