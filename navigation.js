// ============================================
//  TechBlog – SPA Navigation
// ============================================

// ── Konten Beranda ───────────────────────────
const berandaHTML = `
  <div class="page-beranda">
    <div class="hero-section">
      <div class="hero-badge">Selamat Datang</div>
      <h2>Tech<span>Blog</span></h2>
      <p class="hero-sub">Eksplorasi Dunia Teknologi &amp; Pemrograman</p>
      <p class="hero-welcome">
        Selamat datang di <strong>TechBlog</strong> — Simak dan cari tahu tentang
        dunia teknologi dan pemrograman. Temukan artikel, tutorial, dan wawasan
        terbaru untuk para developer Indonesia.
      </p>
      <div class="hero-buttons">
        <button class="btn-hero" onclick="navigateTo('artikel')">Baca Artikel</button>
        <button class="btn-hero-outline" onclick="navigateTo('tentang')">Tentang Penulis &rarr;</button>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><span class="hero-stat-num">1</span><span class="hero-stat-label">Artikel</span></div>
        <div class="hero-stat"><span class="hero-stat-num">1,2K</span><span class="hero-stat-label">Pembaca</span></div>
        <div class="hero-stat"><span class="hero-stat-num">6 bln</span><span class="hero-stat-label">Pengalaman</span></div>
      </div>
    </div>

    <p class="section-title">Kategori Konten</p>
    <div class="beranda-features">
      <div class="feature-card fc-blue">
        <div class="feature-icon-wrap">&lt;/&gt;</div>
        <h3>Pemrograman</h3>
        <p>Pelajari berbagai bahasa pemrograman dan konsep dasar hingga lanjut dengan panduan praktis.</p>
      </div>
      <div class="feature-card fc-cyan">
        <div class="feature-icon-wrap">{ }</div>
        <h3>Web Development</h3>
        <p>Bangun website modern yang responsif dengan HTML, CSS, JavaScript dan framework terkini.</p>
      </div>
      <div class="feature-card fc-purple">
        <div class="feature-icon-wrap">&#9670;</div>
        <h3>Tips &amp; Trik</h3>
        <p>Kumpulan tips produktivitas dan trik berguna untuk developer dalam pekerjaan sehari-hari.</p>
      </div>
    </div>

    <div class="beranda-latest">
      <p class="section-title">Artikel Terbaru</p>
      <div class="article-teaser" onclick="navigateTo('artikel')">
        <img src="images/hero.jpg" alt="Flexbox" class="teaser-img" />
        <div>
          <span class="teaser-badge">Pemrograman</span>
          <p class="teaser-title">Mengenal Flexbox: Cara Modern Menyusun Layout Web</p>
          <span class="teaser-meta">19 Juli 2026 &nbsp;&middot;&nbsp; 8 menit baca &nbsp;&middot;&nbsp; 1.2k tayangan</span>
          <a class="teaser-read" onclick="navigateTo('artikel'); return false;" href="#">Baca selengkapnya &rarr;</a>
        </div>
      </div>
    </div>
  </div>
`;

// ── Konten Article (bagian dalam <article>) ──
const articleHTML = `
  <div class="article-header">
    <span class="category-badge">Pemrograman</span>
    <h2>Mengenal Flexbox: Cara Modern Menyusun Layout Web</h2>
    <div class="article-meta">
      <span>19 Juli 2026</span>
      <span>8 menit baca</span>
      <span>1.2k tayangan</span>
    </div>
  </div>

  <img src="images/hero.jpg" alt="Ilustrasi CSS Flexbox Layout" class="article-img" />

  <p>CSS Flexbox (Flexible Box Layout) adalah metode layout satu dimensi yang
    memudahkan kita dalam mendistribusikan ruang dan menyelaraskan item di
    dalam sebuah container. Flexbox sangat berguna untuk membangun layout
    yang responsif tanpa perlu menggunakan <code>float</code> atau
    <code>position</code> yang rumit.</p>

  <h3>Kenapa Flexbox Lebih Baik dari Float?</h3>
  <p>Sebelum Flexbox hadir, pengembang web mengandalkan teknik <code>float</code>
    untuk membuat layout multi-kolom. Teknik ini memiliki banyak kekurangan,
    seperti perlunya clearfix hack dan sulitnya membuat elemen rata secara
    vertikal. Flexbox hadir sebagai solusi yang lebih bersih dan intuitif.</p>

  <div class="highlight-box">
    <h4>Keunggulan Flexbox</h4>
    <ul>
      <li>Mudah membuat layout responsif</li>
      <li>Menyelaraskan item secara horizontal dan vertikal dengan mudah</li>
      <li>Distribusi ruang otomatis di antara item</li>
      <li>Urutan tampilan bisa diubah tanpa mengubah HTML</li>
      <li>Tidak memerlukan clearfix hack</li>
    </ul>
  </div>

  <h3>Konsep Dasar Flexbox</h3>
  <p>Flexbox bekerja dengan dua komponen utama: <strong>flex container</strong>
    dan <strong>flex item</strong>. Container adalah elemen pembungkus yang
    diberi properti <code>display: flex</code>, sedangkan item adalah
    elemen-elemen anak di dalamnya.</p>

  <div class="code-block">
    <pre><code>/* Mengaktifkan Flexbox */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}</code></pre>
  </div>

  <h3>Properti Penting Flex Container</h3>
  <p>Ada beberapa properti kunci yang perlu dipahami ketika bekerja dengan flex container:</p>
  <ul>
    <li><strong>flex-direction</strong> — menentukan arah utama item (row atau column).</li>
    <li><strong>justify-content</strong> — mengatur perataan item pada sumbu utama.</li>
    <li><strong>align-items</strong> — mengatur perataan item pada sumbu silang.</li>
    <li><strong>flex-wrap</strong> — mengizinkan item untuk berpindah ke baris baru jika tidak cukup ruang.</li>
    <li><strong>gap</strong> — menentukan jarak antar item.</li>
  </ul>

  <h3>Contoh Implementasi Nyata</h3>
  <p>Berikut adalah contoh sederhana membuat kartu berita yang tersusun secara responsif menggunakan Flexbox:</p>

  <div class="code-block">
    <pre><code>.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 280px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
}</code></pre>
  </div>

  <p>Dengan <code>flex: 1 1 280px</code>, setiap kartu akan mencoba memiliki
    lebar minimal 280px, namun bisa mengembang untuk mengisi ruang yang tersedia.
    Ini membuat grid otomatis menjadi responsif.</p>

  <div class="article-tags">
    <span class="tag">CSS</span>
    <span class="tag">Flexbox</span>
    <span class="tag">Web Development</span>
    <span class="tag">Frontend</span>
  </div>
`;

// ── Konten Aside tambahan ────────────────────
const asideRelatedHTML = `
  <h3>Artikel Terkait</h3>
  <ul class="related-list">
    <li>
      <a href="https://share.google/gzNDNBM66j9lMoDJC" target="_blank" rel="noopener noreferrer">Kekuatan Flexbox dalam Desain Web Responsif Modern</a>
      <span>15 Jul 2026</span>
    </li>
    <li>
      <a href="https://share.google/0urf5we91RoWnfSPg" target="_blank" rel="noopener noreferrer">Belajar CSS Grid dan Flexbox: Dasar Wajib Frontend Developer Modern</a>
      <span>10 Jul 2026</span>
    </li>
    <li>
      <a href="https://share.google/A0gKlgqE2XFLp0LrY" target="_blank" rel="noopener noreferrer">Belajar CSS Grid dan Flexbox: Dasar Wajib Frontend Developer Modern</a>
      <span>3 Jul 2026</span>
    </li>
    <li>
      <a href="https://share.google/5duFYQ8n9NCBFYeFA" target="_blank" rel="noopener noreferrer">Panduan Pemilihan CSS Grid dan Flexbox</a>
      <span>28 Jun 2026</span>
    </li>
  </ul>
`;

const asideTopicsHTML = `
  <h3>Topik Populer</h3>
  <div class="tag-cloud">
    <a href="#" class="topic-tag">JavaScript</a>
    <a href="#" class="topic-tag">React</a>
    <a href="#" class="topic-tag">CSS</a>
    <a href="#" class="topic-tag">Node.js</a>
    <a href="#" class="topic-tag">TypeScript</a>
    <a href="#" class="topic-tag">Git</a>
    <a href="#" class="topic-tag">API</a>
    <a href="#" class="topic-tag">UI/UX</a>
  </div>
`;

// ── Konten Tentang ───────────────────────────
const tentangHTML = `
  <div class="page-tentang">
    <div class="tentang-hero">
      <img src="images/profile.jpg" alt="Zalfa Labibatul Marzuqoh" class="tentang-photo" />
      <div class="tentang-hero-info">
        <h2>Zalfa Labibatul Marzuqoh</h2>
        <p class="tentang-role">Frontend Developer &amp; Tech Writer</p>
        <p class="tentang-location">Tegal, Jawa Tengah, Indonesia</p>
        <a href="https://www.dicoding.com/users/zalfa_labibatul_m/academies"
           target="_blank" rel="noopener noreferrer"
           class="btn-dicoding tentang-btn">Lihat Profil Dicoding</a>
      </div>
    </div>

    <div class="tentang-body">

      <div class="tentang-section">
        <h3>Tentang Saya</h3>
        <p>Halo! Saya <strong>Zalfa Labibatul Marzuqoh</strong>, seorang mahasiswa yang sedang mendalami dunia <em>web development</em> dengan fokus pada frontend. Saya memiliki ketertarikan besar terhadap teknologi, desain antarmuka, dan berbagi pengetahuan kepada komunitas developer Indonesia.</p>
        <p>Saat ini saya aktif belajar melalui platform Dicoding untuk meningkatkan kompetensi di bidang pemrograman web, mulai dari HTML &amp; CSS dasar hingga JavaScript dan framework modern.</p>
      </div>

      <div class="tentang-section">
        <h3>Pendidikan</h3>
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-content">
              <h4>Universitas Terbuka</h4>
              <p class="timeline-sub">Program Studi Sistem Informasi</p>
              <span class="timeline-date">2024 &ndash; Sekarang</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tentang-section">
        <h3>Keahlian Teknis</h3>
        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-header"><span class="skill-name">HTML5</span><span class="skill-pct">85%</span></div>
            <div class="skill-bar"><div class="skill-fill s1" style="width:85%"></div></div>
          </div>
          <div class="skill-item">
            <div class="skill-header"><span class="skill-name">CSS3 &amp; Flexbox</span><span class="skill-pct">80%</span></div>
            <div class="skill-bar"><div class="skill-fill s2" style="width:80%"></div></div>
          </div>
          <div class="skill-item">
            <div class="skill-header"><span class="skill-name">JavaScript</span><span class="skill-pct">65%</span></div>
            <div class="skill-bar"><div class="skill-fill s3" style="width:65%"></div></div>
          </div>
          <div class="skill-item">
            <div class="skill-header"><span class="skill-name">Responsive Design</span><span class="skill-pct">75%</span></div>
            <div class="skill-bar"><div class="skill-fill s4" style="width:75%"></div></div>
          </div>
          <div class="skill-item">
            <div class="skill-header"><span class="skill-name">Git &amp; GitHub</span><span class="skill-pct">60%</span></div>
            <div class="skill-bar"><div class="skill-fill s5" style="width:60%"></div></div>
          </div>
          <div class="skill-item">
            <div class="skill-header"><span class="skill-name">UI/UX Basics</span><span class="skill-pct">55%</span></div>
            <div class="skill-bar"><div class="skill-fill s6" style="width:55%"></div></div>
          </div>
        </div>
      </div>

      <div class="tentang-section">
        <h3>Sertifikasi &amp; Pelatihan</h3>
        <div class="cert-list">
          <div class="cert-item"><div><h4>Belajar Dasar Pemrograman Web</h4><p>Dicoding Indonesia &middot; 2026</p></div></div>
          <div class="cert-item"><div><h4>Belajar Membuat Front-End Web untuk Pemula</h4><p>Dicoding Indonesia &middot; 2026</p></div></div>
          <div class="cert-item"><div><h4>Belajar Dasar Pemrograman JavaScript</h4><p>Dicoding Indonesia &middot; 2026</p></div></div>
        </div>
      </div>

      <div class="tentang-section">
        <h3>Pengalaman</h3>
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-content">
              <h4>Tech Writer &ndash; TechBlog</h4>
              <p class="timeline-sub">Menulis artikel seputar CSS, Flexbox, dan web development untuk komunitas developer Indonesia.</p>
              <span class="timeline-date">Jan 2026 &ndash; Sekarang</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tentang-section">
        <h3>Kontak</h3>
        <div class="kontak-list">
          <div class="kontak-item"><span class="kontak-label">Email</span><span>zalfalabibatulmarzuqoh@gmail.com</span></div>
          <div class="kontak-item"><span class="kontak-label">Lokasi</span><span>Tegal, Jawa Tengah, Indonesia</span></div>
          <div class="kontak-item"><span class="kontak-label">Dicoding</span>
            <a href="https://www.dicoding.com/users/zalfa_labibatul_m/academies" target="_blank" rel="noopener noreferrer">
              dicoding.com/users/zalfa_labibatul_m/academies
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
`;

// ── Router ───────────────────────────────────
function navigateTo(page) {
  const views   = document.querySelectorAll('.page-view');
  const navLinks = document.querySelectorAll('nav ul li a[data-page]');

  // sembunyikan semua view
  views.forEach(v => v.style.display = 'none');

  // tampilkan view yang sesuai
  const target = document.getElementById('view-' + page);
  if (target) target.style.display = 'block';

  // isi konten sesuai halaman
  if (page === 'beranda') {
    document.getElementById('view-beranda').innerHTML = berandaHTML;
  } else if (page === 'artikel') {
    document.getElementById('article-content').innerHTML = articleHTML;
    document.getElementById('aside-related').innerHTML   = asideRelatedHTML;
    document.getElementById('aside-topics').innerHTML    = asideTopicsHTML;
  } else if (page === 'tentang') {
    document.getElementById('view-tentang').innerHTML = tentangHTML;
  }

  // update active nav
  navLinks.forEach(link => {
    link.classList.toggle('nav-active', link.dataset.page === page);
  });

  history.pushState({ page }, '', '#' + page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '') || 'beranda';
  navigateTo(hash);
});

window.addEventListener('popstate', (e) => {
  const page = (e.state && e.state.page) ? e.state.page : 'beranda';
  navigateTo(page);
});
