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
            <label className='form-label me-3'>
                City:
                <input
                    type="text"
                    name="destination.city"
                    value={formData.destination.city}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='City'
                />
            </label>
            <label className='form-label me-3'>
                Country:
                <input
                    type="text"
                    name="destination.country"
                    value={formData.destination.country}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Country'
                />
            </label>
            <label className='form-label me-3'>
                Start Date:
                <input
                    type="date"
                    name="start"
                    value={formData.start}
                    onChange={handleChange}
                    className='form-control'

                />
            </label>
            <label className='form-label me-3'>
                End Date:
                <input
                    type="date"
                    name="end"
                    value={formData.end}
                    onChange={handleChange}
                    className='form-control'
                />
            </label>
            <label className='form-label me-3'>
                Duration:
                <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className='form-control'
                />
            </label>
            <label className='form-label me-3'>
                Travel Type:
                <input
                    type="text"
                    name="travelType"
                    value={formData.travelType}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Travel Type'
                />
            </label>
            <label className='form-label me-3'>
                Price:
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Price'
                />
            </label>
            <label className='form-label me-3'>
                Discount Price:
                <input
                    type="number"
                    name="discountPrice"
                    value={formData.discountPrice || ''}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='0'
                />
            </label>
            <label className='form-label me-3'>
                Image URL:
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='URL'
                />
            </label>
            <br />
            <label className='form-label me-3'>
                Description:
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='max 400 char'
                ></textarea>
            </label>

            <button type="submit" className='btn btn-primary me-3'>Invio</button>
            <Link to="/travels" className='btn btn-primary me-3'>Lista viaggi</Link>
            <Link to="/" className='btn btn-primary me-3'>Home</Link>
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