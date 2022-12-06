import Table from "react-bootstrap/Table";
import Nav from "../components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';


var index = localStorage.getItem("proprio");
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

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/categories");
      setData(result.data);
    };
    fetchData();
  }, []);

  const [quartiers, setQuartiers] = useState([]);
  useEffect(() => {
    const fetchQuartiers = async () => {
      const resultat = await axios("http://localhost:3001/quartiers");
      setQuartiers(resultat.data);
    };
    fetchQuartiers();
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

  const [maison, setMaison] = useState([]);
  function maisonproprietaire() {
    const maisonFlitrer = maisons.filter((item) => {
      return item.id_proprietaire == proprietaires;
    });
    setMaison(maisonFlitrer);
  }

 

  function supMaison(event) {
    event.preventDefault();
    axios
      .delete("http://localhost:3001/delete/maison/:id")
      .then(console.log("delete"));
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deletehouse(id_maison) {
    const maisonFlitrer = maisons.filter((item) => {
      return item.id_maison == id_maison;
    });
    var id = maisonFlitrer[0].id_maison;
    axios
      .delete(`http://localhost:3001/delete/maison/${id}`)
      .then(console.log("delete"));
  }
const [putm, setputm] = useState("")
  


  useEffect(() => {
    maisonproprietaire();
  });

  const [categorieform, setCategorieform] = useState("");
  const [quartierform, setQuartierform] = useState("");
  // const [proprietaireform,setProprietaireform]= useState("")
  const [prixform, setPrixform] = useState("");
  const [descriptionform, setDescriptionform] = useState("");
  const [chambreform, setChambreform] = useState("");
  const [doucheform, setDoucheform] = useState(-0.7164048, 8.7812775);
  const [salonform, setSalonform] = useState("");
  const [coordonneesform, setCoordonneesform] = useState("");
  const [telephoneform, setTelephoneform] = useState("");
  const [image1form, setImage1form] = useState("image");
  const [image2form, setImage2form] = useState("image");
  const [image3form, setImage3form] = useState("image");
  const [image4form, setImage4form] = useState("image");
  const [image5form, setImage5form] = useState("image");
  
  var nouvelleMaison = {
    id_categorie: parseInt(categorieform),
    id_quartier: parseInt(quartierform),
    id_proprietaire: proprietaires.id_proprietaire,
    prix: prixform,
    description: descriptionform,
    nombre_chambre: chambreform,
    nombre_douche: doucheform,
    nombre_salon: salonform,
    coordonnees: coordonneesform,
    telephone_proprietaire: telephoneform,
    image1: image1form,
    image2: image2form,
    image3: image3form,
    image4: image4form,
    image5: image5form,
  };
  function puthouse(id_maison) {
    console.log(nouvelleMaison);
    const maisonFlitrer = maisons.filter((item) => {
      return item.id_maison == id_maison;
    });

    setputm(maisonFlitrer);
    setCategorieform(maisonFlitrer[0].id_categorie)
    axios
      .put(`http://localhost:3001/modifier/maison/14`, nouvelleMaison)
      .then(console.log("delete"));
  }
  function envoiMaison(event) {
    event.preventDefault();
    console.log(nouvelleMaison);
    axios
      .put("http://localhost:3001/modifier/maison/:id", nouvelleMaison)
      .then(console.log("posted"));
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
                <Button
                  onClick={() => {
                    deletehouse(item.id_maison);
                  }}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <>
      <Button variant="primary" onClick={() => {setShow(true)
}}>
        Modifier
      </Button>

      <Modal style={{width: '90vw'}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Select
          onChange={(e) => setCategorieform(e.target.value)}
          aria-label="Default select example"
        >
          <option>Selectionner une categorie</option>
          {data.map((item) => (
            <option value={item.id_categorie}>{item.categorie} </option>
          ))}
        </Form.Select>
        <br />
        <Form.Select
          onChange={(e) => setQuartierform(e.target.value)}
          aria-label="Default select example"
        >
          <option>Selectionner le quartier</option>
          {quartiers.map((item) => (
            <option value={item.id_quartier}>{item.quartier}</option>
          ))}
        </Form.Select>
        <br />
        <Form.Control
          onChange={(e) => setPrixform(e.target.value)}
          type="text"
          placeholder="Prix"
        />
        <br />
        <Form.Group
          onChange={(e) => setDescriptionform(e.target.value)}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Entre une description"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <br />
        <Form.Control
          onChange={(e) => setChambreform(e.target.value)}
          type="text"
          placeholder="Nombre de chambre"
        />
        <br />
        <Form.Control
          onChange={(e) => setDoucheform(e.target.value)}
          type="text"
          placeholder="Nombre de douche"
        />
        <br />
        <Form.Control
          onChange={(e) => setSalonform(e.target.value)}
          type="text"
          placeholder="Nombre de salon"
        />
        <br />
        <Form.Control
          onChange={(e) => setCoordonneesform(e.target.value)}
          type="text"
          placeholder="Coordonnées"
        />
        <br />
        <Form.Control
          onChange={(e) => setTelephoneform(e.target.value)}
          type="text"
          placeholder="Téléphone-propriétaire"
        />
        <br />
        <Form.Group
          onChange={(e) => setImage1form(e.target.value)}
          controlId="formFileSm"
          className="mb-3"
        >
          <Form.Label>image1</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Form.Group
          onChange={(e) => setImage2form(e.target.value)}
          controlId="formFileSm"
          className="mb-3"
        >
          <Form.Label>image2</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Form.Group
          onChange={(e) => setImage3form(e.target.value)}
          controlId="formFileSm"
          className="mb-3"
        >
          <Form.Label>image3</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Form.Group
          onChange={(e) => setImage4form(e.target.value)}
          controlId="formFileSm"
          className="mb-3"
        >
          <Form.Label>image4</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Form.Group
          onChange={(e) => setImage5form(e.target.value)}
          controlId="formFileSm"
          className="mb-3"
        >
          <Form.Label>image5</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{puthouse(item.id_maison)} }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
              </Stack>
            </tbody>
          </Table>
        </div>
      ))}
      <Nav />
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <Link to="/ajouter-une-maison">
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 100, right: 16 }}
            icon={<SpeedDialIcon />}
          ></SpeedDial>
        </Link>
      </Box>
      <Nav />
    </div>
  );
}

export default DarkExample;
