export default function CardView() {
  return (
    <section id="cards">
      <div className="row m-3">
        <div className="col card border-0 mb-4">
          <span className="text-primary fw-bolder bg-light">
            <img src="/paint-roller.png" alt="" height={50} width={50} />
          </span>

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <a href="#" className="btn btn-secondary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="col card border-0">
          <span className="text-primary fw-bolder">
            <img src="/paint-roller.png" alt="" height={50} width={50} />
          </span>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <a href="#" className="btn btn-secondary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="col card border-0">
          <span className="text-primary fw-bolder">
            <img src="/paint-roller.png" alt="" height={50} width={50} />
          </span>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <a href="#" className="btn btn-secondary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
