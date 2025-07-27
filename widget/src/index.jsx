import { h, render } from "preact";
import Countdown from "./countdown.jsx";

async function initCountdown() {
  const res = await fetch("http://localhost:5000/api/timer/demo-store");
  const data = await res.json();
console.log(data);
  if (data && data.endDate) {
    const root = document.createElement("div");
    root.id = "countdown-timer";
    document.body.appendChild(root);

    render(<Countdown promotionText={data.promotionText} endDate={data.endDate} />, root);
  }
}

initCountdown();
