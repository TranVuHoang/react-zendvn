import Lesson from "./Lesson";

const Course = ({ time, name, free, children }) => {
  const showButtonFree = () => {
    return (
      <button className={`btn ${free ? "btn-success" : "btn-info"}`}>
        {free ? "View" : "Buy"}
      </button>
    );
  };

  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{name}</h3>
        </div>
        <div className="panel-body">
          <p>{name}</p>
          <p>{children}</p>
          <p>{free}</p>
          <ul className="list-group">
            <Lesson />
            <Lesson />
            <Lesson />
          </ul>
        </div>
        <div className="panel-footer text-center">{showButtonFree()}</div>
      </div>
    </div>
  );
};

export default Course;
