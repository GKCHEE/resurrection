import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // 1. Save to Firebase via Firestore
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date()
      });

      // 2. Send via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen relative text-slate-900 font-sans selection:bg-[#F59E0B] selection:text-white">
      {/* 1. GLOBAL STYLING: 'Bright Mode' foundation */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#FFF7ED] to-white bg-[length:200%_200%] animate-[pulse_10s_ease-in-out_infinite]" />
      
      {/* Header / Hero */}
      <header className="pt-20 pb-12 px-4 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-slate-900">
            Digital Affidavit: <br/><span className="text-[#F59E0B] drop-shadow-sm">Life Reconstruction Portal</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-800 font-bold mb-12 max-w-4xl mx-auto leading-relaxed">
            The Sunrise of Justice: Documenting the Biological Tax, Stolen Decades, and the Acuity Gap.
          </p>

          {/* 3. HERO SECTION (DUAL MEDIA): side-by-side or stacked top 'Forensic Hook' */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            {/* The CPF Fraud Video Hook */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(245,158,11,0.1)] border-4 border-[#F59E0B] flex flex-col">
              <h2 className="text-2xl font-black mb-4 text-slate-900 tracking-tight uppercase">Audio Evidence: Control</h2>
              <div className="aspect-w-16 aspect-h-9 w-full bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-200 mt-auto">
                <iframe 
                  src="https://www.youtube.com/embed/GcnPlCD62h4" 
                  title="Voice Audio Evidence" 
                  className="w-full h-64 md:h-80"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Voice Audio Hook */}
            <div className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(245,158,11,0.1)] border-4 border-[#F59E0B] flex flex-col">
              <h2 className="text-2xl font-black mb-4 text-slate-900 tracking-tight uppercase">Forensic Evidence: $90k Fraud</h2>
              <div className="aspect-w-16 aspect-h-9 w-full bg-slate-900 rounded-xl overflow-hidden shadow-inner border border-slate-200 mt-auto">
                <iframe 
                  src="https://www.youtube.com/embed/UGqGyLohcPs" 
                  title="The $90,000 CPF Fraud Evidence" 
                  className="w-full h-64 md:h-80"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* DIGITAL AFFIDAVIT SECTION (REPLACING IFRAMES WITH DIRECT LINKS) */}
<section className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-sky-500 text-white my-12">
  <h2 className="text-3xl md:text-4xl font-extrabold text-sky-400 mb-8 tracking-tight uppercase">
    Digital Affidavit
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Cinematic Video Item */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-emerald-400 border-b border-emerald-400/30 pb-2 uppercase">
        Cinematic Video
      </h3>
      <a 
        href="https://youtu.be/BVQ-SWVHw_s" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 hover:border-emerald-400 group"
      >
        <strong className="block text-xl mb-2 text-white">The 50% Threshold</strong>
        <span className="text-emerald-400 font-black text-sm uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
          Watch Video &rarr;
        </span>
      </a>
    </div>

    {/* Origin Story Item */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-[#F59E0B] border-b border-[#F59E0B]/30 pb-2 uppercase">
        The Origin Story
      </h3>
      <a 
        href="https://youtu.be/FEzWl9MBR_4" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 hover:border-[#F59E0B] group"
      >
        <strong className="block text-xl mb-2 text-white">The Journey of Resilience</strong>
        <span className="text-[#F59E0B] font-black text-sm uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform">
          Watch Video &rarr;
        </span>
      </a>
    </div>

  </div>
</section>

        </div>
      </header>

      {/* Forensic Reconstruction Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-4 space-y-24 relative z-10 text-slate-900">
        
        <section className="Forensic_Master_Narrative space-y-20">
          
          {/* Block 1: The Molecular Threshold (Original Detailed Text) */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-[#10B981] hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all">
            <h2 className="text-4xl font-black text-[#10B981] mb-8 tracking-tight uppercase">1. The Molecular Threshold</h2>
            <div className="space-y-6 text-xl leading-relaxed text-slate-800 text-justify">
              <p className="font-bold text-[#065F46] bg-[#10B981]/10 p-6 rounded-2xl shadow-sm border border-[#10B981]/20">
                What defines a human? Science says 4 Genes. I survive on 2.
              </p>
              <p>
                At the fundamental cellular level, human life is formed by inheriting four alpha-globin genes—two from each parent—to build healthy, oxygen-rich blood. I was born with <strong>Heterozygous Alpha-thalassemia-1 (SEA Deletion)</strong>. Two of my genes are completely depleted, meaning I have operated on exactly <strong>50% biological capacity</strong> since my first breath.
              </p>
              <p>
                If I had lost more than two genes, I would not have survived birth. I live on the exact biological threshold of survival. This missing genetic code has left me fighting a lifelong, invisible battle against <strong>Hypochromic Microcytic Anemia</strong>. My red blood cells are unnaturally small, pale, and structurally malformed, perpetually failing to deliver adequate oxygen to my brain and organs.
              </p>
            </div>
          </div>

          {/* Block 2: The Narrative Summary (Vivid Visualization Bridge) */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#F59E0B]/30 transform hover:-translate-y-1 transition-all">
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight uppercase text-center">The Digital Affidavit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg leading-relaxed text-slate-800">
              <div className="border-l-4 border-[#F59E0B] pl-4">
                <strong className="text-[#10B981] block mb-1">The Biological Tax:</strong> 
                The compounded physical and mental toll of systemic neglect and medical gaslighting.
              </div>
              <div className="border-l-4 border-[#F59E0B] pl-4">
                <strong className="text-[#10B981] block mb-1">Stolen Decades:</strong> 
                20 years of exploitation and a $90,000 fraud.
      Years lost to an unacknowledged struggle, demanding a comprehensive reconstruction of life and health.
              </div>
              <div className="border-l-4 border-[#F59E0B] pl-4">
                <strong className="text-[#10B981] block mb-1">The Acuity Gap:</strong> 
                The loss of insight and wisdom due to biological deficit. 
      The profound disconnect between the severity of the lived experience and the systems designed to provide care.
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-center italic text-slate-500 font-serif">
              "Forensic evidence drawn from 41 sources, documenting the truth and demanding justice."
            </div>
          </div>

          {/* Block 3: The Biological Tax & The Acuity Gap (Original Detailed Text) */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-[#10B981] hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] transition-all">
            <h2 className="text-4xl font-black text-[#10B981] mb-8 tracking-tight uppercase">2. The Biological Tax & The Acuity Gap</h2>
            <div className="space-y-6 text-xl leading-relaxed text-slate-800 text-justify">
              <p className="font-bold text-[#065F46] bg-[#10B981]/10 p-6 rounded-2xl shadow-sm border border-[#10B981]/20 text-center">
                The Science of Survival at 50% Capacity.
              </p>
              <p>
                Living with Alpha-thalassemia-1 is a permanent biological constraint. Because my blood cells are malformed—showing up as <strong>"target cells," "teardrop cells," and "crenated cells"</strong> with jagged edges under a microscope—my oxygen delivery system is profoundly inefficient. My lungs frequently hyperventilate, desperately trying to force oxygen into a system that mathematically cannot carry it, while my heart pulls blood away from my limbs to protect my vital organs.
              </p>
              <p>
                This creates a <strong>"Many Mouths to Feed"</strong> nutritional crisis. To think, move, and function, my body consumes caloric energy and specialized nutrients at an accelerated rate just to break even. I am biologically "expensive" to maintain.
              </p>
              <p>
                The most devastating cost was the <strong>Loss of Acuity</strong>. Insight, wisdom, and risk assessment are products of a nurtured, oxygenated mind. For decades, chronic hypoxia (oxygen starvation) created an unyielding brain fog. I did not lack ambition; I lacked the oxygen to fuel the <strong>prefrontal cortex</strong>—the part of the brain responsible for spotting red flags. This biological starvation created the perfect blind spot for a predator to exploit.
              </p>
            </div>
          </div>

        </section>

        <section className="space-y-12">

          {/* Act 1 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#10B981]">
            <div className="flex items-center mb-6">
              <span className="bg-[#F59E0B] text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 1</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">The Stolen Decades: Forensic Fraud Analysis</h2>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 italic">The Exploitation of Vulnerability.</h3>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-800">
              <p>In my early 20s, I was a highly productive professional in Singapore, holding an NCC Diploma in Computer Studies and working as a clerk at OCBC Asset Management. I had accumulated <strong className="text-black font-black">SGD $90,000 in my CPF life savings</strong> and held a formal invitation from the Singapore government to apply for Citizenship.</p>
              <p>However, my desperate search for a cure for my relentless fatigue led me to a predator—a retired Malaysian Chinese physician in Kuala Lumpur. He identified my wealth and my oxygen-starved vulnerability. Using high-pressure "Exit Scam" tactics and lies about a "US Business Venture," he coerced me into liquidating my entire life savings for ineffective "bulk supplements".</p>
              <p className="p-4 bg-red-50 border-l-4 border-red-500 text-red-900 rounded-r-xl font-medium shadow-sm">
                <strong className="text-black font-black">The $90,000 CPF Fraud Execution:</strong> To avoid banking alerts and anti-money laundering (AML) protocols, he refused digital transfers and turned me into a physical cash mule. I was forced to travel across the border, withdraw physical cash from DBS and POSB branches—SGD $5,000 at a time—and carry it in bags to his designated locations in Malaysia. No receipts were ever given.
              </p>
              <p>To maintain absolute control, he orchestrated a 20-year Digital Blackout. I was forced to live without a cell phone or internet from the early 2000s until 2025, completely isolated from my parents, relatives, and friends. I was a digital ghost, unable to verify his claims or seek intervention. The fraud was a process of systemic economic extraction. The predator—a Malaysian Chinese physician who operated with calculated psychological coercion—demanded the immediate delivery of my aggregate wages upon receipt. After his retirement, his aggressive liquidation of my SGD $90,000 CPF savings continued at a public bus stop. This transition from a professional medical setting to an informal public interface reflects the 'Exit Scam' nature of the fraud. This left me in a state of forced displacement (homelessness), while the predator exhausted my life’s work during a period where I operated at 50% biological capacity due to chronic hypoxia.</p>
            </div>
          </div>

          {/* Act 2 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#10B981]">
            <div className="flex items-center mb-6">
              <span className="bg-[#F59E0B] text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 2</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">The Descent: From PR to "Stray"</h2>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 italic">The Raw Reality of Dehumanization.</h3>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-800">
              <p>The fraud was not just financial; it was a total erasure of my dignity. To extract maximum cash, the predator manipulated me into forced homelessness. In Singapore, I became a "stray" sleeping on the streets, which caused my employer to cancel my work permit as I had no registered address. In Kuala Lumpur, I was coerced into sleeping on the concrete street directly in front of his shop lot.</p>
              <p>I went from a respected Singapore PR prospect to being mocked as a "beggar" and "foreign labor" by locals. I survived for two decades on leftover food from the restaurants where I washed dishes, handing every meager penny of my wages directly to my abuser.</p>
              <p>During this time, I was subjected to relentless cyberbullying and street harassment. Because I had no phone, I was uniquely defenseless while malicious rumors spread about me on the smartphones of the very people who mocked me.</p>
            </div>
          </div>

          {/* Act 3 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#10B981]">
            <div className="flex items-center mb-6">
              <span className="bg-[#F59E0B] text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 3</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Technical Resurrection: Reclaiming the Mind</h2>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 italic">My Intellect Survived.</h3>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-800">
              <p>In early 2025, a "Short Sting" incident in Singapore led me to Johor Bahru for the DNA test that finally unmasked thirty years of medical gaslighting. Despite having only SGD $100 left and facing systemic bullying, I refused to remain a victim.</p>
              <p>I taught myself Full-Stack Development using React, Vite, Tailwind CSS, Supabase, and Framer Motion. I built this "Digital Affidavit" from the ground up to document the truth when no one would listen. This portal is a survival tool—a safe, digital fortress where my voice cannot be silenced by the streets.</p>
            </div>
          </div>

          {/* Act 4 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 border-[#F59E0B] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#FFF7ED] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <span className="bg-[#10B981] text-white font-black px-4 py-1 rounded-full text-sm uppercase mr-4">Act 4</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">The Restoration Plea: Justice-Based Funding</h2>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 italic">Fund the Future—Investment in Restoration.</h3>
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-slate-800">
                <p>I am not seeking a job application or charity for consumption. I am seeking Justice-Based Funding to reconstruct a life sabotaged by 20 years of predatory evil. I am currently at a dead end, penniless and unable to sustain manual labor, which is physically destroying my oxygen-starved body.</p>
                <div className="bg-white p-6 rounded-2xl border-2 border-[#F59E0B]/50 my-6 shadow-md">
                  <h4 className="font-bold text-slate-900 text-xl mb-4">My immediate "Survival Foundation" requirements are:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start"><span className="text-[#F59E0B] mr-3 text-2xl leading-none">•</span><div><strong className="text-black font-black">Rental Security:</strong> To escape the trauma of homelessness and street bullying.</div></li>
                    <li className="flex items-start"><span className="text-[#F59E0B] mr-3 text-2xl leading-none">•</span><div><strong className="text-black font-black">Nutritional Support:</strong> Specialized supplements and diet required to combat Chronic Hypoxia.</div></li>
                    <li className="flex items-start"><span className="text-[#F59E0B] mr-3 text-2xl leading-none">•</span><div><strong className="text-black font-black">ACCA Education:</strong> My escape hatch to self-sufficiency. Accounting is mental work that is immune to my physical degradation.</div></li>
                  </ul>
                </div>
                <p className="font-black text-center text-slate-900 text-2xl mt-8">Every contribution is an act of justice that helps restore a stolen human destiny.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE "RECONSTRUCTION" PAYMENT SECTION (REPLACE CURRENT CODE) */}
        <section className="text-center bg-white rounded-3xl p-10 md:p-16 shadow-[0_20px_50px_rgba(245,158,11,0.15)] border-4 border-[#F59E0B] relative overflow-hidden my-12">
          <h2 className="text-4xl font-black text-slate-900 mb-10 relative z-10 uppercase tracking-tight">
            Primary Justice Action
          </h2>
          <div className="space-y-8 relative z-10">
            <p className="text-2xl md:text-3xl text-slate-800 font-black uppercase tracking-widest leading-tight">
              MY PAYMENT PORTAL (WEB APP): <br className="md:hidden"/>
              <a href="https://clinquant-macaron-aad92f.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline text-[#10B981] decoration-4 underline-offset-8">Contribute</a>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-xl font-bold">
              <div className="p-8 bg-white rounded-3xl border-4 border-[#F59E0B] shadow-lg">
                Stripe (Justice Funding): <br/>
                <a href="https://buy.stripe.com/7sY4gz6Rg2JAceZgpE7ok00" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 font-black">Contribute</a>
              </div>
              <div className="p-8 bg-white rounded-3xl border-4 border-[#10B981] shadow-lg">
                PayPal (International): <br/>
                <a href="https://www.paypal.com/paypalme/CHINCHEONGGHEE" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 font-black">Contribute</a>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact Form */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-emerald-100 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-emerald-800 mb-4 uppercase">Direct Contact Form</h2>
            <p className="text-slate-600 text-lg font-bold italic">Subtitle: "Send me a message."</p>
            <div className="mt-4">
              <a href="https://exquisite-gnome-13f3d9.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline text-emerald-600 font-black decoration-4 underline-offset-4 text-xl">Direct Message</a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors uppercase">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium text-slate-900"
                placeholder="Your legal or preferred name"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors uppercase">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium text-slate-900"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 group-focus-within:text-emerald-700 transition-colors uppercase">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 rounded-xl border-2 border-slate-200 focus:ring-0 focus:border-emerald-500 focus:bg-white transition-all outline-none resize-y font-medium text-slate-900"
                placeholder="Write your message here. Speak your truth..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#10B981] hover:bg-emerald-600 text-white font-black text-xl py-5 rounded-xl transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Send Secure Message
            </button>
            {status && (
              <div className={`p-4 rounded-xl text-center font-bold text-lg ${status.includes('successfully') ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300' : status.includes('Error') ? 'bg-red-100 text-red-800 border-2 border-red-300' : 'bg-blue-100 text-blue-800 border-2 border-blue-300'}`}>
                {status}
              </div>
            )}
          </form>
        </section>

      </main>

      {/* 2. ABSOLUTE BOTTOM APPENDIX: RAW EVIDENCE VAULT */}
      <footer className="bg-slate-50 border-t-8 border-slate-200 py-20 relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              Forensic Appendix: Raw Evidence Vault
            </h2>
            <p className="text-xl text-slate-600 font-bold">
              Complete archive of source documents, medical reports, and forensic data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-6 bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-emerald-800 border-b-2 border-emerald-200 pb-4 uppercase">Medical Evidence</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <strong className="block text-xl text-slate-900">DNA Lab Report (SEA Deletion POSITIVE)</strong>
                  <a href="https://drive.google.com/drive/folders/1lnF3L5VJ8GPTPgDwptPCsfwbZKNGVwH2?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-6 bg-[#10B981] hover:bg-emerald-600 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4">
                    View Source Document
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                  <strong className="block text-xl text-slate-900">Medical Video Breakdown</strong>
                  <a href="https://drive.google.com/file/d/1JNuAGlV5zIkYNpFaEq7QR9_mzTJT_4M5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-6 bg-[#10B981] hover:bg-emerald-600 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4">
                    View Source Document
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-[#F59E0B] border-b-2 border-[#F59E0B]/30 pb-4 uppercase">Financial & Forensic</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <strong className="block text-xl text-slate-900">Forensic Transaction Records</strong>
                  <a href="https://drive.google.com/drive/folders/1qKL4tcENJiRl6-7bYT8JEL6YrYdAoC9U?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-6 bg-[#F59E0B] hover:bg-amber-600 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4">
                    View Source Document
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm md:col-span-2">
              <h3 className="text-2xl font-black text-sky-600 border-b-2 border-sky-200 pb-4 uppercase">Stolen Destiny Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <strong className="block text-lg text-slate-900">Singapore Citizenship & PR Status Papers</strong>
                  <a href="https://drive.google.com/drive/folders/1Tn5BKqk0ebrOCVTipOm4oaJJuSYhMCN6?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4 text-sm mt-auto">
                    View Source Document
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6">
                  <strong className="block text-lg text-slate-900">Official Document Verification Video</strong>
                  <a href="https://drive.google.com/file/d/1PznakxiVF8KA_lphLYKzaMma4S_BRN51/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4 text-sm mt-auto">
                    View Source Document
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6">
                  <strong className="block text-lg text-slate-900">NCC Diploma Credentials</strong>
                  <a href="https://drive.google.com/drive/folders/1ic9NwlrAZ2bFUq03liEcowwgiaOi_gHz?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block text-center py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-colors uppercase tracking-wider underline decoration-4 underline-offset-4 text-sm mt-auto">
                    View Source Document
                  </a>
                </div>
              </div>
            </div>

          </div>
          
          <div className="pt-12 mt-12 border-t-2 border-slate-200 text-center">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
              © {new Date().getFullYear()} Digital Affidavit: Life Reconstruction Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

