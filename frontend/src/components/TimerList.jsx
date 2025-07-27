import { useEffect, useState } from "react";

export default function TimerList() {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/timer/demo-store")
      .then(res => res.json())
      .then(data => setTimer(data));
  }, []);

  return (
    <div>
      <h2>Active Timer</h2>
      {timer ? (
        <pre>{JSON.stringify(timer, null, 2)}</pre>
      ) : (
        <p>No active timer</p>
      )}
    </div>
  );
}
