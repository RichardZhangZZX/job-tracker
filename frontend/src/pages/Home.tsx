import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from "../components/Header";
import Goal from "../components/Goal";

type Job = {
    _id: string;
    company: string;
    role: string;
    date_posted: string;
    date_applied: string;
    status: string;
    link: string;
    notes: string;
};

const Home = () => { 
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false); 
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/api/jobs') // TODO: Static hardcodede, need to update later
            .then((response) => {
                setJobs(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false); 
            })
    }, []) 

    return ( 
        <>  
            <Header />
            <Goal />        
            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl my-8'>Jobs List</h1>
                    <Link to='/jobs/create'>
                        <button className='p-4 bg-linear-to-r from-teal-500 to-green-500 rounded-md w-full text-neutral-50 text-2xl'>Add Job</button>
                    </Link>
                </div>
                {loading ? (
                    <h1>Loading</h1>   // Todo: add loading UI
                ) : ( 
                    <table className='w-full border-separate border-spacing-2'>
                        <thead>
                            <tr> 
                                <th className='border px-2 border-slate-600 rounded-md'>No</th> 
                                <th className='border border-slate-600 rounded-md'>Company</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Job Title</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Date Posted</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Date Applied</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Status</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Link</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Notes</th>
                                <th className='border px-2 border-slate-600 rounded-md'>Edit</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job._id} className='h-8'>
                                    <td className='border border-slate-600 rounded-md text-center'>   
                                        {index + 1}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center'>
                                        {job.company}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center max-md:hidden'>
                                        {job.role}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center max-md:hidden'>
                                        {job.date_posted}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center max-md:hidden'>
                                        {job.date_applied}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center max-md:hidden'>
                                        {job.status}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center max-md:hidden'>
                                        {job.link}
                                    </td>
                                    <td className='border border-slate-600 rounded-md text-center max-md:hidden'>
                                        {job.notes}
                                    </td>
                                    <td className='text-center'>
                                        <Link to={`/jobs/edit/${job._id}`}> 
                                            <button className='bg-linear-to-r from-cyan-500 to-blue-500 rounded-md w-full h-8 text-neutral-50'>
                                                Edit
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}


export default Home