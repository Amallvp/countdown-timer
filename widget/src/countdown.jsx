import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function Countdown({ promotionText, endDate }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(endDate).getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft("Offer expired!");
        return;
      }
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div class="countdown-widget" style="font-size:16px; color:red;">
      {promotionText} — {timeLeft}
    </div>
  );
}
