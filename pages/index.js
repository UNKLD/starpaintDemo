import CardView from "../components/CardView";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Home() {
  const posts = [
    { name: "luigi", age: "14" },
    { name: "mario", age: "15" },
    { name: "mario", age: "15" },
    { name: "luigi", age: "14" },
    { name: "luigi", age: "14" },
  ];
  return (
    <>
      <div className="slide">
        <img src="vercel.svg" alt="" width={300} height={200} />
      </div>
      <Container className="main">
        <Grid container spacing={1} style={{ justifyContent: "space-evenly" }}>
          {posts.map((post, i) => {
            return <CardView key={i} post={post} />;
          })}
        </Grid>
      </Container>
    </>
  );
}
