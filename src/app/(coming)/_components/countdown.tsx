"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDate = new Date("2025-01-11T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky w-full">
      <div className="flex justify-center container mx-auto px-4 py-10 md:px-6 lg:px-8 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div className="flex items-center" key={unit}>
            <Card key={unit} className="w-24">
              <CardContent className="p-4">
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-sm text-muted-foreground capitalize">
                  {unit}
                </div>
              </CardContent>
            </Card>
            {unit === "seconds" ? (
              ""
            ) : (
              <span className="font-bold text-xl mx-3">-</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
