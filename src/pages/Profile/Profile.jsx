import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Profile.css";

function ProfilePage() {
  const user = useSelector(selectUser);
  const [info, setInfo] = useState({});
  const [education, setEducation] = useState([]);
  // const education = user.education;
  useEffect(() => {
    fetch(`http://localhost:3500/userData/${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setInfo(data);
        }
        console.log(data);
        setEducation(data.education);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="body">
        <main>
          <div className="hero">
            <div className="hero-banner">
              <img
                src={user.bannerImage}
                alt="Banner"
                className="hero-banner-image"
                id="hero-banner-image"
              />

              <Link to={`/update/${user.id}`}>
                <label className="editBanner" htmlFor="hero-banner-image">
                  Pen
                </label>
              </Link>
            </div>
            <div className="hero-avatar">
              <img src={user.image} alt="Profile" id="profile-pic" />
            </div>
          </div>
          <div className="intro">
            <div className="intro-name">{user.name}</div>
            <div className="intro-desc">
              <p>{user.headline}</p>
            </div>
          </div>

          <section className="about" id="about">
            <h2>About</h2>
            <p className="about-desc">{user.about}</p>
          </section>

          <section className="experience" id="experience">
            <h2>Experience</h2>

            <div className="exp-item">
              <div className="org-img">
                <img
                  src="https://images.yourstory.com/cs/images/companies/oiflRYdP400x400-1592909309243.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
                  alt="WheelsEye"
                />
              </div>
              <div className="exp-details">
                <h4 className="role-name">Software Engineer</h4>
                <div className="role-org-name">WheelsEye</div>
                <div className="role-duration">Aug 2022 - Present</div>
                <div className="role-desc">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="exp-item">
              <div className="org-img">
                <img
                  src="https://media.licdn.com/dms/image/C560BAQFXKkWPSzWtVg/company-logo_200_200/0/1634283000059/mazecare_logo?e=2147483647&v=beta&t=UxGLfnJ2HHPQJQMYdasVsAFIJYIhDjnPi1rVwmKFYX4"
                  alt="Mazecare"
                />
              </div>
              <div className="exp-details">
                <h4 className="role-name">Software Engineer</h4>
                <div className="role-org-name">Mazecare</div>
                <div className="role-duration">Apr 2022 - Jul 2022</div>
                <div className="role-desc">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="exp-item">
              <div className="org-img">
                <img
                  src="https://omrajsharma.github.io/assets/images/datametricks-logo.jpg"
                  alt="DataMatricks"
                />
              </div>
              <div className="exp-details">
                <h4 className="role-name">Software Engineer</h4>
                <div className="role-org-name">DataMatricks</div>
                <div className="role-duration">Dec 2021 - Feb 2022</div>
                <div className="role-desc">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique assumenda iure, unde mollitia cum fugit?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="education" id="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div className="edu-item" key={index}>
                <div className="edu-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/GGSIU_logo.svg/1200px-GGSIU_logo.svg.png"
                    alt="GGSIPU"
                  />
                </div>
                <div className="edu-details">
                  <h4 className="edu-name">{edu.degree}</h4>
                  <div className="edu-org-name">{edu.orgName}</div>
                  <div className="edu-duration">{edu.duration}</div>
                </div>
              </div>
            ))}
          </section>

          <section className="contact" id="contact">
            <h2>Contact</h2>
            <div className="contact-details">
              <Link to="tel:1234567890">☎️ +91-1234567890</Link>
              <Link to="mailto:sahilsable737@gmail.com">📩 Email</Link>
              <Link to="https://www.linkedin.com/in/sahil-sable-61460423b/">
                LinkedIn
              </Link>
              <Link to="https://github.com/sahils1201/">Github</Link>
              <Link to="https://x.com/sahils1201">Twitter</Link>
            </div>
          </section>
        </main>
      </div>

      <footer></footer>
    </>
  );
}

export default ProfilePage;
