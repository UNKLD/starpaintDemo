export default function Slider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide my-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            style={{ maxHeight: "450px" }}
            src="https://media.istockphoto.com/photos/the-house-wall-gets-new-color-picture-id1170506385?k=20&m=1170506385&s=612x612&w=0&h=ParKuxUYWGTw8bvz26jN9yOnbelCsV-AREdS8pIa1M4="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            style={{ maxHeight: "450px" }}
            src="https://media.istockphoto.com/photos/paint-brushes-placed-on-top-of-can-filled-with-blue-paint-classic-picture-id1195481629?k=20&m=1195481629&s=612x612&w=0&h=gQawoNHPQWtzLxjqGf_WSz60HD0Bsb_NzWoiTxhsjiw="
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            style={{ maxHeight: "450px" }}
            src="https://media.istockphoto.com/photos/3d-interor-of-orangewhite-bedroom-picture-id519251233?k=20&m=519251233&s=612x612&w=0&h=NRmYbaVE0jWzfAwaPyhLDZtWcxuTfZPL9zyzMc3tSis="
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
