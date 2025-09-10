import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { logo } from "../../assets";
import { navLinksdata } from "../../constants";
import type { NavLink } from "../../utils/types";

// Generic motion variants
const fadeSlide = (axis: "x" | "y" = "x", distance = 20, delay = 0): Variants => ({
  hidden: axis === "x" ? { opacity: 0, x: -distance } : { opacity: 0, y: -distance },
  visible:
    axis === "x"
      ? { opacity: 1, x: 0, transition: { delay, type: "spring", stiffness: 300 } }
      : { opacity: 1, y: 0, transition: { delay, type: "spring", stiffness: 300 } },
});

// Generic staggered container
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Social icons
const socialIcons = [
  { Icon: FaFacebookF, color: "#1877F2" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedinIn, color: "#0A66C2" },
];

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="w-full h-20 sticky top-0 z-50 bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border-b border-white/20 flex justify-between items-center font-titleFont px-6 shadow-lg">
      <nav className="hidden mdl:flex justify-center items-center gap-8 lg:gap-12 w-full">
        {navLinksdata.map((link: NavLink, i) => (
          <motion.li
            key={link._id}
            className="flex items-center gap-2 text-base font-bold cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:scale-105 hover:brightness-125"
            variants={fadeSlide("x", 20, i * 0.1)}
          >
            {link.icon && <link.icon className="text-pink-400" />}
            <Link to={link.link} spy smooth offset={-70} duration={500}>
              {link.title}
            </Link>
          </motion.li>
        ))}
      </nav>

      <button
        onClick={toggleMenu}
        className="mdl:hidden w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FiMenu className="text-2xl" />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.aside
              ref={menuRef}
              className="fixed top-0 left-0 w-4/5 h-screen bg-[rgba(0,0,0,0.6)] backdrop-blur-xl p-6 overflow-y-auto scrollbar-hide z-50 rounded-r-3xl shadow-2xl shadow-pink-500/40 border border-white/20"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-8 py-4 relative">
                <motion.img
                  src={logo}
                  alt="logo"
                  className="w-32 mx-auto rounded-lg shadow-md bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient-x"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />

                <motion.p
                  className="text-sm text-white/70 mt-2 text-center"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum soluta perspiciatis molestias enim cum repellat.
                </motion.p>

                <motion.ul className="flex flex-col gap-4 mt-4" initial="hidden" animate="visible" variants={staggerContainer}>
                  {navLinksdata.map((link: NavLink, i) => (
                    <motion.li
                      key={link._id}
                      className="flex items-center gap-2 text-base font-bold cursor-pointer px-4 py-2 rounded-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition-all duration-300 hover:scale-105 hover:brightness-125"
                      variants={fadeSlide("x", 20, i * 0.1)}
                    >
                      {link.icon && <link.icon className="text-pink-400" />}
                      <Link to={link.link} spy smooth offset={-70} duration={500} onClick={() => setIsMenuOpen(false)}>
                        {link.title}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div className="flex flex-col gap-4 mt-6 items-center" initial="hidden" animate="visible" variants={staggerContainer}>
                  <motion.h2 className="text-base uppercase font-titleFont mb-3 text-white/70">Find me in</motion.h2>
                  <div className="flex gap-4">
                    {socialIcons.map(({ Icon, color }, i) => (
                      <motion.span
                        key={i}
                        className="p-3 rounded-full bg-white/10 cursor-pointer transition-all duration-300"
                        whileHover={{ scale: 1.25, backgroundColor: color, color: "#fff", boxShadow: `0 0 20px ${color}` }}
                        variants={fadeSlide("y", 10, i * 0.1)}
                      >
                        <Icon />
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.button
                  onClick={closeMenu}
                  className="absolute top-0 right-0 text-white/70 hover:text-pink-400 text-3xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <MdClose />
                </motion.button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
