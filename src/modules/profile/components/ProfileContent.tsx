
'use client';

import { useUser } from '@/lib/context/UserContext';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
}

const AnimatedCounter = ({ from, to, duration = 1 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [from, to, duration]);

  return <span className="text-red-500 font-bold">{count}</span>;
};

const ProfileContent = () => {
  const { favorites, watchlist } = useUser();

  return (
    <div className="container mx-auto px-4 py-10">
      <TextGenerateEffect words="My Profile" className="mb-8 text-center" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900 p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Favorites</h2>
          <p className="text-5xl">
            <AnimatedCounter from={0} to={favorites.length} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-neutral-900 p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Watchlist</h2>
          <p className="text-5xl">
            <AnimatedCounter from={0} to={watchlist.length} />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileContent;
