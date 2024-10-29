// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  hide: {
    opacity: 0,
    y: -50,
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.4 },
  }),
};

export default function ButtonBlock() {
  return (
    <main className="cont mt-5 flex flex-col gap-5 text-center text-white">
      <motion.div
        custom={0}
        initial="hide"
        animate="visible"
        variants={variants}
        className="flex w-full gap-5"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          href="#"
          className="inline-block w-1/2 rounded-lg border bg-[#9b69f1] py-5 text-xl uppercase shadow-2xl"
        >
          договора
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          href="#"
          className="inline-block w-1/2 rounded-lg border bg-[#5f14e0] py-5 text-xl uppercase shadow-2xl"
        >
          faq
        </motion.a>
      </motion.div>
      <motion.div
        custom={1}
        initial="hide"
        animate="visible"
        variants={variants}
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          href="#"
          className="inline-block w-full rounded-lg border bg-[#f1697a] py-5 text-xl uppercase shadow-2xl"
        >
          тарифи
        </motion.a>
      </motion.div>
      <motion.div
        custom={2}
        initial="hide"
        animate="visible"
        variants={variants}
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          href="#"
          className="inline-block w-full rounded-lg border bg-[#e0142f] py-10 text-xl uppercase shadow-2xl"
        >
          особистий кабінет
        </motion.a>
      </motion.div>
      <motion.div
        custom={3}
        initial="hide"
        animate="visible"
        variants={variants}
        className="flex w-full gap-5"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          href="#"
          className="inline-block w-1/2 rounded-lg border bg-[#69a3f1] py-5 text-xl uppercase shadow-2xl"
        >
          новини
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          href="#"
          className="inline-block w-1/2 rounded-lg border bg-[#146be0] py-5 text-xl uppercase shadow-2xl"
        >
          контакти
        </motion.a>
      </motion.div>
      <motion.div
        custom={4}
        initial="hide"
        animate="visible"
        variants={variants}
        className="flex w-full gap-5"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          href="#"
          to="#"
          className="inline-block w-1/2 rounded-lg border bg-[#f1bf69] py-5 text-xl uppercase shadow-2xl"
        >
          порядок оплати
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          href="#"
          to="#"
          className="inline-block w-1/2 rounded-lg border bg-[#e09514] py-5 text-xl uppercase shadow-2xl"
        >
          порядок приєднання
        </motion.a>
      </motion.div>
    </main>
  );
}
