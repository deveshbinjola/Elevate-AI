import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Video, ExternalLink, Calendar as CalendarIcon, Loader2, AlertCircle } from 'lucide-react';

interface IntakeFormProps {
  onClose: () => void;
}

const IntakeForm: React.FC<IntakeFormProps> = ({ onClose }) => {
  const [step, setStep] = useState<'form' | 'booking'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: ''
  });

  const zoomLink = "https://us06web.zoom.us/j/2398971610?pwd=Q0pSZU9Help6dENiK2NvWWE4bXlTUT09";
  const calendlyBaseUrl = "https://calendly.com/sunnybinjola/discovery-call"; 
  
  /**
   * PRODUCTION WEBHOOK:
   * Updated to use the stable production endpoint instead of the test listener.
   */
  const webhookUrl = "https://n8n.srv1219015.hstgr.cloud/webhook/1dc983cf-c346-40f2-93a6-59047b0818a7";

  // Listen for Calendly completion to bring user back home
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === 'calendly.event_scheduled') {
        // Wait 2 seconds so they see the success message, then return to home
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, [onClose]);

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: window.location.hostname,
      formType: "Elevate AI Lead Capture",
      userAgent: navigator.userAgent
    };

    /**
     * OPTIMISTIC LEAD CAPTURE:
     * We attempt to log the lead data, but prioritize the user journey.
     * If the webhook is unreachable, we move to the calendar anyway.
     */
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); 

      // Give the UI at least 800ms of "Processing" state for feedback
      const minWait = new Promise(resolve => setTimeout(resolve, 800));

      const trackingCall = fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
        mode: 'cors' 
      }).catch(() => null); // Silent fail on network errors

      await Promise.all([trackingCall, minWait]);
      clearTimeout(timeoutId);

    } catch (err) {
      // Silently proceed
    } finally {
      setStep('booking');
      setIsSubmitting(false);
    }
  };

  const getCalendlyUrl = () => {
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      hide_event_type_details: '1',
      hide_gdpr_banner: '1',
      primary_color: '00ff41'
    });
    return `${calendlyBaseUrl}?${params.toString()}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-2xl overflow-y-auto">
      <div className={`bg-white w-full ${step === 'form' ? 'max-w-2xl' : 'max-w-5xl h-[90vh]'} rounded-[48px] shadow-2xl my-auto relative animate-fade-up border border-white/20 flex flex-col transition-all duration-500 ease-in-out`}>
        
        {/* Modal Header */}
        <div className="p-8 md:px-12 md:pt-10 border-b border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-[#008F24] uppercase tracking-[0.2em] mb-1">
                {step === 'form' ? 'Step 1 of 2: Application' : 'Step 2 of 2: Schedule'}
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                {step === 'form' ? 'Ready to Reclaim Clarity?' : 'Pick Your Time'}
                {step === 'booking' && <CalendarIcon size={24} className="text-[#00FF41]" />}
              </h2>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-300 hover:text-slate-950 transition-colors bg-slate-50 rounded-full">
            <X size={28} />
          </button>
        </div>

        {step === 'form' ? (
          <div className="p-10 md:p-12 overflow-y-auto">
            <header className="mb-8">
              <p className="text-slate-500 text-lg font-bold leading-relaxed">
                Before we book, tell us a bit about your mission so we can come prepared to your Discovery Call.
              </p>
            </header>

            <form onSubmit={handleInitialSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    required
                    disabled={isSubmitting}
                    type="text" 
                    placeholder="First & Last Name"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-[#00FF41] outline-none transition-all font-bold disabled:opacity-50"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    required
                    disabled={isSubmitting}
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-[#00FF41] outline-none transition-all font-bold disabled:opacity-50"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input 
                  required
                  disabled={isSubmitting}
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-[#00FF41] outline-none transition-all font-bold disabled:opacity-50"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Vision & Friction</label>
                <textarea 
                  required
                  disabled={isSubmitting}
                  rows={4}
                  placeholder="What are you building and what is slowing you down?"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-300 focus:border-[#00FF41] outline-none transition-all font-bold resize-none disabled:opacity-50"
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-slate-950 text-white rounded-[24px] font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-95 transition-all shadow-2xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={24} className="animate-spin text-[#00FF41]" />
                    Processing...
                  </>
                ) : (
                  <>
                    Continue to Calendar
                    <Send size={24} className="text-[#00FF41]" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-grow flex flex-col relative bg-slate-50/30">
            {/* Zoom Details Strip */}
            <div className="bg-emerald-50 px-8 py-4 flex flex-col sm:flex-row items-center justify-between border-b border-emerald-100 shrink-0 gap-4">
               <div className="flex items-center gap-3 text-emerald-900 text-sm font-black">
                 <div className="w-8 h-8 bg-emerald-200 rounded-lg flex items-center justify-center">
                    <Video size={16} />
                 </div>
                 Discovery Call Zoom Link:
               </div>
               <a 
                href={zoomLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-black text-emerald-950 bg-white px-4 py-2 rounded-xl border border-emerald-200 shadow-sm flex items-center gap-2 hover:bg-emerald-100 transition-colors"
               >
                 Open Personal Room <ExternalLink size={14} />
               </a>
            </div>

            {/* Calendly Inline Widget */}
            <div className="flex-grow">
              <iframe 
                src={getCalendlyUrl()}
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="rounded-b-[48px]"
                title="Calendly Scheduling"
              ></iframe>
            </div>

            {/* Confirmation Reassurance Banner */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full px-8 pointer-events-none">
              <div className="max-w-md mx-auto bg-slate-900 text-white px-6 py-4 rounded-3xl border border-white/10 flex items-center gap-4 text-xs font-extrabold shadow-2xl">
                <div className="bg-[#00FF41] p-2 rounded-full text-slate-950">
                  <CheckCircle2 size={16} />
                </div>
                <span>Google Calendar event & confirmation email will be sent automatically.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntakeForm;