import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import DeleteJob from './pages/DeleteJob';

function App() {  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/jobs/create' element={<CreateJob />} />
      <Route path='/jobs/edit/:id' element={<EditJob />} />
      <Route path='/jobs/delete/:id' element={<DeleteJob />} />
    </Routes>
  );
}

export default App;
