import Layout from "../components/Layout";

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
  </Layout>
);

export default Index;
