import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardView({ post }) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 200 }} style={{ marginBottom: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn4.buysellads.net/uu/1/100164/1635182892-260x200-white-logo-blue-background.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}