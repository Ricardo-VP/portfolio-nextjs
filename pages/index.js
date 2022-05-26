import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/** Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="profile.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Ricardo Vaca</h1>
              <h3>Software Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                harum nisi quasi tempora qui aut libero suscipit fugit
                recusandae sint obcaecati commodi, perferendis blanditiis et,
                optio, fuga placeat voluptates sequi.
              </p>
              <a href="">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map((skill, i) => (
              <div className="py-3" key={i}>
                <h5>{skill.skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {experiences.map(({ title, description, from, to }, i) => (
                <li key={i}>
                  <h3>{title}</h3>
                  <h5>
                    {from} - {to ?? "Now"}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map((project, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={project.image} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
