import Lesson from "./Lesson";

const Course = ({ time, name, children }) => {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{name}</h3>
        </div>
        <div className="panel-body">
          <p>{name}</p>
          <p>{children}</p>
          <ul className="list-group">
            <Lesson />
            <Lesson />
            <Lesson />
          </ul>
        </div>
        <div className="panel-footer text-center">
          <button className="btn btn-warning ">View</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
