import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditJob = () => {
  // company, job title, date posted,
  // date applied, status, link, notes
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [status, setStatus] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/jobs/${id}`)
      .then((response) => {
        setCompany(response.data.company);
        setTitle(response.data.role);
        setDatePosted(response.data.date_posted);
        setDateApplied(response.data.date_applied);
        setStatus(response.data.status);
        setLink(response.data.link);
        setNotes(response.data.notes);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleDeleteJob = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/api/jobs/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  const handleEditJob = () => {
    const data = {
      company: company,
      role: title,
      date_posted: datePosted,
      date_applied: dateApplied,
      status: status,
      link: link,
      notes: notes,
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/api/jobs/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-xl my-4 lg:text-3xl">Edit Job</h1>
      {loading ? <h1>Loading</h1> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl max-w-[600px] lg: p-4 mx-auto">
        <div className="my-2 lg:my-4">
          <label className="text-lg lg:text-xl mr-4 text-gray-500">
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border-2 border-graya-500 px-4 my-2 py-2 w-full rounded-xl"
          />
        </div>
        <div className="my-2 lg:my-4"> 
          <label className="text-lg lg:text-xl mr-4 text-gray-500">
            Job Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-graya-500 px-4 my-2 py-2 w-full rounded-xl"
          />
        </div>
        <div className="my-2 lg:my-4">
          <label className="text-lg lg:text-xl mr-4 text-gray-500">
            Date Posted
          </label>
          <input
            type="text"
            value={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
            className="border-2 border-graya-500 px-4 my-2 py-2 w-full rounded-xl"
          />
        </div>
        <div className="my-2 lg:my-4">
          <label className="text-lg lg:text-xl mr-4 text-gray-500">
            Date Applied
          </label>
          <input
            type="text"
            value={dateApplied}
            onChange={(e) => setDateApplied(e.target.value)}
            className="border-2 border-graya-500 px-4 my-2 py-2 w-full rounded-xl"
          />
        </div>
        <div className="my-2 lg:my-4">
          <label className="text-lg lg:text-xl mr-4 text-gray-500">
            Status
          </label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border-2 border-graya-500 px-4 my-2 py-2 w-full rounded-xl"
          />
        </div>
        <div className="my-2 lg:my-4">
          <label className="text-lg lg:text-xl mr-4 text-gray-500">Link</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border-2 border-graya-500 px-4 my-2 py-2 w-full rounded-xl"
          />
        </div>
        <div className="my-2 lg:my-4">
          <label className="text-lg lg:text-xl mr-4 text-gray-500">Notes</label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="border-2 border-graya-500 px-4 my-2 py-2 w-full rounded-xl"
          />
        </div>
        <button
          onClick={handleEditJob}
          className="bg-linear-to-r from-cyan-300 to-blue-700 p-2 text-neutral-50 rounded-xl text-xl"
        >
          Save
        </button>
        <button
          onClick={handleDeleteJob}
          className="mt-4 bg-linear-to-r from-rose-300 to-red-700 p-2 text-neutral-50 rounded-xl text-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditJob;
