'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
  label?: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-5 text-center border border-white/20 shadow-lg">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono">--</div>
            <div className="text-[10px] sm:text-xs text-blue-100 uppercase tracking-wider mt-1 sm:mt-2 font-medium">{unit.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-5 text-center border border-white/20 shadow-lg hover:bg-white/20 transition-colors"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono drop-shadow-md">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-blue-100 uppercase tracking-wider mt-1 sm:mt-2 font-medium">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
