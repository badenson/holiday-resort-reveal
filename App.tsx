
import React from 'react';
import Snowfall from './components/Snowfall';
import HolidayCard from './components/HolidayCard';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden p-2 sm:p-4 md:p-8">
      {/* Dynamic Snowflake Background - Fixed Position */}
      <div className="fixed inset-0 pointer-events-none">
        <Snowfall count={60} />
      </div>
      
      {/* The Greeting Card - now optimized to fit on one screen */}
      <HolidayCard />
    </div>
  );
};

export default App;
