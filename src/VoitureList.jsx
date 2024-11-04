import React,{useState} from 'react';
import VoitureItem from './VoitureItem';
import './VoitureList.css'

const VoitureList = () => {
    const [voitures, setVoitures] = useState( [
        {
            matricule: '1234-AB',
            marque: 'hyundai',
            image: 'hyundai-i20.jpg',
            carburant: 'Essence',
            prixAchat: 200000,
        },
        {
            matricule: '5678-CD',
            marque: 'peugeot',
            image: 'peugeot-208.jpg',
            carburant: 'Essence',
            prixAchat: 180000,
        },
        {
            matricule: '9101-EF',
            marque: 'fiat',
            image: 'fiat-500.jpg',
            carburant: 'Essence',
            prixAchat: 19000,
        },
        {
            matricule: '1121-GH',
            marque: 'Diesel',
            image: 'renault-clio.jpg',
            carburant: 'Essence',
            prixAchat: 210000,
        },
      ]);
      const deleteVoiture = (matricule) => {
        setVoitures((prevVoitures) => 
            prevVoitures.filter((voiture) => voiture.matricule !== matricule)
        );
    };
    const totalVoitures = voitures.length;

    const countMarque = voitures.reduce((acc, voiture) => {
        acc[voiture.marque] = (acc[voiture.marque] || 0) + 1;
        return acc;
    }, {});
    const voitureMax = voitures.reduce((max, voiture) => {
        return (voiture.prixAchat > max.prixAchat) ? voiture : max;
    }, voitures[0]);

    return (
        <div className="voiture-list">
            <h1>Liste des Voitures</h1>
            <div className="voitures-list">
                {voitures.map((voiture, index) => (
                    <VoitureItem key={index} {...voiture}  deleteVoiture={deleteVoiture}/>
                ))}
            </div>
            <h2>Total des voitures: {totalVoitures}</h2>
            <h3>Nombre de voitures par marque:</h3>
            <ul>
                {Object.entries(countMarque).map(([marque, count]) => (
                    <li key={marque}>{marque}: {count}</li>
                ))}
            </ul>
            <div className='voiture-max'>
            <h3>Voiture avec le prix maximal:</h3>
            <VoitureItem {...voitureMax} />
            </div>
            
        </div>
    );
};

export default VoitureList;
