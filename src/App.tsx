import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  FileText, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 bg-slate-900 z-[60] transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-lg shadow-lg shadow-slate-900/20">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className={`font-bold text-lg tracking-tighter text-slate-900`}>
            Williams George & Co. (Chartered Accountants)
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[10px] font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-[0.2em]`}
            >
              {link.name}
            </a>
          ))}
          <a href="#cta" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
            Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-5 md:hidden border-t border-slate-100"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-900 font-bold text-lg py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#cta"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-slate-900 text-white w-full py-4 rounded-2xl font-bold mt-4 shadow-xl shadow-slate-900/20 text-center"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      )}
    </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/4 -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold mb-8 uppercase tracking-[0.2em]"
          >
            <span className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse"></span>
            Accuracy and Integrity
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[0.9] mb-8 tracking-tighter">
            Strategic <br />
            <span className="text-slate-400 font-serif italic font-normal">Financial</span> <br />
            Excellence.
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            We provide high-impact tax planning and wealth management strategies for high-net-worth individuals and growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#cta" className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-slate-900/20 active:scale-95">
              Schedule a Consultation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-full font-bold hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center">
              Our Services
            </a>
          </div>
          

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block perspective-1000"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 transform transition-transform duration-700 hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Office Space" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 z-20 max-w-[280px]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Certified Experts</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Licensed & Regulated</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Our team consists of top-tier chartered accountants and tax strategists.
            </p>
          </motion.div>
        </motion.div>
      </div>



      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-slate-100 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-200 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Tax Planning & Compliance",
      description: "Strategic tax advice to minimize liabilities and ensure full compliance with current regulations.",
      icon: <Calculator className="w-6 h-6" />,
      tag: "Strategic"
    },
    {
      title: "Audit & Assurance",
      description: "Rigorous auditing services that provide transparency and build trust with stakeholders.",
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: "Compliance"
    },
    {
      title: "Business Consulting",
      description: "Expert guidance on business structure, growth strategies, and operational efficiency.",
      icon: <TrendingUp className="w-6 h-6" />,
      tag: "Growth"
    },
    {
      title: "Corporate Finance",
      description: "Assistance with mergers, acquisitions, valuations, and capital raising initiatives.",
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "Advisory"
    },
    {
      title: "Payroll & HR",
      description: "Comprehensive payroll management and HR advisory for businesses of all sizes.",
      icon: <Users className="w-6 h-6" />,
      tag: "Operations"
    },
    {
      title: "Financial Reporting",
      description: "Accurate and timely financial statements prepared to international standards.",
      icon: <FileText className="w-6 h-6" />,
      tag: "Reporting"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Our Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
              Comprehensive Financial <br />
              <span className="text-slate-400">Solutions.</span>
            </h3>
          </div>
          <p className="text-lg text-slate-500 max-w-md font-medium leading-relaxed">
            We provide a wide range of professional services tailored to meet the unique needs of our diverse clientele.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-[40px] overflow-hidden shadow-2xl shadow-slate-900/5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 bg-white hover:bg-slate-50 transition-all duration-500 group relative"
            >
              <div className="absolute top-8 right-8 text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                {service.tag}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg shadow-slate-900/10">
                <div className="text-white">{service.icon}</div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:translate-x-1 transition-transform">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group/link">
                <span className="relative">
                  Learn More 
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all group-hover/link:w-full"></span>
                </span>
                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Strategic Insight",
      desc: "We look beyond the numbers to provide insights that drive long-term value.",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Global Perspective",
      desc: "Our team brings international expertise to local financial challenges.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Uncompromising Integrity",
      desc: "Trust is our foundation. We maintain the highest ethical standards.",
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Why Williams George & Co. (Chartered Accountants)</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter">
              Partnering for <br />
              <span className="text-slate-400 italic font-serif font-normal">Financial Mastery.</span>
            </h3>
            <div className="space-y-12">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <div className="text-white">{reason.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed max-w-md">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                alt="Collaboration" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all duration-700"></div>
            </div>
            {/* Floating Stat */}
            <div className="absolute -top-10 -right-10 bg-white text-slate-900 p-10 rounded-[40px] shadow-2xl z-20 hidden md:block">
              <div className="text-5xl font-bold mb-1 tracking-tighter">99%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team at Work" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">About the Firm</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              A Legacy of <br />
              <span className="text-slate-400 italic font-serif">Integrity.</span>
            </h3>
            <p className="text-xl text-slate-500 mb-8 leading-relaxed font-medium">
              Founded on the principles of precision and partnership, Williams George & Co. (Chartered Accountants) has grown into a leading chartered accountancy firm known for delivering high-impact financial strategies.
            </p>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">
              We don't just crunch numbers; we provide the insights that drive business growth. Our team of experienced professionals combines technical expertise with a deep understanding of industry trends.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "Personalized", desc: "Tailored approach to every client" },
                { title: "Modern", desc: "Cutting-edge tech integration" },
                { title: "Global", desc: "Local expertise, global reach" },
                { title: "Committed", desc: "Continuous professional growth" }
              ].map((item) => (
                <div key={item.title}>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      desc: "We begin with a deep dive into your financial landscape to identify opportunities and risks."
    },
    {
      number: "02",
      title: "Strategic Planning",
      desc: "Our experts develop a tailored roadmap designed to optimize your tax position and wealth."
    },
    {
      number: "03",
      title: "Seamless Execution",
      desc: "We implement the strategy with precision, handling all compliance and technical details."
    },
    {
      number: "04",
      title: "Ongoing Advisory",
      desc: "Continuous monitoring and adjustment to ensure your financial goals are consistently met."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">The Process</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
            How We Drive <br />
            <span className="text-slate-400">Your Growth.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-8xl font-bold text-slate-50 mb-6 font-serif italic select-none">
                {step.number}
              </div>
              <div className="relative z-10 -mt-12">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:60px_60px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-12 inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
          "Williams George & Co. (Chartered Accountants) transformed our corporate tax structure, saving us millions in unnecessary liabilities while ensuring absolute compliance. Their strategic insight is unparalleled."
        </h3>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
              alt="Client" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-bold text-xl">Jonathan Sterling</div>
          <div className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-1">CEO, Sterling Global</div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    {
      name: "David Williams",
      role: "Managing Partner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sarah George",
      role: "Senior Tax Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Michael Chen",
      role: "Audit Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Emily Roberts",
      role: "Consulting Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="team" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Our Leadership</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
            Meet the Minds Behind <br />
            <span className="text-slate-400">Your Success.</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-slate-400 transition-colors">{member.name}</h4>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Get In Touch</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Ready to Optimize <br />
              <span className="text-slate-400">Your Future?</span>
            </h3>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Contact us today for a confidential consultation. Let's discuss how we can help you achieve your financial goals.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Us</div>
                  <div className="text-xl font-bold text-slate-900">info@williamsgeorgeandco.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Call Us</div>
                  <div className="text-xl font-bold text-slate-900">+234-809-090-1714</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Visit Us</div>
                  <div className="text-xl font-bold text-slate-900">GoldRim Plaza 207, Old Abeokuta Road, Agege, Lagos, Nigeria.</div>
                </div>
              </div>

              {/* Map Location */}
              <div className="mt-12 rounded-[32px] overflow-hidden border border-slate-100 shadow-sm h-[300px] w-full">
                <iframe 
                  src="https://maps.google.com/maps?q=GoldRim%20Plaza%20207,%20Old%20Abeokuta%20Road,%20Agege,%20Lagos,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:bg-white focus:border-slate-100 transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:bg-white focus:border-slate-100 transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Service Interested In</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:bg-white focus:border-slate-100 transition-all appearance-none font-medium">
                    <option>Tax Planning</option>
                    <option>Audit & Assurance</option>
                    <option>Business Consulting</option>
                    <option>Corporate Finance</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronRight className="w-4 h-4 rotate-90 text-slate-400" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-900/5 focus:bg-white focus:border-slate-100 transition-all font-medium"
                ></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Privacy Statement</h2>
                <p className="text-sm text-slate-400 font-medium">Williams George & Co. (Chartered Accountants)</p>
              </div>
              <button 
                onClick={onClose}
                className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="prose prose-slate max-w-none space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    At Williams George & Co. (Chartered Accountants), we take your privacy seriously. This privacy statement explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our professional services. We are committed to ensuring that your personal data is protected in accordance with the Nigeria Data Protection Act (NDPA) and other relevant regulations.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">2. Our legal grounds for processing your personal data</h3>
                  <p className="text-slate-600 leading-relaxed font-medium mb-4">
                    We rely on one or more of the following legal grounds to process your personal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 font-medium">
                    <li>To perform our obligations under a contract with you or your organization.</li>
                    <li>To comply with legal and regulatory obligations (e.g., anti-money laundering regulations).</li>
                    <li>For our legitimate business interests in providing professional services.</li>
                    <li>Where you have given us explicit consent to process your data for specific purposes.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">3. Transfers of personal data</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We may share your personal data with third-party service providers who perform services on our behalf, such as IT support, cloud storage, or specialized consultants. We may also disclose information to regulatory authorities, law enforcement, or other government agencies as required by law. We ensure that all third parties respect the security of your personal data and treat it in accordance with the law.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">4. Our processing activities</h3>
                  <p className="text-slate-600 leading-relaxed font-medium mb-4">
                    We process personal data for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 font-medium">
                    <li>Providing audit, tax, and consulting services.</li>
                    <li>Managing our business relationship with you.</li>
                    <li>Sending professional updates and marketing communications (where permitted).</li>
                    <li>Recruitment and personnel management.</li>
                    <li>Ensuring the security of our systems and premises.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">5. Your legal rights in relation to personal data</h3>
                  <p className="text-slate-600 leading-relaxed font-medium mb-4">
                    Under the NDPA, you have certain rights regarding your personal data, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 font-medium">
                    <li>The right to access the personal data we hold about you.</li>
                    <li>The right to request correction of inaccurate data.</li>
                    <li>The right to request erasure of your data under certain conditions.</li>
                    <li>The right to object to or restrict the processing of your data.</li>
                    <li>The right to data portability.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">6. Changes to this privacy statement</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We may update this privacy statement from time to time to reflect changes in our practices or legal requirements. The "last updated" date at the bottom of this statement will indicate when the latest changes were made.
                  </p>
                </section>

                <section className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">7. Contact us</h3>
                  <p className="text-slate-600 leading-relaxed font-medium mb-6">
                    If you have any questions about this privacy statement or how we handle your personal data, please contact our Data Protection Officer:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <MapPin className="w-5 h-5 text-slate-900" />
                      </div>
                      <span className="text-slate-900 font-bold">GoldRim Plaza 207, Old Abeokuta Road, Agege, Lagos, Nigeria.</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <Mail className="w-5 h-5 text-slate-900" />
                      </div>
                      <span className="text-slate-900 font-bold">info@williamsgeorgeandco.com</span>
                    </div>
                  </div>
                </section>
                
                <div className="pt-8 border-t border-slate-100 text-center">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                    Last Updated: March 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const LegalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Legal Disclaimer</h2>
                <p className="text-sm text-slate-400 font-medium">Williams George & Co. (Chartered Accountants)</p>
              </div>
              <button 
                onClick={onClose}
                className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <div className="prose prose-slate max-w-none space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">1. General Guidance</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    The information contained in this site is for general guidance on matters of interest only. The application and use of laws can vary widely based on the specific facts involved. Given the changing nature of laws, rules and regulations, and the inherent hazards of electronic communication, there may be delays, omissions or inaccuracies in information contained in this site.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">2. No Professional Advice</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Accordingly, the information on this site is provided with the understanding that the authors and publishers are not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers. Before making any decision or taking any action, you should consult a Williams George & Co. professional.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">3. Accuracy and Responsibility</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Williams George & Co. is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">4. Third-Party Links</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Certain links in this site connect to other websites maintained by third parties over whom Williams George & Co. has no control. Williams George & Co. makes no representations as to the accuracy or any other aspect of information contained in other websites.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    In no event will Williams George & Co., its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.
                  </p>
                </section>

                <div className="pt-8 border-t border-slate-100 text-center">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                    Last Updated: March 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = ({ onPrivacyClick, onLegalClick }: { onPrivacyClick: () => void; onLegalClick: () => void }) => {
  return (
    <footer className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">
                Williams George & Co. (Chartered Accountants)
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              Professional chartered accountants dedicated to providing strategic financial excellence and building long-term partnerships.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Services", "About Us", "Our Team", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-slate-900 font-bold text-sm hover:text-slate-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-slate-900 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Services</h4>
            <ul className="space-y-4">
              {["Tax Planning", "Audit & Assurance", "Business Consulting and Risk Services", "Corporate Finance"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-900 font-bold text-sm hover:text-slate-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-slate-900 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-slate-500 mb-8 font-medium">Stay updated with the latest financial insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-100 px-5 py-3 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-slate-900/5 w-full font-medium"
              />
              <button className="bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm font-bold">
            © {new Date().getFullYear()} Williams George & Co. (Chartered Accountants)
          </div>
          <div className="flex gap-10 text-xs font-bold text-slate-400 tracking-widest">
            <button onClick={onPrivacyClick} className="hover:text-slate-900 transition-colors">Privacy</button>
            <button onClick={onLegalClick} className="hover:text-slate-900 transition-colors">Legal</button>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CTA = () => {
  return (
    <section id="cta" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[60px] p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Ready to Secure Your <br />
              <span className="text-slate-400 italic font-serif font-normal">Financial Future?</span>
            </h3>
            <p className="text-xl text-slate-400 mb-12 font-medium">
              Join hundreds of successful businesses and individuals who trust Williams George & Co. (Chartered Accountants) for their financial excellence.
            </p>
            <a href="#contact" className="inline-block bg-white text-slate-900 px-12 py-6 rounded-full font-bold hover:bg-slate-100 transition-all shadow-2xl shadow-white/10">
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <div className="font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Team />
      <Contact />
      <CTA />
      <Footer 
        onPrivacyClick={() => setIsPrivacyOpen(true)} 
        onLegalClick={() => setIsLegalOpen(true)}
      />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </div>
  );
}
