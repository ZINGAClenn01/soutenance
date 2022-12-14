import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Quartier.css";


function Quartier() {


    const [quartiers, setQuartiers] = useState([])

    
    useEffect(() => {
        const fetchQuartiers = async () => {
            const resultat = await axios(
                'http://localhost:3001/quartiers',
            );
            setQuartiers(resultat.data);
        
        };
        fetchQuartiers();
    },[])

    const [maisons, setMaisons] = useState([])
    
    useEffect(() => {
      const fetchMaisons = async () => {
          const result = await axios(
              'http://localhost:3001/maisons',
          );
          setMaisons(result.data);
      };
      fetchMaisons();
  },[])
  // const myStyle = {
  //   background: quartiers[2].image_quartier,
  // };console.log(myStyle);

    
      const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
          zIndex: 1,
          '& .MuiImageBackdrop-root': {
            opacity: 0.15,
          },
          '& .MuiImageMarked-root': {
            opacity: 0,
          },
          '& .MuiTypography-root': {
            border: '4px solid currentColor',
          },
        },
      }));
      
      const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      });
      
      const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      }));
      
      const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      }));
      
      const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      }));
  return (

    <div>
      <Box className="btn-mobil" sx={{ display: 'flex,bloc', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        
        {quartiers.map((image) => (
          <Link className="link" to={`/propriete-quartier/${image.id_quartier}`}>
            <ImageButton
              focusRipple
              key={image.id_quartier}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.image_quartier})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(2)} + 6px)`,
                  }}
                >
                  {image.quartier}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          </Link>
        ))}
        
      </Box>
      <div className="btn-desk">
      {quartiers.map((image) => (
        <Link className="" to={`/propriete-quartier/${image.id_quartier}`}>
          <div className='image-image'>
      <Button className='image-desct' variant="primary" size="lg">
       {image.quartier}
      </Button></div>
      </Link>
      ))}
    </div>
      <Nav/> 
    
    </div>
  )
}

export default Quartier