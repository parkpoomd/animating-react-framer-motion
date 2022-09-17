import React from 'react';
import { motion } from 'framer-motion';
import { shuffle } from 'lodash';

const COLORS = [
  'var(--red)',
  'var(--blue)',
  'var(--black)',
  'var(--purp)',
  'var(--green)',
];

export const Squares = () => {
  const [colors, setColors] = React.useState(COLORS);

  return (
    <div>
      <button onClick={() => setColors(shuffle(colors))}>Shuffle</button>
      {colors.map((color) => (
        <motion.div
          key={color}
          positionTransition={{
            damping: 100,
            stiffness: 10,
          }}
          style={{
            background: color,
            height: 100,
            width: 100,
          }}
        />
      ))}
    </div>
  );
};
