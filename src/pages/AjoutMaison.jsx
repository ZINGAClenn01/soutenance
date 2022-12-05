import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "../components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";

function BasicExample() {
  const [proprietaires, setProprietaires] = useState([]);
  useEffect(() => {
    const fetchproprietaires = async () => {
      const resultat = await axios("http://localhost:3001/proprietaires");
      setProprietaires(resultat.data[localStorage.getItem("proprio")]);
    };
    fetchproprietaires();
  }, []);

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
  function envoiMaison(event) {
    event.preventDefault();
    console.log(nouvelleMaison);
    axios
      .post("http://localhost:3001/ajout/maison", nouvelleMaison)
      .then(console.log("posted"));
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/categories");
      setData(result.data);
    };
    fetchData();
  }, []);

  const [maisons, setMaisons] = useState([]);
  useEffect(() => {
    const fetchMaisons = async () => {
      const result = await axios("http://localhost:3001/maisons");
      setMaisons(result.data);
    };
    fetchMaisons();
  }, []);

  const [quartiers, setQuartiers] = useState([]);
  useEffect(() => {
    const fetchQuartiers = async () => {
      const resultat = await axios("http://localhost:3001/quartiers");
      setQuartiers(resultat.data);
    };
    fetchQuartiers();
  }, []);

  return (
    <div>
      <br />
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
        {/* <Form.Select onChange={(e)=> setProprietaireform(e.target.value)} aria-label="Default select example">
          <option>Selectionner le propriétaire</option>
          {proprietaires.map((item) => (<option value={item.id_proprietaire}>{item.nom_proprietaire}</option>))}
          
        </Form.Select> */}
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

        <Button onClick={envoiMaison} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Nav />
    </div>
  );
}

export default BasicExample;
