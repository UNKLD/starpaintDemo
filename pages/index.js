import CardView from "../components/CardView";
import Slider from "../components/Slider";
export default function Home() {
  return (
    <>
      <div className="container-lg " id="main">
        <div className="container m-5">
          <h3 className="display-4 text-center">Star Painting</h3>
          <p className="text-muted h5 text-center">
            Painting is silent poetry, and poetry is a painting that speaks.
          </p>
        </div>
        <div className="container-xl">
          <Slider />
        </div>
        <CardView />
      </div>
    </>
  );
}
