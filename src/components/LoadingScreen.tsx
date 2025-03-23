import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/utils/loadingContext';

interface LoadingScreenProps {
  minimumLoadingTime?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ minimumLoadingTime = 1000 }) => {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    const hideLoader = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, minimumLoadingTime);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      return () => window.removeEventListener('load', hideLoader);
    }
  }, [minimumLoadingTime, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex top-0 left-0 items-center justify-center bg-indigo-950 max-w-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <div className="relative inline-block w-24 h-24">
              <div className="absolute top-0 w-full h-full rounded-full border-4 border-indigo-200 opacity-20" />
              <motion.div
                className="absolute top-0 w-full h-full rounded-full border-t-4 border-indigo-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <p className="mt-4 text-indigo-300 font-light animate-bounce">Loading website...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
