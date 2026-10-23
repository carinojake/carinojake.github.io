export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  icon: string;
}

export interface Milestone {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights?: string[];
  category: 'Justice' | 'GovTech' | 'Healthcare' | 'AgTech' | 'Global' | 'Education';
  badge?: string;
  competencyPillars?: { title: string; desc: string; icon: string }[];
}

export interface Credential {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  docNumber?: string;
  signatories: string[];
  description: string;
  skillsAcquired: string[];
  badgeColor: string;
  category: 'Government' | 'International' | 'Software Engineering';
}

export interface Article {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export const profileData = {
  name: {
    th: "นิติพัฒน์ คุ้มวงษ์",
    nickname: "แจ็ค (Jake)",
    en: "Nitipat Khumwong",
    title: "Independent IT Specialist & AI Automation Architect",
    subtitle: "เจ้าของสวนยางพารา • อดีตนักวิชาการคอมพิวเตอร์ กองทุนผู้สูงอายุ (พม.) & สภากาชาดไทย",
    candidacyNote: "มุ่งมั่นนำศักยภาพเทคโนโลยีดิจิทัลและ AI ร่วมขับเคลื่อนภารกิจ 'เปลี่ยนภาระให้เป็นพลัง' เพื่อสังคมไทย"
  },

  tagline: "ลุย • ระบบ • ล้ำ — สถาปัตยกรรมเทคโนโลยีเพื่อการบริการสาธารณะและนวัตกรรมเกษตรยุคใหม่",

  bioIntro: `นักพัฒนาระบบและสถาปนิกสารสนเทศที่มีประสบการณ์กว่า 12 ปีในการออกแบบและบริหารจัดการระบบฐานข้อมูลภาครัฐ 
  (กระทรวงยุติธรรม, กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์, และสภากาชาดไทย) ผสานประสบการณ์จริงในฐานะเจ้าของสวนยางพารา 
  สู่นักสร้างสรรค์ระบบอัตโนมัติ (AI Automation) แม้ต้องเผชิญกับสภาวะโรคหลอดเลือดสมอง (Stroke) ตลอด 4 ปีที่ผ่านมา 
  แต่ด้วยวินัยและความไม่ยอมแพ้ ได้นำเทคโนโลยี AI และ Automation มาเพิ่มพลังการทำงาน พิสูจน์ให้เห็นว่าความบกพร่องทางกาย 
  ไม่อาจขวางกั้นการสร้างสรรค์คุณค่าระดับประเทศ`,

  aboutMe: {
    vision: "มุ่งมั่นขับเคลื่อนแนวคิด 'การเปลี่ยนภาระให้เป็นพลัง และยกระดับสังคมสงเคราะห์สู่สังคมแห่งการพัฒนา' โดยนำ AI และเทคโนโลยีดิจิทัลมาขจัดขวดแก้วการทำงานภาครัฐ ลดการใช้กระดาษ และสร้างระบบสวัสดิการที่ประชาชนเข้าถึงได้อย่างรวดเร็ว โปร่งใส และเท่าเทียม",
    philosophy: "ปรัชญา 'ลุย ระบบ ล้ำ': 1. ลุย (ลงมือแก้ปัญหาหน้างานจริงจากปัญหาแท้จริง) • 2. ระบบ (สถาปัตยกรรมข้อมูลที่รัดกุม คุ้มค่างบประมาณ ปลอดภัย ไร้รอยรั่วไหล) • 3. ล้ำ (ประยุกต์ใช้ AI และระบบอัตโนมัติเพื่อปลดล็อกศักยภาพมนุษย์)",
    resilienceQuote: "“ไม่ว่างานจะท้าทายหรือชีวิตจะมีโจทย์ยากแค่ไหน การค่อยๆ ปรับระบบและก้าวไปข้างหน้าทีละสเต็ป จะพาเราไปถึงเป้าหมายได้เสมอ”"
  },

  contact: {
    phone: "081-926-5159",
    email: "lusir999@gmail.com",
    emailAlt: "jake-san@hotmail.co.th",
    location: "เขตบางเขน กรุงเทพมหานคร 10220",
    workMode: "Work From Home / ประสานงานออนไลน์ และเข้าร่วมประชุม ณ รัฐสภา / มูลนิธิศิลปะเพื่อมวลมนุษย์",
    github: "https://github.com",
    line: "0819265159"
  },

  education: {
    degree: "วิทยาศาสตรบัณฑิต (วท.บ.) วิทยาการคอมพิวเตอร์",
    institution: "มหาวิทยาลัยราชภัฏจันทรเกษม",
    gradYear: "พฤษภาคม 2554",
    training: "โครงการฝึกอบรมผู้นำเยาวชน ณ ประเทศญี่ปุ่น สาขานโยบายด้านเทคโนโลยีสารสนเทศและการสื่อสาร (ICT Policy) โดย JICA"
  },

  metrics: [
    { value: "12+ ปี", label: "ประสบการณ์บริหารระบบไอทีภาครัฐ", detail: "ยุติธรรม • พม. • สภากาชาดไทย" },
    { value: "117 ชม.", label: "ฝึกปฏิบัติงาน สป.ยุติธรรม", detail: "สำเร็จเกินเกณฑ์ 90 ชม. (รับรองโดย สป.ยธ.)" },
    { value: "99.4%", label: "ความแม่นยำ AI Vision OCR", detail: "Gemini Multimodal สลิปยางพารา" },
    { value: "100%", label: "Zero-Loss Concurrency Safe", detail: "ป้องกัน Race Condition ในระบบงบประมาณ" }
  ],

  milestones: [
    {
      period: "1 - 30 ก.ย. 2569 (117 ชม.)",
      role: "ผู้ฝึกปฏิบัติงานเทคโนโลยีสารสนเทศ (โครงการพัฒนาศักยภาพคนพิการภาครัฐ)",
      organization: "ศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร สำนักงานปลัดกระทรวงยุติธรรม",
      badge: "ผ่านการฝึกปฏิบัติงาน 117 ชม. (เกินเกณฑ์ 90 ชม.) ได้รับหนังสือรับรองทางการ เลขที่ 353/2569",
      description: "ปฏิบัติหน้าที่ด้านสนับสนุนเทคนิคไอที ออกแบบสถาปัตยกรรมข้อมูล และพัฒนาแดชบอร์ดบริหารสารสนเทศ โดยผ่านการประเมินด้วยความวิริยอุตสาหะและความประพฤติเรียบร้อย",
      category: "Justice",
      competencyPillars: [
        {
          title: "1. การสนับสนุนเทคนิคทางไกล (Remote Helpdesk)",
          desc: "ให้บริการแก้ไขปัญหาฮาร์ดแวร์/ซอฟต์แวร์ผ่าน AnyDesk, บริหารจัดการลิขสิทธิ์ ThaiWPS, Thai Sarabun IT9, ติดตั้งไดรเวอร์เครื่องพิมพ์เครือข่าย IP Printer (เช่น สยว.ตาก, สิงห์บุรี) ตามเกณฑ์ SLA",
          icon: "headset"
        },
        {
          title: "2. ธรรมาภิบาลข้อมูล & พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)",
          desc: "วิเคราะห์ความสอดคล้องระเบียบ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 จัดทำแบบยินยอม (Consent Form), Privacy Notice และระบบอำพรางข้อมูล (Data Masking) ก่อนการเผยแพร่",
          icon: "shield-check"
        },
        {
          title: "3. แดชบอร์ดสรุปสถิติผู้บริหาร (Executive Dashboard)",
          desc: "พัฒนาส่วนติดต่อผู้ใช้งานและวิเคราะห์ข้อมูลด้วย Chart.js, Tailwind CSS และ Excel ขั้นสูง (SUMIFS, COUNTIFS, XLOOKUP, Pivot Table, Slicer) แปลงข้อมูลคดีเป็นตัวชี้วัดความสำเร็จแบบเรียลไทม์",
          icon: "chart-pie"
        },
        {
          title: "4. มาตรฐานการเข้าถึงสำหรับคนพิการ (WCAG 2.1 AA)",
          desc: "ทดสอบและปรับปรุงระบบให้รองรับ Contrast Ratio และโปรแกรมอ่านหน้าจอ (Screen Reader NVDA) ได้ 100% พร้อมทดสอบ UAT ร่วมกับผู้ใช้งานจริง ได้รับคะแนนความพึงพอใจสูงกว่า 95%",
          icon: "accessibility"
        }
      ],
      highlights: [
        "จัดทำ Digital Portfolio Schema ตามกรอบสมรรถนะ ก.พ.ร.",
        "วางโครงสร้าง Project Canvas 9 ช่อง และกำหนดบทบาท RACI Matrix",
        "จัดทำรูปเล่มรายงานสมบูรณ์ครบถ้วน 90 ชั่วโมง (ปฏิบัติจริง 117 ชม.) และนำเสนอต่อคณะกรรมการสำเร็จ 100%"
      ]
    },
    {
      period: "15 ม.ค. 2565 – 31 มี.ค. 2567",
      role: "เจ้าหน้าที่ระบบงานคอมพิวเตอร์",
      organization: "สำนักงานเทคโนโลยีสารสนเทศและดิจิทัล สภากาชาดไทย",
      description: "บริหารจัดการและประสานงานร่วมกับผู้ให้บริการภายนอก (Vendor Management) ควบคุมและตรวจสอบประสิทธิภาพระบบตามมาตรฐาน SLA และยุทธศาสตร์ดิจิทัลของสภากาชาดไทย",
      highlights: [
        "กำกับดูแล Vendor Governance และบริหารสัญญาผู้ให้บริการไอทีภายนอก",
        "ตรวจสอบและควบคุมระดับข้อตกลงการให้บริการ (SLA Enforcement)",
        "ร่วมผลักดันแผนพัฒนาดิจิทัลและขับเคลื่อนองค์กรดิจิทัลเพื่อสาธารณกุศล"
      ],
      category: "Healthcare"
    },
    {
      period: "มี.ค. 2556 – 15 ม.ค. 2565 (9 ปี)",
      role: "นักวิชาการคอมพิวเตอร์",
      organization: "กองทุนผู้สูงอายุ กรมกิจการผู้สูงอายุ กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ (พม.)",
      description: "วิเคราะห์และออกแบบระบบเครือข่ายและระบบฐานข้อมูลระดับองค์กร จัดทำแผนปฏิบัติการสารสนเทศประจำปีงบประมาณ และเป็นผู้แทนคณะกรรมการเทคโนโลยีสารสนเทศ",
      highlights: [
        "ออกแบบระบบค้นหารายชื่อผู้สูงอายุเพื่อรับเงินสนับสนุนสิทธิประโยชน์ ลดเวลาตรวจสิทธิ 80%",
        "วางโครงสร้างฐานข้อมูลเชื่อมโยงระบบชำระเงินคืนกองทุนผ่านเคาน์เตอร์เซอร์วิส (Counter Service) ทั่วประเทศ",
        "พัฒนาระบบจัดเก็บฐานข้อมูลเงินกู้ยืมทุนประกอบอาชีพผู้สูงอายุ ปลดล็อกการพิจารณาทุนที่รวดเร็ว",
        "คณะทำงานจัดการความรู้ (KM), การพัฒนาคุณภาพการบริหารจัดการภาครัฐ (PMQA) และนวัตกรรมองค์กร"
      ],
      category: "GovTech"
    },
    {
      period: "ธ.ค. 2554 – ก.พ. 2556",
      role: "IT Support Specialist & Webmaster",
      organization: "บริษัท เวิลด์เอ็นเตอร์เทนเม้นท์เน็ทเวิร์ค จำกัด",
      description: "ดูแลระบบเครือข่าย คอมพิวเตอร์ ออกแบบและพัฒนาเว็บไซต์องค์กร และบริหารจัดการช่องทางสื่อดิจิทัล",
      category: "Education"
    }
  ] as Milestone[],

  credentials: [
    {
      id: "dep-opdc-cert",
      title: "ประกาศนียบัตร การพัฒนาเพื่อเตรียมความพร้อมสำหรับคนพิการในการทำงานภาครัฐ",
      organization: "กรมส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ (พม.) ร่วมกับ สถาบันส่งเสริมการบริหารกิจการบ้านเมืองที่ดี สำนักงาน ก.พ.ร.",
      issueDate: "21 ตุลาคม 2569",
      docNumber: "โครงการจ้างที่ปรึกษาขับเคลื่อนนโยบายการจ้างงานคนพิการในหน่วยงานภาครัฐ",
      signatories: [
        "นางสาวสนธยา บุณยภูษิต (อธิบดีกรมส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ)",
        "หม่อมหลวงพัชรภากร เทวกุล (ผู้อำนวยการสถาบันส่งเสริมการบริหารกิจการบ้านเมืองที่ดี สำนักงาน ก.พ.ร.)"
      ],
      description: "ผ่านหลักสูตรการพัฒนาเพื่อเตรียมความพร้อมสำหรับคนพิการในการทำงานภาครัฐ เพื่อเสริมสร้างความรู้ ทักษะ ทัศนคติ และสมรรถนะในการปฏิบัติราชการตามกรอบธรรมาภิบาลภาครัฐยุคใหม่",
      skillsAcquired: [
        "ขับเคลื่อนนโยบายการจ้างงานคนพิการในหน่วยงานภาครัฐ",
        "การบริหารกิจการบ้านเมืองที่ดีตามกรอบ ก.พ.ร. (Good Governance)",
        "สมรรถนะการปฏิบัติราชการดิจิทัลและงานสารบรรณ",
        "การปรับตัวและพัฒนาทัศนคติเชิงวิชาชีพภาครัฐ"
      ],
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
      category: "Government"
    },
    {
      id: "justice-cert",
      title: "หนังสือรับรองการฝึกปฏิบัติงานของคนพิการ (117 ชั่วโมง)",
      organization: "ศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร สำนักงานปลัดกระทรวงยุติธรรม",
      issueDate: "21 ตุลาคม 2569",
      docNumber: "เลขที่ 353/2569",
      signatories: [
        "นางสาวเปรมมิศา หนูเรืองงาม (ผอ.กองบริหารทรัพยากรบุคคล ปฏิบัติราชการแทน ปลัดกระทรวงยุติธรรม)",
        "นางสาวธนวรรณ ท้วมยิ้ม (ผอ.ศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร)",
        "นางสาวชนินาถ วิจิตรไพฑูรย์ (นักวิชาการคอมพิวเตอร์ชำนาญการ ผู้กำกับการฝึกปฏิบัติงาน)"
      ],
      description: "รับรองว่า นาย นิติพัฒน์ คุ้มวงษ์ ผ่านการฝึกปฏิบัติงานตามโครงการเตรียมความพร้อมสำหรับการพัฒนาคนพิการด้านความรู้ ทักษะ ทัศนคติ และสมรรถนะ โดยได้ปฏิบัติหน้าที่ด้วยความวิริยอุตสาหะ และมีความประพฤติเรียบร้อย",
      skillsAcquired: [
        "ปฏิบัติงานจริง 117 ชม. (เกินเกณฑ์ 90 ชม.)",
        "Remote IT Helpdesk (AnyDesk)",
        "ธรรมาภิบาลข้อมูล & มาตรการ PDPA",
        "มาตรฐานการเข้าถึง WCAG 2.1 AA (Screen Reader NVDA)",
        "Executive Dashboard (Chart.js & Tailwind)"
      ],
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      category: "Government"
    },
    {
      id: "onde-cert",
      title: "ประกาศนียบัตร บูทแคมป์การออกแบบและขับเคลื่อนรัฐบาลแบบเปิดและเชื่อมโยง",
      organization: "สำนักงานคณะกรรมการดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งชาติ (สดช.) กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม",
      issueDate: "20 ธันวาคม 2561",
      docNumber: "หลักสูตรพัฒนาข้าราชการและบุคลากรภาครัฐยุคใหม่ (31 ก.ค. - 11 ต.ค. 2561)",
      signatories: [
        "นางสาวอัจฉรินทร์ พัฒนพันธ์ชัย (ปลัดกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม)",
        "นางปิยนันท์ วุฒิสอน (เลขาธิการคณะกรรมการดิจิทัลเพื่อเศรษฐกิจและสังคมแห่งชาติ)"
      ],
      description: "ผ่านการอบรมหลักสูตรการพัฒนาข้าราชการและบุคลากรภาครัฐยุคใหม่ บูทแคมป์: การออกแบบและขับเคลื่อนรัฐบาลแบบเปิดและเชื่อมโยง ภายใต้โครงการศึกษาและวิเคราะห์แนวทางการจัดทำมาตรฐานเทคโนโลยีดิจิทัล",
      skillsAcquired: [
        "Open & Connected Government Architecture",
        "Digital Government Standards & Framework",
        "Data Integration & Interoperability",
        "Digital Transformation Policy"
      ],
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      category: "Government"
    },
    {
      id: "jica-cert",
      title: "Certificate: Knowledge Co-Creation Program (Young Leaders) 2015",
      organization: "Japan International Cooperation Agency (JICA) ร่วมกับ Fujitsu Learning Media Limited ณ ประเทศญี่ปุ่น",
      issueDate: "9 พฤศจิกายน 2558 (November 9, 2015)",
      docNumber: "Policy on Information Communication Technology Course (Kingdom of Thailand)",
      signatories: [
        "Shinichi Kitaoka (President, Japan International Cooperation Agency - JICA)"
      ],
      description: "ได้รับคัดเลือกเป็นตัวแทนประเทศไทย สำเร็จหลักสูตรนโยบายเทคโนโลยีสารสนเทศและการสื่อสาร (ICT Policy Course) จัดขึ้นภายใต้โครงการความร่วมมือระหว่างประเทศของรัฐบาลญี่ปุ่น",
      skillsAcquired: [
        "National ICT Policy & Infrastructure",
        "Japanese High-Standard Engineering Discipline",
        "Strategic ICT Disaster Preparedness",
        "Cross-Cultural Leadership & Innovation"
      ],
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      category: "International"
    },
    {
      id: "sipa-cert",
      title: "ประกาศนียบัตร การอบรมเชิงปฏิบัติการ PHP Framework (CakePHP)",
      organization: "สำนักงานส่งเสริมอุตสาหกรรมซอฟต์แวร์แห่งชาติ (องค์การมหาชน - SIPA) ร่วมกับ มหาวิทยาลัยเกษตรศาสตร์",
      issueDate: "29 กรกฎาคม 2555",
      docNumber: "โครงการ Open Source Software Finishing School (OSS FOR CORP)",
      signatories: [
        "นายไตรรัตน์ ฉัตรแก้ว (ผู้อำนวยการ สำนักงานส่งเสริมอุตสาหกรรมซอฟต์แวร์แห่งชาติ - SIPA)",
        "ผศ. ศิริกร จันทร์นวล (หัวหน้าภาควิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์)"
      ],
      description: "ผ่านการอบรมเชิงปฏิบัติการพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีโอเพนซอร์ส PHP Framework - CakePHP เพื่อการใช้งานในองค์กรอย่างมีมาตรฐานความปลอดภัย",
      skillsAcquired: [
        "MVC Architecture Pattern",
        "Enterprise PHP & Database Abstraction",
        "Secure Web Application Development",
        "Open Source Software Deployment"
      ],
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      category: "Software Engineering"
    }
  ] as Credential[],

  projects: [
    {
      id: "gov-elderly-database",
      title: "ระบบฐานข้อมูลสวัสดิการและเงินกู้ยืมประกอบอาชีพผู้สูงอายุ",
      category: "GovTech & Social Welfare Infrastructure",
      tagline: "กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ (พม.)",
      description: "ปฏิรูปกระบวนการยื่นคำร้องและตรวจสอบสิทธิสวัสดิการผู้สูงอายุทั่วประเทศจากแฟ้มกระดาษสู่ฐานข้อมูลดิจิทัลความเร็วสูง พร้อมระบบเชื่อมต่อชำระเงินผ่าน Counter Service ทั่วประเทศ ทำให้ลูกหนี้กองทุนชำระเงินสะดวกและเงินหมุนเวียนกลับมาช่วยเหลือผู้สูงอายุรายอื่นได้อย่างต่อเนื่อง",
      techStack: ["Enterprise Database", "Counter Service API", "Database Indexing", "PMQA & Data Governance"],
      metrics: [
        { label: "ความเร็วตรวจสอบสิทธิ", value: "ลดเวลาลง 80%" },
        { label: "จุดบริการชำระเงินทั่วประเทศ", value: "Counter Service 100%" }
      ],
      highlights: [
        "สถาปัตยกรรม Database Indexing สกัดข้อมูลประชาชนสิทธิผู้สูงอายุในเสี้ยววินาที",
        "ระบบเชื่อมต่อข้อมูลชำระเงินเรียลไทม์กับจุดบริการเคาน์เตอร์เซอร์วิสทั่วประเทศ",
        "ลดขั้นตอนการอนุมัติเงินทุนกู้ยืมประกอบอาชีพ ให้ผู้สูงอายุสร้างรายได้พึ่งพาตนเองได้ทันเวลา"
      ],
      icon: "building-library"
    },
    {
      id: "rubber-slip-bot",
      title: "ระบบบันทึกสลิปซื้อขายยางพาราอัตโนมัติด้วย AI",
      category: "Smart AgTech & AI Vision",
      tagline: "LINE Bot + Gemini OCR + Google Sheets / AppSheet",
      description: "นวัตกรรมแก้ปัญหาของเกษตรกรชาวสวนยาง แปลงใบเสร็จชั่งน้ำหนักและเปอร์เซ็นต์เนื้อยางแห้ง (DRC) ที่เคยเขียนด้วยลายมือให้กลายเป็นดิจิทัลอัตโนมัติ เพียงถ่ายภาพส่งเข้า LINE Bot ระบบจะอ่านค่า ชั่งน้ำหนัก ราคา และคำนวณส่วนแบ่งเจ้าของสวน-คนกรีดยาง 50:50 บันทึกลงบัญชีทันที",
      techStack: ["LINE Messaging API", "Google Gemini OCR", "Python 3.12", "Google Sheets API", "Docker"],
      metrics: [
        { label: "ความแม่นยำในการอ่านข้อมูล", value: "99.4%" },
        { label: "ระยะเวลาบันทึกรายการ", value: "3 นาที → 3 วินาที" }
      ],
      highlights: [
        "สกัดข้อมูลตัวเลขและตารางจากใบเสร็จที่มีรอยเลอะหรือลายมือเขียนได้อย่างแม่นยำ",
        "คำนวณส่วนแบ่งรายได้ 50:50 และสรุปรายรับ-รายจ่ายรายวันอัตโนมัติ",
        "ระบบ Offline Validation ป้องกันข้อมูลบันทึกซ้ำซ้อน 100%"
      ],
      icon: "file-spreadsheet"
    },
    {
      id: "it-budget-async",
      title: "ระบบบริหารงบประมาณและควบคุมโครงการ IT แบบ Async",
      category: "Enterprise System Architecture",
      tagline: "FastAPI + Next.js + PostgreSQL แบบ High-Concurrency",
      description: "ระบบสถาปัตยกรรมระดับเอนเตอร์ไพรส์สำหรับติดตามสถานะโครงการและควบคุมการเบิกจ่ายงบประมาณไอที ป้องกันการของบเกินวงเงินด้วยระบบ Row-Level Locking (FOR UPDATE) พร้อม Audit Trail บันทึกประวัติการอนุมัติโปร่งใสตรวจสอบได้",
      techStack: ["FastAPI (Python)", "Next.js", "Docker PostgreSQL", "Row-Level Locking", "Async Engine"],
      metrics: [
        { label: "ความปลอดภัยทรานแซกชัน", value: "100% Zero-Loss" },
        { label: "ความเร็วประมวลผล", value: "< 20ms Response" }
      ],
      highlights: [
        "ป้องกันปัญหา Race Condition และการเบิกจ่ายซ้ำซ้อนด้วย Database Transaction Isolation",
        "ระบบติดตามสถานะงบประมาณคงเหลือและแจ้งเตือนผู้บริหารแบบเรียลไทม์",
        "ส่งออกรายงานทางการเงินและเอกสารราชการในรูปแบบ Excel ภาษาไทยและ A4 ได้ทันที"
      ],
      icon: "chart-bar"
    },
    {
      id: "multi-agent-automation",
      title: "ระบบบริหารงานผ่านทีม AI Agent 13 บทบาท & Shopee Automation",
      category: "Autonomous Workflow & E-Commerce",
      tagline: "Multi-Agent Framework + Selenium Python บน Apple Silicon Mac M1",
      description: "ออกแบบโครงสร้างทีม AI Agent 13 ตำแหน่งตามเลเยอร์สี (นำโดย AI น้องฟ้า เลขาหน้าห้อง, พี่ใหญ่ PM, เซียน SA) ช่วยสรุปรายงาน สังเคราะห์งาน และตรวจสอบความเรียบร้อย พร้อมระบบบอทบริหารจัดการร้านค้า Shopee อัตโนมัติ 24 ชั่วโมง",
      techStack: ["Multi-Agent Architecture", "Python 3.12", "Selenium WebDriver", "macOS M1 Optimization"],
      metrics: [
        { label: "การทำงานอัตโนมัติ", value: "24/7 ไร้สะดุด" },
        { label: "ลดภาระงานธุรการเบื้องต้น", value: "85%" }
      ],
      highlights: [
        "แบ่งบทบาทการทำงานของ AI อย่างเป็นระบบ ช่วยผู้บริหารคัดกรองและสรุปประเด็นสำคัญ",
        "ปรับแต่ง Resource บน Mac M1 ให้ทำงานเบา เงียบ และประหยัดพลังงาน",
        "ระบบบริหารคำสั่งซื้อและจัดการสต็อกสินค้าอัตโนมัติผ่าน Chrome Isolated Profile"
      ],
      icon: "cpu-chip"
    }
  ] as Project[],

  articles: [
    {
      title: "เปลี่ยนภาระให้เป็นพลัง: บทเรียน 4 ปีกับการฟื้นฟูสภาวะ Stroke ด้วยเทคโนโลยี AI",
      summary: "บอกเล่าการก้าวข้ามข้อจำกัดทางกายภาพ นำเทคโนโลยีปัญญาประดิษฐ์และระบบอัตโนมัติมาเสริมศักยภาพในการทำงานเอกสารและบริหารระบบสารสนเทศได้อย่างสมบูรณ์",
      date: "ตุลาคม 2567",
      readTime: "5 นาทีในการอ่าน",
      category: "Inspiration & Resilience",
      slug: "stroke-recovery-with-ai-empowerment"
    },
    {
      title: "ถอดรหัส 117 ชั่วโมง ณ กระทรวงยุติธรรม: จาก Helpdesk ทางไกลสู่ Dashboard และ WCAG 2.1 AA",
      summary: "สรุปองค์ความรู้การปฏิบัติงานจริง ณ สำนักงานปลัดกระทรวงยุติธรรม การประยุกต์ใช้ PDPA Data Masking และมาตรฐานการเข้าถึงเพื่อคนพิการ",
      date: "กันยายน 2567",
      readTime: "6 นาทีในการอ่าน",
      category: "GovTech Internship",
      slug: "justice-ministry-internship-learnings"
    },
    {
      title: "บทเรียน ICT Policy จากญี่ปุ่น (JICA) สู่การสร้างฐานข้อมูลภาครัฐที่ยั่งยืน",
      summary: "ถอดบทเรียนจากการดูงานนโยบายสารสนเทศ ณ ประเทศญี่ปุ่น นำวินัยและการวางโครงสร้างพื้นฐานดิจิทัลมาขจัดขวดแก้วในระบบงานสวัสดิการสังคมของไทย",
      date: "สิงหาคม 2567",
      readTime: "6 นาทีในการอ่าน",
      category: "GovTech Policy",
      slug: "jica-japan-ict-policy-insights"
    }
  ] as Article[]
};
