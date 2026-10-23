# เว็บไซต์ประวัติและผลงานส่วนตัว (Jake's Executive Portfolio)
> สไตล์ **Clean Editorial Warmth** (ถอดแบบความภูมิฐานจาก channarong.com) ผสานอัตลักษณ์ **Tech Leader & Smart AgTech**

---

## 🌟 จุดเด่นของระบบ
1. **Zero Hosting Cost (ค่าโฮสติ้ง 0 บาทตลอดชีพ):** สร้างด้วย Jamstack (Astro 7 + Tailwind CSS) พร้อมดีพลอยขึ้น Cloudflare Pages หรือ GitHub Pages ได้ฟรี 100%
2. **โหลดเร็วระดับมิลลิวินาที (400ms Build):** ปรับแต่งอย่างสมบูรณ์แบบบน Apple Silicon M1 ไร้รอยต่อ
3. **จัดการข้อมูลง่ายดายในจุดเดียว (Single Config):** แก้ไขข้อมูลประวัติ, โปรเจกต์, ตัวเลขสถิติ, และรูปภาพได้จากไฟล์ [`src/data/profile.ts`](./src/data/profile.ts) โดยไม่ต้องแก้โค้ดหน้าเว็บ
4. **รองรับอุปกรณ์ 100%:** สวยงาม ภูมิฐาน ทั้งบน iPhone, iPad, และ Mac/PC

---

## 🚀 วิธีเปิดใช้งานและทดสอบในเครื่อง Mac M1

```bash
# 1. เข้าสู่โฟลเดอร์โปรเจกต์
cd /Users/jake/.gemini/antigravity/scratch/jake-portfolio

# 2. รันเซิร์ฟเวอร์จำลองในเครื่อง (Development Server)
npm run dev
# เปิดเบราว์เซอร์ไปที่ http://localhost:4321
```

---

## ✏️ วิธีปรับแต่งข้อความและรูปภาพของพี่แจ็ค

เพียงเปิดไฟล์ [`src/data/profile.ts`](./src/data/profile.ts) เพื่อแก้ไข:
- **`name` & `tagline`**: ชื่อ ตำแหน่งทางการ และสโลแกน
- **`bioIntro` & `aboutMe`**: บทนำชีวประวัติ วิสัยทัศน์ และปรัชญาการทำงาน
- **`milestones`**: ไทม์ไลน์ประวัติการศึกษาและการทำงาน
- **`projects`**: 4 นวัตกรรมหลัก (ระบบสลิปยาง, Shopee Automation, ระบบงบประมาณ IT, สวนยางพารา)
- **`metrics`**: สถิติผลลัพธ์เชิงตัวเลข
- **`contact`**: อีเมล, LINE ID, และช่องทางติดต่อ

---

## 🌐 วิธีนำขึ้นออนไลน์ฟรี (Deploy to Cloudflare / GitHub Pages)

### ตัวเลือกที่ 1: Cloudflare Pages (แนะนำที่สุด)
1. อัปโหลดโค้ดขึ้น GitHub Repository
2. เข้าไปที่ [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages**
3. เลือกเชื่อมกับ GitHub Repo ดังกล่าว
4. ตั้งค่า Build Command: `npm run build` และ Output directory: `dist`
5. กด **Deploy** จะได้โดเมนฟรีทันที เช่น `jake-portfolio.pages.dev`
6. เมื่อพร้อมจดโดเมนส่วนตัว (เช่น `jake.com` หรือ `channarong-style.com`) สามารถกด Custom Domains ผูกเข้าได้ฟรี

### ตัวเลือกที่ 2: GitHub Pages
1. รันคำสั่ง `npm run build`
2. ตั้งค่าใน GitHub Repository Settings > Pages ให้ชี้ไปที่ Branch หรือใช้ GitHub Actions อัตโนมัติ
