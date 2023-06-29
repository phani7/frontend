import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I'm Phanideep kallepalli</p>
          <p>FrontEnd developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>

        <a
        href="https://docs.google.com/document/d/1qSOgB-Qn_WTfgI6ijiGJVbIeklw_veyE2rtU56DfZ6I/edit"
        target="_blank"
      >
        <button1>Resume</button1>
      </a>




      </div>
      <div className="person">
        <img
          src="https://res.cloudinary.com/drxqukrrc/image/upload/v1655916451/samples/phani/IMG_20180326_162619_zqzgla.jpg"
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
