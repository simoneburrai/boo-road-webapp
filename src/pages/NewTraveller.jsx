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
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Surname:
                <input
                    type="text"
                    name="surname"
                    className="form-control mb-2"
                    value={formData.surname}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone Number:
                <input
                    type="text"
                    name="number"
                    className="form-control mb-2"
                    value={formData.number}
                    onChange={handleChange}
                />
            </label>
            <label>
                Emergency Number:
                <input
                    type="text"
                    name="emergencyNumber"
                    className="form-control mb-2"
                    value={formData.emergencyNumber}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Nationality:
                <input
                    type="text"
                    name="nationality"
                    className="form-control mb-2"
                    value={formData.nationality}
                    onChange={handleChange}
                />
            </label>
            <label>
                Id Code:
                <input
                    type="text"
                    name="idCode"
                    className="form-control mb-3"
                    value={formData.idCode}
                    onChange={handleChange}
                    required
                    pattern="[A-Z0-9]{16}"
                    title="Inserisci un codice fiscale valido di 16 caratteri"
                />
            </label>

            <button type="submit" className="btn btn-primary">Add Traveller</button>
        </form>
    );
}

export default NewTraveller;
