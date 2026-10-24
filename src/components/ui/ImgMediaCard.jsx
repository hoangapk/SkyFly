import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
export default function ImgMediaCard({img_url}) {
  return (
    <Card sx={{ maxWidth: 345 , mt : 2, m : "auto"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img_url}
      />
    </Card>
  );
}
