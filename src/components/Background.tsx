import React, { useEffect, useState } from 'react';

const Background = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-950" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[15%] right-[10%] w-24 h-24 rotate-45 border border-indigo-800 opacity-30"
          style={{
            transform: `translateY(${scrollY * -0.08}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute top-[40%] left-[5%] w-16 h-16 rotate-45 border border-indigo-700 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute top-[25%] left-[35%] w-10 h-10 rotate-45 bg-indigo-900 opacity-15"
          style={{
            transform: `translateY(${scrollY * -0.04}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute bottom-[15%] right-[25%] w-20 h-20 rotate-45 border-2 border-indigo-700 opacity-25"
          style={{
            transform: `translateY(${scrollY * 0.07}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute bottom-[35%] left-[15%] w-12 h-12 rotate-45 bg-indigo-800 opacity-15"
          style={{
            transform: `translateY(${scrollY * -0.06}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute top-[60%] right-[5%] w-8 h-8 rotate-45 bg-indigo-900 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.09}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute top-[70%] left-[45%] w-28 h-28 rotate-45 border border-indigo-600 opacity-20"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute top-[8%] left-[55%] w-14 h-14 rotate-45 bg-indigo-800 opacity-10"
          style={{
            transform: `translateY(${scrollY * 0.06}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute top-[12%] left-[75%] w-6 h-6 rotate-45 border-2 border-indigo-500 opacity-25"
          style={{
            transform: `translateY(${scrollY * -0.07}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute top-[45%] right-[22%] w-11 h-11 rotate-45 bg-indigo-700 opacity-15"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
            transition: 'transform 0.1s linear',
          }}
        />

        <div
          className="absolute bottom-[22%] left-[28%] w-16 h-16 rotate-45 border border-indigo-600 opacity-20"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
            transition: 'transform 0.1s linear',
          }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-25 pointer-events-none">
        <div
          className="absolute top-1/4 right-[-7%] w-[45%] h-[50%] rounded-full bg-indigo-800 blur-[110px]"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`,
            transition: 'transform 0.1s linear',
          }}
        />
        <div
          className="absolute bottom-[-7%] left-[-7%] w-[45%] h-[50%] rounded-full bg-indigo-700 blur-[110px]"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
            transition: 'transform 0.1s linear',
          }}
        />
      </div>
    </div>
  );
};

export default Background;
