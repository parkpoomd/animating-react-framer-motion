import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const Accordion = () => {
  const [isToggle, setToggle] = React.useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setToggle((prevState) => !prevState)}>
        The Heading
      </h2>
      <AnimatePresence>
        {isToggle && (
          <motion.div
            variants={variants}
            style={{ overflow: 'hidden' }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              eveniet rem ex ipsam a exercitationem, saepe, dolore nulla
              voluptate placeat facilis id sit error, quia delectus minus?
              Reprehenderit, voluptatum perferendis.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
