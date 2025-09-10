import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import emailjs from "@emailjs/browser";
import Title from "../title/Title";

interface FormState {
  username: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
}
type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  username: "",
  phoneNumber: "",
  email: "",
  subject: "",
  message: "",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const newErrors: FormErrors = {};
    if (form.username && form.username.length < 2) newErrors.username = "Name must be at least 2 characters.";
    if (form.phoneNumber && !/^\+?\d{7,15}$/.test(form.phoneNumber)) newErrors.phoneNumber = "Enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Enter a valid email address.";
    if (form.subject && form.subject.length < 2) newErrors.subject = "Subject must be at least 2 characters.";
    if (form.message && form.message.length < 5) newErrors.message = "Message must be at least 5 characters.";
    setErrors(newErrors);
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0 || Object.values(form).some((v) => !v)) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        "service_z4g2lzt",
        "template_2jef6by",
        {
          from_name: form.username,
          from_email: form.email,
          phone: form.phoneNumber,
          subject: form.subject,
          message: form.message,
        },
        "sxm3YMLm6yzbC5HDm"
      );
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="CONTACT" des="Contact With Me" />

      <motion.div
        className="w-full max-w-[800px] mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lgl:p-10 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-3 text-center text-base font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            >
              Please fix the highlighted fields or try again later.
            </motion.p>
          )}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-3 text-center text-base font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400"
            >
              Your message has been sent successfully!
            </motion.p>
          )}
        </AnimatePresence>

        <motion.form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend}>
          <motion.div className="w-full flex flex-col lgl:flex-row gap-6" variants={fieldVariants}>
            <FormField
              label="Your Name"
              name="username"
              value={form.username}
              onChange={handleChange}
              error={errors.username}
              disabled={status === "sending"}
            />
            <FormField
              label="Phone Number"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
              disabled={status === "sending"}
            />
          </motion.div>

          <FormField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            disabled={status === "sending"}
          />

          <FormField
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            error={errors.subject}
            disabled={status === "sending"}
          />

          <FormField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            error={errors.message}
            disabled={status === "sending"}
            isTextarea
          />

          <motion.button
            type="submit"
            className="w-full h-12 rounded-lg font-semibold uppercase tracking-wide text-black 
             bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
             bg-[length:200%_200%] animate-gradient 
             shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

const FormField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  type?: string;
  isTextarea?: boolean;
}> = ({ label, name, value, onChange, error, disabled, type = "text", isTextarea }) => {
  const baseClass =
    "w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-designColor transition-all duration-300";
  const errorClass = error ? "border-red-500 text-red-300" : "";
  return (
    <motion.div className="w-full flex flex-col gap-1 relative group" variants={fieldVariants}>
      <label className="text-sm text-gray-400 uppercase tracking-wide">{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`${baseClass} ${errorClass} group-hover:border-designColor/40`}
          rows={6}
          disabled={disabled}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className={`${baseClass} ${errorClass} group-hover:border-designColor/40`}
          disabled={disabled}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-red-500 absolute top-full mt-1"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
