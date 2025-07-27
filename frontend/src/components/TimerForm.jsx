import { useState } from "react";
import { Button, TextField } from "@shopify/polaris";

export default function TimerForm() {
  const [promotionText, setPromotionText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/timer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        storeId: "demo-store",
        startDate,
        endDate,
        promotionText,
      }),
    });
    alert("Timer Created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Promotion Text" value={promotionText} onChange={setPromotionText} />
      <TextField label="Start Date" value={startDate} onChange={setStartDate} type="datetime-local" />
      <TextField label="End Date" value={endDate} onChange={setEndDate} type="datetime-local" />
      <Button submit primary>Create Timer</Button>
    </form>
  );
}
