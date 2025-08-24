import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Title from "../title/Title";
import ContactLeft from "./ContactLeft";

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
    if (form.email && !/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(form.email)) newErrors.email = "Enter a valid email address.";
    if (form.subject && form.subject.length < 2) newErrors.subject = "Subject must be at least 2 characters.";
    if (form.message && form.message.length < 5) newErrors.message = "Message must be at least 5 characters.";
    setErrors(newErrors);
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0 || Object.values(form).some((v) => !v)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const getInputClass = (field: keyof FormState) => `contactInput ${errors[field] ? "outline-designColor border-red-500" : ""}`;
  const getTextAreaClass = (field: keyof FormState) => `contactTextArea ${errors[field] ? "outline-designColor border-red-500" : ""}`;

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="CONTACT" des="Contact With Me" />
      </div>

      <div className="w-full flex flex-col lgl:flex-row justify-between gap-8">
        <ContactLeft />

        <motion.div
          className="w-full lgl:w-[60%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne"
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
                className="py-3 text-center text-base tracking-wide text-orange-500"
              >
                Please fix the highlighted fields below.
              </motion.p>
            )}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="py-3 text-center text-base tracking-wide text-green-500"
              >
                Your message has been sent successfully!
              </motion.p>
            )}
          </AnimatePresence>

          <motion.form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend}>
            {/* Name & Phone */}
            <motion.div className="w-full flex flex-col lgl:flex-row gap-10" variants={fieldVariants}>
              <motion.div className="w-full lgl:w-1/2 flex flex-col gap-1 relative">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className={getInputClass("username")}
                  type="text"
                  disabled={status === "sending"}
                />
                <AnimatePresence>
                  {errors.username && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-red-500 absolute top-full mt-1"
                    >
                      {errors.username}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className="w-full lgl:w-1/2 flex flex-col gap-1 relative">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                <input
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className={getInputClass("phoneNumber")}
                  type="text"
                  disabled={status === "sending"}
                />
                <AnimatePresence>
                  {errors.phoneNumber && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-red-500 absolute top-full mt-1"
                    >
                      {errors.phoneNumber}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Email */}
            <motion.div className="flex flex-col gap-1 relative" variants={fieldVariants}>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className={getInputClass("email")}
                type="email"
                disabled={status === "sending"}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-500 absolute top-full mt-1"
                  >
                    {errors.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Subject */}
            <motion.div className="flex flex-col gap-1 relative" variants={fieldVariants}>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={getInputClass("subject")}
                type="text"
                disabled={status === "sending"}
              />
              <AnimatePresence>
                {errors.subject && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-500 absolute top-full mt-1"
                  >
                    {errors.subject}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Message */}
            <motion.div className="flex flex-col gap-1 relative" variants={fieldVariants}>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className={getTextAreaClass("message")}
                rows={6}
                disabled={status === "sending"}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs text-red-500 absolute top-full mt-1"
                  >
                    {errors.message}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Send Button */}
            <motion.button
              type="submit"
              className="w-full h-12 bg-designColor rounded-lg text-black text-base uppercase tracking-wider hover:brightness-110 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
