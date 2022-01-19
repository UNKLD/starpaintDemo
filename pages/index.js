import CardView from "../components/CardView";
import Slider from "../components/Slider";
export default function Home() {
  return (
    <>
      <div className="container-lg " id="main">
        <h3 className="display-4 text-center">Star Painting</h3>
        <p className="text-muted h5 text-center">
          Painting is silent poetry, and poetry is a painting that speaks.
        </p>
        <Slider />
        <div className="mt-5">
          <CardView />
        </div>
      </div>
    </>
  );
}
