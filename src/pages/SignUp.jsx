import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#262D44",
    },
    secondary: {
      main: "#8AE0AA",
    },
  },
});
export default function SignUp() {
  const [name, setname] = React.useState("");
  const [msg, setmsg] = React.useState("Désolé!!!");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nom: data.get("lastName"),
      prenom: data.get("firstName"),
      email: data.get("email"),
      phone: data.get("phone"),
      password: data.get("password"),
    });
    const post = {
      nom_proprietaire : data.get("lastName"),
      prenom_proprietaire : data.get("firstName"),
      email_proprietaire: data.get("email"),
      téléphone_proprietaire: data.get("phone"),
      password: data.get("password"),
    };

    // function successful(){
    //   setmsg('Felicitations vous')
    // }
    setname(data.get("firstName"));
    axios
      .post("http://localhost:3001/ajout/proprietaires", post)
      .then((res) => {
        console.log(res);
        if (String(res.data) === "POSTED") {
          setmsg(`Félicitations !!!`);
          document.getElementById("backtoregistering").style.display = "none";
          document.getElementById("gotologin").style.display = "inline";
        }
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
            Inscription
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="lastName"
                  label="Nom"
                  name="lastName"
                  autoComplete="family-name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Prénom"
                />
              </Grid>
              <br />
              <br />
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="email"
                  label="Addresse Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="phone"
                  label="Téléphone"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <div>
              {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
              <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle sx={{ width: "300px" }} id="alert-dialog-title">
                  {/* {"Use Google's location service?"} */}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {msg}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} id="backtoregistering">
                    Retour
                  </Button>
                  <Link href="/Ajouter-un-article">
                    <Button autoFocus id="gotologin">
                      Se connecter
                    </Button>
                  </Link>
                </DialogActions>
              </Dialog>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="secondary"
              onClick={handleClickOpen}
            >
              <strong>S'inscrire</strong>
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/se-connecter" variant="body2">
                  Déjà inscrit? Connectez-vous
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
