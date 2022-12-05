import Table from "react-bootstrap/Table";
import Nav from "../components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



var index = localStorage.getItem('proprio')
console.log(index);

function DarkExample() {

  
  const [maisons, setMaisons] = useState([]);
  useEffect(() => {
    const fetchMaisons = async () => {
      const result = await axios("http://localhost:3001/maisons");
      setMaisons(result.data);
    };
    fetchMaisons();
  }, []);





  const [proprietaires, setProprietaires] = useState([]);
  useEffect(() => {
    const fetchproprietaires = async () => {
      const result = await axios("http://localhost:3001/proprietaires");
      setProprietaires(result.data[index].id_proprietaire);
      console.log(result.data[index].id_proprietaire);
      console.log(proprietaires);
    };
    fetchproprietaires(proprietaires);
  }, []);




  const [maison, setMaison] = useState ([])
  function maisonproprietaire () {
    const maisonFlitrer = maisons.filter((item) =>{
      return item.id_proprietaire == proprietaires
    })
    setMaison(maisonFlitrer);
  }
  
  useEffect(() => {
    maisonproprietaire();
  });




  function supMaison(event) {
    event.preventDefault();
    axios.delete("http://localhost:3001/delete/maison/:id",).then(console.log('delete'))
  }
  

  function deletehouse (id_maison) {
    const maisonFlitrer = maisons.filter((item) =>{
      return item.id_maison == id_maison
    })
    var id = maisonFlitrer[0].id_maison
    axios.delete(`http://localhost:3001/delete/maison/${id}`,).then(console.log('delete'))

  }
  return (
    <div>
      {maison.map((item) => (
        <div className="div-quartier">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>id_maison</th>
                <th>First Name</th>
                <th>Quartiers</th>
                <th>Description</th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <td>{item.id_maison} </td>
                <td>{item.id_maison}</td>
                <td>{item.id_quartier}</td>
                <td>{item.description}</td>
              </tr>
              <Stack direction="row" spacing={2}>
      <Button onClick={()=>{deletehouse(item.id_maison)}} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      
    </Stack>
            </tbody>
          </Table>
        </div>
      ))}
      <Nav />
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Link to='/ajouter-une-maison' >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 100, right: 16 }}
        icon={<SpeedDialIcon />}
      >
      </SpeedDial></Link>
    </Box>
    <Nav/>

    </div>
  );
}

export default DarkExample;
