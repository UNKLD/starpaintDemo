import CardView from "../components/CardView";
import Slider from "../components/Slider";
export default function Home() {
  const img1 =
    "https://media.istockphoto.com/photos/paint-brushes-placed-on-top-of-can-filled-with-blue-paint-classic-picture-id1195481629?k=20&m=1195481629&s=612x612&w=0&h=gQawoNHPQWtzLxjqGf_WSz60HD0Bsb_NzWoiTxhsjiw=";

  return (
    <>
      <div className="container-md md-invisible" id="main">
        <div className="mb-5">
          <h3 className="pt-1 display-5 text-center fw-bold">Star Painting</h3>
          <p className="lead  h5 text-center">
            Painting is silent poetry, and poetry is a painting that speaks.
          </p>
        </div>
        <div>
          <div className="container text-center">
            <div className="simg d-md-none">
              <img
                className="rounded-3 img-more w-100"
                src={img1}
                alt="star paint"
              />
              <div className="info-more text-center">
                <h2>This is hidden</h2>
                <p>
                  More Hidden information <a href="#">Hidden link</a>
                </p>
              </div>
            </div>
          </div>
          <Slider />
        </div>

        <div className="d-md-flex mt-5">
          <div className="text-center">
            <h2 className="fw-bold">This is something</h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              optio facere ratione consequatur sequi molestiae exercitationem dolores
              ad, libero sunt.
            </p>
            <p className="lead text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, iste
              perspiciatis sit molestiae nulla distinctio consequuntur tenetur
              quibusdam modi quaerat?
            </p>
          </div>
          <CardView />
        </div>
      </div>
    </>
  );
}
