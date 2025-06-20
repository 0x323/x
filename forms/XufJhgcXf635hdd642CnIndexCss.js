const style = document.createElement('style');
style.textContent = `

html {
  scroll-behavior: smooth;
}

body {
  color: #fafafa;
  background-color: #000000;
  font-family: 'Ubuntu', sans-serif;
}

a {
  color: #18d26e;
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: color-mix(in srgb, #18d26e, transparent 25%);
  text-decoration: none;
}

h1, h2 {
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h3, h4 {
    color: white;
    font-size: 17px;
    text-shadow: 0px 0px 10px #00aaff, 0px 0px 20px #0088ff;
}
    

h5,
h6 {
  color: #ffffff;
  font-family: 'Ubuntu', sans-serif;
}

.header {
  --background-color: rgba(255, 255, 255, 0.1);
  color: #fafafa;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px 0;
  transition: all 0.5s;
  z-index: 997;
}
    
.header .logo {
  line-height: 1;
}

.header .logo img {
  max-height: 32px;
  margin-right: 8px;
}

.header .logo h1 {
  font-size: 30px;
  margin: 0;
  font-weight: 700;
  color: var(--heading-color);
}

.scrolled .header {
  box-shadow: 0px 0 18px rgba(0, 0, 0, 0.1);
}

.scrolled .header {
  --background-color: rgba(0, 0, 0, 0.8);
}

@media (min-width: 1200px) {
  .navmenu {
    padding: 0;
  }

  .navmenu ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navmenu li {
    position: relative;
  }

  .navmenu>ul>li {
    white-space: nowrap;
    padding: 15px 14px;
  }

  .navmenu>ul>li:last-child {
    padding-right: 0;
  }

  .navmenu a,
  .navmenu a:focus {
    color: #fafafa;
    font-size: 15px;
    padding: 0 2px;
    font-family: ;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    transition: 0.3s;
  }

  .navmenu>ul>li>a:before {
    content: "";
    position: absolute;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: #18d26e;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }

  .navmenu a:hover:before,
  .navmenu li:hover>a:before,
  .navmenu .active:before {
    visibility: visible;
    width: 25px;
  }

  .navmenu li:hover>a,
  .navmenu .active,
  .navmenu .active:focus {
    color: #18d26e;
  }

  .navmenu .dropdown ul {
    margin: 0;
    padding: 10px 0;
    background: #1a1a1a;
    display: block;
    position: absolute;
    visibility: hidden;
    left: 14px;
    top: 130%;
    opacity: 0;
    transition: 0.3s;
    border-radius: 4px;
    z-index: 99;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu .dropdown ul li {
    min-width: 200px;
  }

  .navmenu .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: #fafafa;
  }

  .navmenu .dropdown ul a i {
    font-size: 12px;
  }

  .navmenu .dropdown ul a:hover,
  .navmenu .dropdown ul .active:hover,
  .navmenu .dropdown ul li:hover>a {
    color: #18d26e;
  }

  .navmenu .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navmenu .dropdown .dropdown ul {
    top: 0;
    left: -90%;
    visibility: hidden;
  }

  .navmenu .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: -100%;
    visibility: visible;
  }
}

/* Mobile Navigation */
@media (max-width: 1199px) {
  .mobile-nav-toggle {
    color: #fafafa;
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .navmenu ul {
    display: none;
    list-style: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: #1a1a1a;
    border: 1px solid color-mix(in srgb, #022d66 90%, transparent);
    box-shadow: none;
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
  }

  .navmenu a,
  .navmenu a:focus {
    color: #fafafa;
    padding: 10px 20px;
    font-family: ;
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s;
    background-color: color-mix(in srgb, #18d26e, transparent 90%);
  }

  .navmenu a i:hover,
  .navmenu a:focus i:hover {
    background-color: #18d26e;
    color: #000000;
  }

  .navmenu a:hover,
  .navmenu .active,
  .navmenu .active:focus {
    color: #18d26e;
  }

  .navmenu .active i,
  .navmenu .active:focus i {
    background-color: #18d26e;
    color: #000000;
    transform: rotate(180deg);
  }

  .navmenu .dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: #1a1a1a;
    transition: all 0.5s ease-in-out;
  }

  .navmenu .dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu .dropdown>.dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .mobile-nav-active .navmenu {
    position: fixed;
    overflow: hidden;
    inset: 0;
    background: rgba(33, 37, 41, 0.8);
    transition: 0.3s;
  }

  .mobile-nav-active .navmenu>ul {
    display: block;
  }
}

.footer {
  color: #fafafa;
  background-color: #000000;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
  position: relative;
}

.footer h3 {
  font-size: 36px;
  font-weight: 700;
  position: relative;
  padding: 0;
  margin: 0 0 15px 0;
}

.footer p {
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 30px 0;
}

.footer .social-links {
  margin: 0 0 30px 0;
}

.footer .social-links a {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4d4d4d;
  color: #fdfdfd;
  line-height: 1;
  margin: 0 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(26, 121, 255, 0.5);
}

.footer .social-links a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(26, 121, 255, 0.5) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  border-radius: 50%;
  opacity: 0;
}

.footer .social-links a:hover {
  background: #00c0ff;
  color: #000;
  box-shadow: 0 0 10px #1a79ff, 0 0 20px #1a79ff;
  transform: scale(1.1);
}

.footer .social-links a:hover::before {
  transform: translate(-50%, -50%) scale(2);
  opacity: 1;
}

.footer .copyright {
  padding-top: 25px;
  border-top: 1px solid;
}

.footer .credits {
  font-size: 13px;
  padding-top: 5px;
}

#preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  overflow: hidden;
  background: #000000; /* Pastikan tetap hitam */
  transition: all 0.6s ease-out;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #1a79ff; /* Biru neon */
  border-color: #1a79ff transparent #1a79ff transparent; /* Efek animasi */
  box-shadow: 0 0 10px #4fb8f9, 0 0 20px #4fb8f9;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: animate-preloader 1.5s linear infinite;
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: -15px;
  z-index: 99999;
  background-color: #1a79ff;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: #ffffff;
  line-height: 0;
}

.scroll-top:hover {
  background-color: #4fb8f9; /* Neon blue */
  box-shadow: 0 0 15px #4fb8f9, 0 0 30px #00f2ff, 0 0 45px #4fb8f9; /* Glow effect */
  transform: scale(1.1); /* Sedikit membesar saat hover */
}

.scroll-top:hover i {
  color: #000000; /* Ubah warna ikon agar kontras */
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
  bottom: 15px;
}

@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

.page-title {
  color: #fafafa;
  background-color: #000000;
  position: relative;
}

.page-title .heading {
  padding: 160px 0 80px 0;
  border-top: 1px solid color-mix(in srgb, #fafafa, transparent 90%);
}

.page-title .heading h1 {
  font-size: 38px;
  font-weight: 700;
}

.page-title nav {
  background-color: color-mix(in srgb, #fafafa, transparent 90%);
  padding: 20px 0;
}

.page-title nav ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.page-title nav ol li+li {
  padding-left: 10px;
}

.page-title nav ol li+li::before {
  content: "/";
  display: inline-block;
  padding-right: 10px;
  color: color-mix(in srgb, #fafafa, transparent 70%);
}

section,
.section {
  color: #fafafa;
  background-color: #000000;
  padding: 60px 0;
  scroll-margin-top: 100px;
  overflow: clip;
}

@media (max-width: 1199px) {

  section,
  .section {
    scroll-margin-top: 66px;
  }
}

.section-title {
  padding-bottom: 60px;
  position: relative;
}

.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: color-mix(in srgb, #fafafa, transparent 50%);
  position: relative;
}

.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #18d26e;
  margin: 4px 10px;
}

.section-title div {
  color: #ffffff;
  margin: 0;
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: ;
}

.hero {
  width: 100%;
  min-height: 70vh; /* Perpendek tinggi vertikal */
  position: relative;
  padding: 60px 0; /* Perpendek padding atas dan bawah */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; /* Pastikan teks rata tengah */
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero .container {
  position: relative;
  z-index: 3;
}

.hero h2 {
  margin: 0;
  font-size: 48px; /* Bisa dikecilkan jika terlalu besar */
  font-weight: 700;
}

.hero p {
  margin: 10px 0 0 0;
  font-size: 22px; /* Sesuaikan agar proporsional */
}

.hero p span {
  letter-spacing: 1px;
  border-bottom: 2px solid #1a79ff;
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 20px;
  }
}

.about .content h2 {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px; /* Kurangi jarak bawah h2 */
}

.about .content ul {
  list-style: none;
  padding: 0;
  margin: 0; /* Pastikan tidak ada margin tambahan */
}

.about .content ul li {
  margin-bottom: 10px; /* Kurangi jarak antar list item */
  display: flex;
  align-items: center;
}

.about .content ul strong {
  margin-right: 10px;
}

.about .content ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #00ca09;
  line-height: 1; /* Pastikan tidak ada spasi vertikal ekstra */
}

.stats i {
  background-color: #1a1a1a;
  color: #18d26e;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  width: 54px;
  height: 54px;
  font-size: 24px;
  border-radius: 50px;
  border: 2px solid #000000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.stats .stats-item {
  background-color: #1a1a1a;
  margin-top: -27px;
  padding: 30px 30px 25px 30px;
  width: 100%;
  position: relative;
  text-align: center;
  box-shadow: 0px 2px 35px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 0;
}

.stats .stats-item span {
  font-size: 36px;
  display: block;
  font-weight: 700;
  color: color-mix(in srgb, #fafafa, transparent 20%);
}

.stats .stats-item p {
  padding: 0;
  margin: 0;
  font-family: ;
  font-size: 16px;
}

.interests .features-item {
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  padding: 20px;
  transition: 0.3s;
  border: 1px solid color-mix(in srgb, #fafafa, transparent 90%);
  position: relative;
}

.interests .features-item i {
  font-size: 32px;
  padding-right: 10px;
  line-height: 0;
}

.interests .features-item h3 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px;
}

.interests .features-item h3 a {
  color: #ffffff;
  transition: 0.3s;
}

.interests .features-item:hover {
  border-color: #18d26e;
}

.interests .features-item:hover h3 a {
  color: #18d26e;
}

.resume .resume-title {
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Garis vertikal default */
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #0671ff; /* Warna garis default biru */
  position: relative;
}

/* Warna garis vertikal berbeda untuk setiap item */
.resume .resume-item:nth-child(1) {
  border-left: 2px solid #1aff1a;  /* Default Blue */
}

.resume .resume-item:nth-child(2) {
  border-left: 2px solid #0671ff;  /* Orange */
}

.resume .resume-item:nth-child(3) {
  border-left: 2px solid #0671ff;  /* Light Blue */
}

.resume .resume-item:nth-child(4) {
  border-left: 2px solid #0671ff;  /* Green */
}

.resume .resume-item:nth-child(5) {
  border-left: 2px solid #0671ff;  /* Yellow */
}

.resume .resume-item:nth-child(6) {
  border-left: 2px solid #0671ff;  /* Red */
}

.resume .resume-item:nth-child(7) {
  border-left: 2px solid #0671ff;  /* Purple */
}

.resume .resume-item:nth-child(8) {
  border-left: 2px solid #0671ff;  /* Green */
}

.resume .resume-item:nth-child(9) {
  border-left: 2px solid #0671ff;  /* Yellow */
}

.resume .resume-item:nth-child(10) {
  border-left: 2px solid #0671ff;  /* Red */
}

.resume .resume-item:nth-child(11) {
  border-left: 2px solid #0671ff;  /* Purple */
}

.resume .resume-item:nth-child(12) {
  border-left: 2px solid #0671ff;  /* Orange */
}

.resume .resume-item:nth-child(13) {
  border-left: 2px solid #0671ff;  /* Light Blue */
}

.resume .resume-item:nth-child(14) {
  border-left: 2px solid #0671ff;  /* Green */
}

.resume .resume-item:nth-child(15) {
  border-left: 2px solid #0671ff;  /* Yellow */
}

.resume .resume-item:nth-child(15) {
  border-left: 2px solid #0671ff;  /* Red */
}

.resume .resume-item:nth-child(17) {
  border-left: 2px solid #0671ff;  /* Purple */
}
    

.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: color-mix(in srgb, #fafafa, transparent 20%);
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item ul {
  padding-left: 20px;
}

.resume .resume-item ul li {
  padding-bottom: 10px;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  left: -9px;
  top: 0;
  border: 2px solid #ccc;
}

.resume .resume-item:nth-child(1)::before {
  background: #1aff1a; /* Merah untuk item pertama */
  border: 2px solid #006505; /* Oranye untuk border item pertama */
}

.resume .resume-item:nth-child(2)::before {
  background: #000000; /* Hijau untuk item kedua */
  border: 2px solid #0671ff; /* Hijau terang untuk border item kedua */
}

.resume .resume-item:nth-child(3)::before {
  background: #000000; /* Biru untuk item ketiga */
  border: 2px solid #0671ff; /* Biru terang untuk border item ketiga */
}

.resume .resume-item:nth-child(4)::before {
  background: #000000; /* Oranye untuk item keempat */
  border: 2px solid #0671ff; /* Merah tomat untuk border item keempat */
}

.resume .resume-item:nth-child(5)::before {
  background: #000000; /* Ungu untuk item kelima */
  border: 2px solid #0671ff; /* Ungu terang untuk border item kelima */
}

.resume .resume-item:nth-child(6)::before {
  background: #000000; /* Kuning keemasan untuk item keenam */
  border: 2px solid #0671ff; /* Emas untuk border item keenam */
}

.resume .resume-item:nth-child(7)::before {
  background: #000000; /* Oranye terang untuk item ketujuh */
  border: 2px solid #0671ff; /* Merah muda terang untuk border item ketujuh */
}

.resume .resume-item:nth-child(8)::before {
  background: #000000; /* Oranye untuk item keempat */
  border: 2px solid #0671ff; /* Merah tomat untuk border item keempat */
}

.resume .resume-item:nth-child(9)::before {
  background: #000000; /* Ungu untuk item kelima */
  border: 2px solid #0671ff; /* Ungu terang untuk border item kelima */
}

.resume .resume-item:nth-child(10)::before {
  background: #000000; /* Kuning keemasan untuk item keenam */
  border: 2px solid #0671ff; /* Emas untuk border item keenam */
}

.resume .resume-item:nth-child(11)::before {
  background: #000000; /* Oranye terang untuk item ketujuh */
  border: 2px solid #0671ff; /* Merah muda terang untuk border item ketujuh */
}

.resume .resume-item:nth-child(12)::before {
  background: #000000; /* Oranye untuk item keempat */
  border: 2px solid #0671ff; /* Merah tomat untuk border item keempat */
}

.resume .resume-item:nth-child(13)::before {
  background: #000000; /* Ungu untuk item kelima */
  border: 2px solid #0671ff; /* Ungu terang untuk border item kelima */
}

.resume .resume-item:nth-child(14)::before {
  background: #000000; /* Kuning keemasan untuk item keenam */
  border: 2px solid #0671ff; /* Emas untuk border item keenam */
}

.resume .resume-item:nth-child(15)::before {
  background: #000000; /* Oranye terang untuk item ketujuh */
  border: 2px solid #0671ff; /* Merah muda terang untuk border item ketujuh */
}

.resume .resume-item:nth-child(16)::before {
  background: #000000; /* Oranye terang untuk item ketujuh */
  border: 2px solid #0671ff; /* Merah muda terang untuk border item ketujuh */
}

.resume .resume-item:nth-child(17)::before {
  background: #000000; /* Oranye terang untuk item ketujuh */
  border: 2px solid #0671ff; /* Merah muda terang untuk border item ketujuh */
}

.services .service-item {
  background-color: #1a1a1a;
  text-align: center;
  padding: 80px 20px;
  transition: all 0.3s ease-in-out;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  overflow: visible;
}

.services .service-item .icon {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #1a79ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  transform-style: preserve-3d;
  box-shadow: 0 0 10px rgba(26, 121, 255, 0.6), 0 0 20px rgba(26, 121, 255, 0.4);
  position: relative;
  z-index: 2;
}

.services .service-item .icon i {
  color: #ffffff;
  font-size: 28px;
  transition: all 0.3s ease-in-out;
}

.services .service-item .icon::before {
  position: absolute;
  content: "";
  left: -8px;
  top: -8px;
  height: 100%;
  width: 100%;
  background: radial-gradient(circle, rgba(26, 121, 255, 0.5) 0%, transparent 70%);
  border-radius: 50%;
  transition: all 0.3s ease-out;
  transform: translateZ(-5px);
  opacity: 0;
}

.services .service-item h3 {
  font-weight: 700;
  margin: 10px 0 15px 0;
  font-size: 22px;
}

.services .service-item p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .service-item {
  perspective: 800px; /* Sedikit dikurangi untuk efek 3D yang lebih halus */
}

.services .service-item:hover {
  background: linear-gradient(135deg, #121212, #1a1a1a);
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 10px 30px rgba(26, 121, 255, 0.4), 0 5px 15px rgba(120, 0, 248, 0.3);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.services .service-item:hover .icon {
  background: linear-gradient(135deg, #7800f8, #1a79ff);
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(26, 121, 255, 0.8), 0 0 30px rgba(120, 0, 248, 0.5);
  position: relative;
  z-index: 3;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.services .service-item:hover .icon i {
  color: #1aff1a;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
  transition: text-shadow 0.3s ease-out;
}

.services .service-item:hover .icon::before {
  content: "";
  position: absolute;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  background: radial-gradient(circle, rgba(26, 121, 255, 0.5), rgba(120, 0, 248, 0));
  filter: blur(15px);
  z-index: -1;
}

.services .service-item:hover h3,
.services .service-item:hover p {
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
  transition: text-shadow 0.3s ease-out, color 0.3s ease-out;
}

button {
    font-size: 1.2em;
    padding: 10px 23px;
    border-radius: 0.7em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.6);
    transition: all 0.3s ease-in-out;
    font-family: Ubuntu, sans-serif;
}

 .button-container {
    display: flex;
    justify-content: center;
    gap: 20px; /* Jarak antar tombol diperbesar */
 }

/* Efek Neon Glow */
button::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 0.9em;
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    z-index: -1;
    filter: blur(0);
    transition: filter 0.4s ease, opacity 0.4s ease;
    opacity: 1;
}

button:hover::before {
    filter: blur(1.2em);
    opacity: 1;
}

button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

button:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

button:active::before {
    filter: blur(0.2em);
}

.backed-by-slider {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  .backed-by-track {
    display: flex;
    width: max-content;
    animation: scroll-left 40s linear infinite;
  }

  .backed-by-slider.reverse .backed-by-track {
    animation: scroll-right 40s linear infinite;
  }

  .backed-by-slider:hover .backed-by-track {
    animation-play-state: paused;
  }

  .backed-by-track img {
    height: 80px;
    margin: 0 40px;
    opacity: 0.5;
    filter: grayscale(100%);
    transition: opacity 0.3s, filter 0.3s;
  }

  .backed-by-track img:hover {
    opacity: 1;
    filter: none;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes scroll-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

.team .team-member {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background-color: #111111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: 0.3s;
  margin-bottom: 30px;
  flex-wrap: nowrap;
  min-height: 260px;
}

.team .team-member:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.team .team-member .member-img {
  flex: 0 0 200px;
  overflow: hidden;
}

.team .team-member .member-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: block;
}

.team .team-member .member-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  text-align: left;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0 8px 8px 0;
}

.team .team-member .member-info h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #ffffff;
}

.team .team-member .member-info span {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  display: block;
  margin-bottom: 15px;
}

.team .team-member .member-info p {
  font-size: 0.9rem;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 767px) {
  .team .team-member {
    flex-direction: column;
  }

  .team .team-member .member-img img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
  }

  .team .team-member .member-info {
    text-align: center;
    border-radius: 0 0 8px 8px;
  }
}
`;
document.head.appendChild(style);
