import { useState } from 'react';
import BackButton  from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateJob = () => {
    // company, job title, date posted, 
    // date applied, status, link, notes
    const [company, setCompany] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveJob = () => {
        const data = {
            company,
        }
    };

    return (
        <div className='p-4'>
            <div>CreateJob</div>
            <BackButton /> 
        </div>
    )
}

export default CreateJob