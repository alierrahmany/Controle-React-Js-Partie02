import React ,{useState}from 'react';

const VoitureItem = ({ matricule, marque, image, carburant, prixAchat, deleteVoiture }) => {
    const [filter, setFilter] = useState('none');
    const changeFilter = () => {
        if (filter === 'none') {
            setFilter('grayscale(100%)');
        } else {
            setFilter('none'); 
        }
    };
    return (
        <div className="voiture-item">
            <img src={image} alt={`Voiture ${marque}`} style={{ width: '150px', height: 'auto',filter: filter ,  }}  />
            <h3>Matricule: {matricule}</h3>
            <p >Marque: {marque}</p>
            <p>Carburant: {carburant}</p>
            <p>Prix d'achat: {prixAchat} MAD</p>
            <button onClick={changeFilter}>Change Couleur</button> 
            <button id='delteBtn' onClick={() => deleteVoiture(matricule)}>Delete</button>
        </div>
    );
};

export default VoitureItem;
