const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-950" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-24 h-24 rotate-45 border border-indigo-800 opacity-30" />
        <div className="absolute top-[40%] left-[5%] w-16 h-16 rotate-45 border border-indigo-700 opacity-30" />
        <div className="absolute top-[25%] left-[35%] w-10 h-10 rotate-45 bg-indigo-900 opacity-15" />
        <div className="absolute bottom-[15%] right-[25%] w-20 h-20 rotate-45 border-2 border-indigo-700 opacity-25" />
        <div className="absolute bottom-[35%] left-[15%] w-12 h-12 rotate-45 bg-indigo-800 opacity-15" />
        <div className="absolute top-[60%] right-[5%] w-8 h-8 rotate-45 bg-indigo-900 opacity-20" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-25 pointer-events-none">
        <div className="absolute top-1/4 right-[-7%] w-[45%] h-[50%] rounded-full bg-indigo-800 blur-[110px]" />
        <div className="absolute bottom-[-7%] left-[-7%] w-[45%] h-[50%] rounded-full bg-indigo-700 blur-[110px]" />
      </div>
    </div>
  );
};

export default Background;
