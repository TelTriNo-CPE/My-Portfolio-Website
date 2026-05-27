import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLang } from '../context/LanguageContext'

const stats = [
  { value: '3.84', label: 'GPA', labelTH: 'เกรดเฉลี่ย', icon: 'fa-solid fa-star', color: 'text-amber-400' },
  { value: '8+',   label: 'Projects', labelTH: 'โปรเจกต์', icon: 'fa-solid fa-code', color: 'text-cyan-400' },
  { value: '2nd',  label: 'Thailand — IEEEXtreme', labelTH: 'ไทย — IEEEXtreme', icon: 'fa-solid fa-trophy', color: 'text-yellow-400' },
  { value: '29th', label: 'Global — IEEEXtreme', labelTH: 'โลก — IEEEXtreme', icon: 'fa-solid fa-globe', color: 'text-purple-400' },
]

export default function About() {
  const { lang } = useLang()
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

  const bioEN = [
    "My name is Natanan Tatanan. I recently graduated with First-Class Honors (GPA 3.84) with a Bachelor's degree in Computer Engineering from Chiang Mai University. I specialize in end-to-end system development, ranging from hardware-software integration to designing secure and scalable backend architectures (Java, Python) capable of efficiently managing data from IoT devices",
    "Throughout my experience, I have successfully applied my knowledge to develop diverse, real-world projects. This includes enterprise-level platforms like the AssetManager and a CCTV Management System. Furthermore, my hands-on experience in Embedded systems and IoT includes the AutoCamFocus 9000—which integrates an ESP32 with a custom-designed PCB—and a Remote Paddy Field Water Level Station that leverages the ESP-NOW protocol for low-latency communication in areas without internet coverage. With comprehensive skills spanning software development, system testing, and IoT technologies, I am highly prepared to leverage my expertise to build highly efficient and reliable technical solutions."
  ]

  const bioTH = [
    "กระผมชื่อ นายณัฐนันทน์ ตาตะนันทน์ สำเร็จการศึกษาระดับปริญญาตรีจากคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่ ด้วยเกียรตินิยมอันดับ 1 (เกรดเฉลี่ย 3.84) กระผมมีความเชี่ยวชาญในการพัฒนาระบบแบบครบวงจร ตั้งแต่การบูรณาการฮาร์ดแวร์เข้ากับซอฟต์แวร์ ไปจนถึงการออกแบบสถาปัตยกรรม Backend (Java, Python) ที่ปลอดภัย รองรับการขยายตัว และสามารถจัดการข้อมูลจากอุปกรณ์ IoT ได้อย่างมีประสิทธิภาพ ตลอดระยะเวลาที่ผ่านมา ",
    "กระผมได้นำความรู้มาพัฒนาโปรเจกต์ที่ใช้งานได้จริงหลากหลายมิติ ทั้งแพลตฟอร์มระดับ Enterprise เช่น ระบบ AssetManager และ CCTV Management System รวมถึงโปรเจกต์ด้าน Embedded และ IoT เช่น AutoCamFocus 9000 ที่ใช้ ESP32 ทำงานร่วมกับ Custom PCB ที่ออกแบบเอง และสถานีวัดระดับน้ำนาข้าวทางไกลที่ประยุกต์ใช้โปรโตคอล ESP-NOW สำหรับสื่อสารแบบ Low-latency ในพื้นที่อับสัญญาณ ด้วยทักษะที่ครอบคลุมทั้งการพัฒนาซอฟต์แวร์ การทดสอบระบบ และเทคโนโลยี IoT กระผมจึงมีความพร้อมอย่างยิ่งที่จะนำความรู้ความสามารถมาสร้างสรรค์โซลูชันทางเทคนิคที่มีประสิทธิภาพสูงและเชื่อถือได้ครับ"
  ]

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 section-alt" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`mb-16 ${isVisible ? 'anim-visible' : 'anim-hidden'}`}
             style={{ transition: 'all 0.7s ease' }}>
          <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
            {lang === 'en' ? '// about me' : '// เกี่ยวกับผม'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2 mb-4">
            {lang === 'en' ? 'About Me' : 'เกี่ยวกับผม'}
          </h2>
          <div className="w-16 h-0.5 section-line rounded" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Bio ─────────────────────────────────────── */}
          <div className={`space-y-5 ${isVisible ? 'anim-visible' : 'anim-hidden-left'}`}
               style={{ transition: 'all 0.7s ease 0.15s' }}>
            {(lang === 'en' ? bioEN : bioTH).map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-base">
                {para}
              </p>
            ))}

            {/* Education card */}
            <div className="mt-8 p-5 rounded-2xl glass-card border-l-4 border-cyan-400">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-400/10
                               flex items-center justify-center">
                  <i className="fa-solid fa-graduation-cap text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-slate-100 font-semibold text-base">
                    {lang === 'en'
                      ? 'Bachelor of Engineering (Computer Engineering)'
                      : 'วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์)'}
                  </p>
                  <p className="text-slate-400 text-sm mt-0.5">
                    {lang === 'en'
                      ? 'Chiang Mai University · First-Class Honors'
                      : 'มหาวิทยาลัยเชียงใหม่ · เกียรตินิยมอันดับหนึ่ง'}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-amber-400 font-mono font-bold text-sm">GPA 3.84</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400 text-sm">
                      {lang === 'en' ? '2022-2025' : '2565-2568'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Stats ───────────────────────────────────── */}
          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'anim-visible' : 'anim-hidden-right'}`}
               style={{ transition: 'all 0.7s ease 0.3s' }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover rounded-2xl p-6 text-center"
              >
                <div className={`text-2xl mb-2 ${s.color}`}>
                  <i className={s.icon} />
                </div>
                <div className="stat-number text-3xl font-bold font-mono mb-1">
                  {s.value}
                </div>
                <div className="text-slate-400 text-xs leading-tight">
                  {lang === 'en' ? s.label : s.labelTH}
                </div>
              </div>
            ))}

            {/* Extra info card */}
            <div className="col-span-2 glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <i className="fa-solid fa-location-dot text-cyan-400" />
                <span className="text-slate-300 text-sm font-medium">
                  {lang === 'en' ? 'Chiang Mai, Thailand' : 'เชียงใหม่ ประเทศไทย'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Open to Work', 'Remote-friendly', 'Full-Time'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono
                               bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
