import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Days from "..//Images/Days.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 0.5,
        }}
      >
        <h1>45th Security Forces Squadron</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{ maxWidth: "80%", margin: "0 auto" }}
        >
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={Days}
                title="green iguana"
              />
              <CardContent sx={{ height: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Patrick QRCs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents exc
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/unitQRCList">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ height: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Patrick QRCs
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Cape Canaveral QRCs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/unitQRCList">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ height: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Patrick QRCs
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Operation Instructions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/unitQRCList">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ height: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Patrick QRCs
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Forms
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/unitQRCList">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ height: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Patrick QRCs
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Installation Traffic Codes
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/unitQRCList">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ height: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Patrick QRCs
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Florida State Statues
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/unitQRCList">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ height: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Patrick QRCs
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Special Security Instructions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/unitQRCList">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent sx={{ height: "150px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Patrick QRCs
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Maps
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/unitQRCList">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
