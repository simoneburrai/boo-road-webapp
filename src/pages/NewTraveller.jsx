import { useState } from 'react';
import { useTravellers } from '../contexts/TravelContext';
import travellers from '../data/travellers';
import { useParams } from 'react-router-dom';


function NewTraveller() {
    const initialFormData = {
        name: '',
        surname: '',
        number: '',
        nationality: '',
        emergencyNumber: '',
        email: '',
        idCode: ''
    };

    const { filteredTravellers, setFilteredTravellers } = useTravellers();

    const [formData, setFormData] = useState(initialFormData);

    const { travelId } = useParams();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const lastId = travellers.length > 0
            ? Math.max(...travellers.map(t => t.id))
            : 0;

        const newTraveller = {
            id: lastId + 1,
            travelId: Number(travelId),
            ...formData
        };

        setFilteredTravellers(prev => [...prev, newTraveller]);
        setFormData(initialFormData);

        // per vedere l'update : (non so perchè ma bisogna inviare il form due volte per vedere il cambiamento)
        console.log("Updated travellers:", filteredTravellers);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <label className='form-label me-3'>
                Nome:
                <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Inserisci nome'
                />
            </label>
            <label className='form-label me-3'>
                Cognome:
                <input
                    type="text"
                    name="surname"
                    className="form-control mb-2"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder='Inserisci cognome'
                />
            </label>
            <label className='form-label me-3'>
                Numero di telefono:
                <input
                    type="text"
                    name="number"
                    className="form-control mb-2"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder='Inserisci il numero di telefono'
                />
            </label>
            <label className='form-label me-3'>
                Numero di emergenza:
                <input
                    type="text"
                    name="emergencyNumber"
                    className="form-control mb-2"
                    value={formData.emergencyNumber}
                    onChange={handleChange}
                    placeholder='Inserisci numero di emergenza'
                />
            </label>
            <label className='form-label me-3'>
                Email:
                <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='email@email.com'
                />
            </label>
            <label className='form-label me-3'>
                Nazionalità:
                <input
                    type="text"
                    name="nationality"
                    className="form-control mb-2"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder='Inserisci la nazionalità'
                />
            </label>
            <label className='form-label me-3'>
                Codice fiscale:
                <input
                    type="text"
                    name="idCode"
                    className="form-control mb-3"
                    value={formData.idCode}
                    onChange={handleChange}
                    required
                    pattern="[A-Z0-9]{16}"
                    title="Inserisci un codice fiscale valido di 16 caratteri"
                    placeholder='id'
                />
            </label>
            <button type="submit" className="btn btn-primary"><i className="fa-solid fa-user-plus"></i> </button>
        </form>
    );
}

export default NewTraveller;
