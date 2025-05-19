import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTravels } from '../contexts/TravelContext';
import travels from '../data/travels';

function TravelForm() {
    const initialFormData = {
        destination: {
            city: '',
            country: ''
        },
        start: '',
        end: '',
        duration: 0,
        travelType: '',
        price: 0,
        discountPrice: undefined,
        state: 'active',
        image: '',
        description: '',
    };

    const { filteredTravels, setFilteredTravels } = useTravels()

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Se il nome del campo contiene un punto (campo annidato)
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            // Campo al primo livello
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here\

        console.log(formData);
        setFilteredTravels(prev => [...prev, { ...formData, id: travels.length + 1 }]); // Add new travel to the list
        setFormData(initialFormData); // Reset form after submission
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                City:
                <input
                    type="text"
                    name="destination.city"
                    value={formData.destination.city}
                    onChange={handleChange}
                />
            </label>
            <label>
                Country:
                <input
                    type="text"
                    name="destination.country"
                    value={formData.destination.country}
                    onChange={handleChange}
                />
            </label>
            <label>
                Start Date:
                <input
                    type="date"
                    name="start"
                    value={formData.start}
                    onChange={handleChange}
                />
            </label>
            <label>
                End Date:
                <input
                    type="date"
                    name="end"
                    value={formData.end}
                    onChange={handleChange}
                />
            </label>
            <label>
                Duration:
                <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                />
            </label>
            <label>
                Travel Type:
                <input
                    type="text"
                    name="travelType"
                    value={formData.travelType}
                    onChange={handleChange}
                />
            </label>
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
            </label>
            <label>
                Discount Price:
                <input
                    type="number"
                    name="discountPrice"
                    value={formData.discountPrice || ''}
                    onChange={handleChange}
                />
            </label>
            <label>
                Image URL:
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
            </label>
            <label>
                Description:
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
            </label>

            <button type="submit">Submit</button>
            <Link to="/travels">Travel List</Link>
        </form>
    );
}

export default TravelForm;
/*
 {
    "id": 1,
    "destination": {
      "city": "Parigi",
      "country": "Francia"
    },
    "start": "2025-05-30",
    "end": "2025-06-06",
    "duration": 7,
    "travelType": "culturale",
    "price": 380.0,
    "discountPrice": null,
    "state": "active",
    "image": "https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg",
    "description": "Un viaggio culturale nella Ville Lumière, tra musei e monumenti storici.",
*/