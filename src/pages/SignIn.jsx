import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './Dashboard';
// import axios from '../api/axios';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Nav from "../components/Nav";

const theme = createTheme({
  palette: {
    primary: {

      main: '#262D44',

    },
    secondary: {

      main: '#0B5ED7',
      
    },
  },
});
export default function SignIn() {
  
  
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [success, setSuccess] = useState(false);



  const handleSubmit = async (e) => {
    // document.getElementById('appbar').style.display="none"
      e.preventDefault();   
  }

  const [Objets, setObjets] = useState([]);
  const [IdUser, setIdUser] = useState(String(localStorage.getItem('proprio')));

  useEffect(() => {
    getObjets();
  }, []);


  const getObjets = async () => {
    var response = await axios.get("http://localhost:3001/proprietaires");
    setObjets(response.data);

  };


  const Connexion = (e) => {
 
  for (let index = 0; index <= Objets.length+1; index++) {


    const element1 = Objets[index];
    const element2 = Objets[index];

    const fromdb = element1.email_proprietaire+element2.password
    const frominput = user+pwd
    
    if(frominput === fromdb && index < Objets.length){

      setSuccess(true);
      alert("Bienvenue "+Objets[index].nom_proprietaire)

      localStorage.clear()
      localStorage.setItem('loggedin', '/dashboard')
      localStorage.setItem('login', '/loggedoff')
      localStorage.setItem('proprio', index)
      
      break
    }
    else{
      document.getElementById('errMessage').innerHTML='<p>Identifiants erronés</p>'
    }
  }
}  
  // console.log(localStorage.getItem('proprio'))
  return (
    <>
    {success ? (
        <section>
            <Dashboard setIdUser={setIdUser} IdUser={IdUser}/>
        </section>
    ) : (

      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', color:'#262D44' }}> 
            Connexion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"

              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=> setUser(e.target.value)}
              value={user}

            />
            <TextField
              margin="normal"

              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="new-password"
              onChange={(e)=> setPwd(e.target.value)}
              value={pwd}
            />
            <div id="errMessage"></div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
              onClick={Connexion}
            >
              <strong>
              Se connecter</strong>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {/* Mot de passe oublié? */}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/inscription" variant="body2">
                  {"Pas de compte? Inscrivez-vous"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )}
    <Nav/>
        </>
  );
}