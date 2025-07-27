import TimerForm from "../components/TimerForm.jsx";
import TimerList from "../components/TimerList.jsx";

const Dashboard = ()=> {
 return (
    <div style={{ padding: "2rem" }}>
      <h1>Countdown Timers</h1>
      <TimerForm />
      <hr style={{ margin: "2rem 0" }} />
      <TimerList />
    </div>
  );
}

export default Dashboard
