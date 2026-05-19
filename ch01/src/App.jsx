import "./App.css";
import Course from "./components/Course";

const App = () => {
  return (
    <div className="row">
      <Course name="HTML" time="3h" free={true}>
        {/* HTML is very easy... */}
      </Course>
      <Course name="CSS" time="5h" free={true} />
      <Course name="Javascript" time="10h" free={true} />
      <Course name="PHP" time="20h" free={true} />
      <Course name="Laravel" time="10h" free={false} />
      <Course name="ReactJS" time="15h" free={false} />
    </div>
  );
};

export default App;
