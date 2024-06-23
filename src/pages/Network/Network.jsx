import React, { useEffect, useState } from "react";
import styles from "./Network.module.css";

function MyNetwork() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0,8)))
      .catch((error) => console.log(error));

    console.log(users);
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <div className={styles.body}>
        <main>
          <div className={styles.grow}>
            <b>
              <a href="grow">Grow</a>
            </b>
            <b>
              <a href="connections">Connections</a>
            </b>
          </div>

          <div className={styles.requests}>
            <h4>Invitations</h4>
            <hr />
            <div className={styles.reqProf}>
              <div className={styles.profilePic}>
                <img
                  src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg"
                  alt=""
                />
              </div>
              <div className={styles.profileName}>
                <div>
                  <h3>Sahil Sable</h3>
                  <p>Software Engineer at Microsoft</p>
                </div>
                <div>
                  <button className={styles.negButton}>
                    <b>Ignore</b>
                  </button>
                  <button className={styles.posButton}>Accept</button>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.reqProf}>
              <div className={styles.profilePic}>
                <img
                  src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg"
                  alt=""
                />
              </div>
              <div className={styles.profileName}>
                <div>
                  <h3>Jeevan Naidu</h3>
                  <p>Software Engineer at Google</p>
                </div>
                <div>
                  <button className={styles.negButton}>
                    <b>Ignore</b>
                  </button>
                  <button className={styles.posButton}>Accept</button>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.reqProf}>
              <div className={styles.profilePic}>
                <img
                  src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg"
                  alt=""
                />
              </div>
              <div className={styles.profileName}>
                <div>
                  <h3>Prem Thatikonda</h3>
                  <p>Software Engineer at Apple</p>
                </div>
                <div>
                  <button className={styles.negButton}>
                    <b>Ignore</b>
                  </button>
                  <button className={styles.posButton}>Accept</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.people}>
            <h4>People you may know</h4>
            <hr />
            <div className={styles.connect}>
              {users.map((user) => {
                return (
                  <div className={styles.peoplecard}>
                    <img
                      className={styles.banner}
                      src={user.bannerImage}
                      alt=""
                    />
                    <img className={styles.profpic} src={user.image} alt="" />
                    <div className={styles.peopleinfo}>
                      <h3>{user.name}</h3>
                      <p>
                        {user.headline.length > 30
                          ? user.headline.slice(0, 20) + "..."
                          : user.headline}{" "}
                      </p>
                      <button className={styles.connectbtn}>Connect</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.events}>
            <h4>Online Events for you</h4>
            <div className={styles.listEvents}>
              <div className={styles.eventcard}>
                <img
                  className={styles.banner}
                  src="https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg"
                  alt=""
                />
                <div className={styles.eventdetails}>
                  <h3>Web Development Bootcamp</h3>
                  <p>
                    Join our 2-day bootcamp to learn the fundamentals of web
                    development
                  </p>
                  <button className={styles.viewbtn}>View</button>
                </div>
              </div>
              <div className={styles.eventcard}>
                <img
                  className={styles.banner}
                  src="https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg"
                  alt=""
                />
                {/* <img className={styles.profpic} src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg" alt="" /> */}
                <div className={styles.eventdetails}>
                  <h3>Web Development Bootcamp</h3>
                  <p>
                    Join our 2-day bootcamp to learn the fundamentals of web
                    development
                  </p>
                  <button className={styles.viewbtn}>View</button>
                </div>
              </div>
              <div className={styles.eventcard}>
                <img
                  className={styles.banner}
                  src="https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg"
                  alt=""
                />
                {/* <img className={styles.profpic} src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg" alt="" /> */}
                <div className={styles.eventdetails}>
                  <h3>Web Development Bootcamp</h3>
                  <p>
                    Join our 2-day bootcamp to learn the fundamentals of web
                    development
                  </p>
                  <button className={styles.viewbtn}>View</button>
                </div>
              </div>
              <div className={styles.eventcard}>
                <img
                  className={styles.banner}
                  src="https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg"
                  alt=""
                />
                {/* <img className={styles.profpic} src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg" alt="" /> */}
                <div className={styles.eventdetails}>
                  <h3>Web Development Bootcamp</h3>
                  <p>
                    Join our 2-day bootcamp to learn the fundamentals of web
                    development
                  </p>
                  <button className={styles.viewbtn}>View</button>
                </div>
              </div>
              <div className={styles.eventcard}>
                <img
                  className={styles.banner}
                  src="https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg"
                  alt=""
                />
                {/* <img className={styles.profpic} src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg" alt="" /> */}
                <div className={styles.eventdetails}>
                  <h3>Web Development Bootcamp</h3>
                  <p>
                    Join our 2-day bootcamp to learn the fundamentals of web
                    development
                  </p>
                  <button className={styles.viewbtn}>View</button>
                </div>
              </div>
              <div className={styles.eventcard}>
                <img
                  className={styles.banner}
                  src="https://marketplace.canva.com/EAFqqGQof14/1/0/1600w/canva-blue-minimalist-abstract-wave-linkedin-banner-jFsA3DjIRXM.jpg"
                  alt=""
                />
                {/* <img className={styles.profpic} src="https://bbdu.ac.in/wp-content/uploads/2021/11/dummy-image1.jpg" alt="" /> */}
                <div className={styles.eventdetails}>
                  <h3>Web Development Bootcamp</h3>
                  <p>
                    Join our 2-day bootcamp to learn the fundamentals of web
                    development
                  </p>
                  <button className={styles.viewbtn}>View</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MyNetwork;
