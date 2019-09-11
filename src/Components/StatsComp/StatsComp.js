import React from "react";
import "./StatsComp.css";
import "bootstrap/dist/css/bootstrap.min.css";

const StatsComp = () => {
  return (
    <div className="stats">
      <div className="statDesc">
        <div>
          <h1 className="statTitle">
            The world's
            <br />
            biggest healthcare platform
          </h1>
          <p className="descDoc">
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
        </div>
      </div>
      <div className="statSection">
        <div>
          <div className="cardstatt">
            <div className="card-content stat-card">
              <img src="https://www.docplanner.com/img/flag.png" />
              <p className="stat-card-h">Leader in 10 countries</p>
              <p className="stat-card-p">
                Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil,
                Colombia, Argentina and Chile
              </p>
            </div>
          </div>
          <div className="cardstatt ">
            <div className="card-content stat-card">
              <img src="https://www.docplanner.com/img/visits.png" />
              <p className="stat-card-h">1.5 million appointments</p>
              <p className="stat-card-p">booked last month</p>
            </div>
          </div>
        </div>
        <div>
          <div className="cardstatt card-up">
            <div className="card-content stat-card">
              <img src="https://www.docplanner.com/img/patients.png" />
              <p className="stat-card-h">30 million unique patients</p>
              <p className="stat-card-p">visit us every month</p>
            </div>
          </div>
          <div className="cardstatt card-up">
            <div className="card-content stat-card">
              <img src="https://www.docplanner.com/img/doctors.png" />
              <p className="stat-card-h">2 million active doctors</p>
              <p className="stat-card-p">trust in our solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComp;
/*className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}*/
