import { useState } from "react";
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

// Single NavLink component
const NavLinkItem: React.FC<{ title: string; link: string; onClick?: () => void; custom?: number }> = ({ title, link, onClick, custom = 0 }) => (
  <motion.li
    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer"
    variants={fadeSlide("x", 20, custom * 0.1)}
    whileHover={{ scale: 1.05, color: "#ff014f" }}
  >
    <Link to={link} spy smooth offset={-70} duration={500} onClick={onClick}>
      {title}
    </Link>
  </motion.li>
);

// Social icons
const socialIcons = [
  { Icon: FaFacebookF, color: "#1877F2" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedinIn, color: "#0A66C2" },
];

const SocialLinks: React.FC = () => (
  <div className="flex gap-4">
    {socialIcons.map(({ Icon, color }, i) => (
      <motion.span key={i} className="bannerIcon" variants={fadeSlide("y", 10, i * 0.1)} whileHover={{ scale: 1.2, color }}>
        <Icon />
      </motion.span>
    ))}
  </div>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full h-24 sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b border-b-gray-600 px-4">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-10" />

      {/* Desktop Menu */}
      <nav className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
        {navLinksdata.map((link: NavLink, i) => (
          <NavLinkItem key={link._id} title={link.title} link={link.link} />
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button onClick={toggleMenu} className="text-xl mdl:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full text-designColor">
        <FiMenu />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Mobile Menu */}
            <motion.aside
              className="fixed top-0 left-0 w-4/5 h-screen bg-gray-900 p-4 overflow-y-auto scrollbar-hide z-50 shadow-xl shadow-pink-600/30"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,0,79,0.3)" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <motion.div className="flex flex-col gap-8 py-2 relative">
                <motion.img src={logo} alt="logo" className="w-32" variants={fadeSlide("y", 20, 0.2)} initial="hidden" animate="visible" />
                <motion.p className="text-sm text-gray-400 mt-2" variants={fadeSlide("y", 10, 0.3)} initial="hidden" animate="visible">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum soluta perspiciatis molestias enim cum repellat.
                </motion.p>

                <motion.ul className="flex flex-col gap-4" variants={staggerContainer} initial="hidden" animate="visible">
                  {navLinksdata.map((link: NavLink, i) => (
                    <NavLinkItem key={link._id} title={link.title} link={link.link} onClick={closeMenu} custom={i} />
                  ))}
                </motion.ul>

                <motion.div className="flex flex-col gap-4" variants={staggerContainer} initial="hidden" animate="visible">
                  <motion.h2 className="text-base uppercase font-titleFont mb-4" variants={fadeSlide("y", 10, 0.5)}>
                    Find me in
                  </motion.h2>
                  <SocialLinks />
                </motion.div>

                <motion.button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl"
                  variants={fadeSlide("x", 20, 0.5)}
                >
                  <MdClose />
                </motion.button>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
