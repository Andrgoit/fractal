import { Logo } from "src/components";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      // initial={{ y: -100, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.7 }}
      className="border border-gray-400 py-2 shadow-md"
    >
      <div className="cont">
        <Logo />
      </div>
    </motion.header>
  );
}
