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
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center border border-white/10">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4169E1] font-mono">--</div>
            <div className="text-[10px] sm:text-xs text-[#B0B0B0] uppercase tracking-wider mt-1 sm:mt-2">{unit.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center border border-white/10 hover:border-[#4169E1]/30 transition-colors"
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4169E1] font-mono">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-[10px] sm:text-xs text-[#B0B0B0] uppercase tracking-wider mt-1 sm:mt-2">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
