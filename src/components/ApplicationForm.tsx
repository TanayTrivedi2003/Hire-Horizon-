import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send, ShieldCheck, FileText, Link2, Lock } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const FEATURES = [
  { icon: ShieldCheck, text: "Free, no-obligation career consultation" },
  { icon: FileText, text: "Resume review & interview prep included" },
  { icon: Link2, text: "Direct introductions to hiring banks" },
  { icon: Lock, text: "Confidential and secure — your data stays with us" },
];

const ROLES = [
  "Branch Manager",
  "Assistant Manager",
  "Deputy Manager",
  "Relationship Manager",
  "Operations Executive",
  "Customer Service Executive",
];

const WEBHOOK_URL =
  "https://hook.us2.make.com/icrly4txly1o3np5uo98o8sn93dojctu";

export default function ApplicationForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    qualification: "",
    role: "",
    city: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.mobile.trim()) e.mobile = "Required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile))
      e.mobile = "Enter a valid 10 digit mobile number";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.qualification.trim()) e.qualification = "Required";
    if (!form.role) e.role = "Required";
    if (!form.city.trim()) e.city = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    if (!validate()) return;

    console.log("Submitting Form");
    console.log(form);
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.name,
          mobile: form.mobile,
          email: form.email,
          qualification: form.qualification,
          preferredRole: form.role,
          city: form.city,
          submittedAt: new Date().toLocaleString("en-IN"),
        }),
      });

      console.log(response.status);
      console.log(await response.text());

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSent(true);

      setForm({
        name: "",
        mobile: "",
        email: "",
        qualification: "",
        role: "",
        city: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };
  const field = (
    name: keyof typeof form,
    label: string,
    type = "text",
    select = false,
  ) => (
    <div className="relative">
      {select ? (
        <select
          id={name}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="peer w-full bg-white/5 border border-white/15 rounded-xl px-4 pt-6 pb-2 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors appearance-none"
        >
          <option value="" className="bg-navy-950">
            Select a role
          </option>
          {ROLES.map((r) => (
            <option key={r} value={r} className="bg-navy-950">
              {r}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          value={form[name]}
          placeholder=" "
          maxLength={name === "mobile" ? 10 : undefined}
          inputMode={name === "mobile" ? "numeric" : undefined}
          onChange={(e) => {
            let value = e.target.value;

            if (name === "mobile") {
              value = value.replace(/\D/g, "").slice(0, 10);
            }

            setForm({
              ...form,
              [name]: value,
            });
          }}
          className="peer w-full bg-white/5 border border-white/15 rounded-xl px-4 pt-6 pb-2 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
        />
      )}
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-xs text-white/50 transition-all peer-focus:text-gold-400"
      >
        {label}
      </label>
      {errors[name] && (
        <p className="text-xs text-red-400 mt-1.5 ml-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <section
      id="apply"
      className="relative py-24 md:py-32 bg-navy-950 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />

      <div className="ctn relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Start Your Banking Career Today"
              title={
                <>
                  One short form.
                  <br />A{" "}
                  <span className="text-gold-gradient italic">
                    career-defining call.
                  </span>
                </>
              }
              description="Share your details and a dedicated banking recruiter will reach out within 24 hours with role matches across our 50+ banking partners."
              dark
            />

            <div className="mt-10 space-y-3">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0">
                    <f.icon className="w-4.5 h-4.5 text-gold-400" />
                  </div>
                  <span className="text-white/80 text-sm">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={submit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="card-glass p-7 md:p-10 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {field("name", "Full Name *")}
                {field("mobile", "Mobile Number *", "tel")}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {field("email", "Email *", "email")}
                {field("qualification", "Qualification *")}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {field("role", "Preferred Job Role *", "text", true)}
                {field("city", "City *")}
              </div>

              <button
                type="submit"
                disabled={sent}
                className="btn-primary w-full mt-2 disabled:opacity-80"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" /> Application Received
                  </>
                ) : (
                  <>
                    Start Your Banking Career Today <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-xs text-white/40 text-center">
                By submitting you agree to be contacted by Hire Horizon Group.
                Your data stays confidential.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
