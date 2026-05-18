import Lesson from "./Lesson";

const Course = () => {
  return (
    <>
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">ReactJS</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              <Lesson />
              <Lesson />
              <Lesson />
            </ul>
          </div>
        </div>
        <button className="btn btn-success mb-2">Register</button>
      </div>
    </>
  );
};

export default Course;
