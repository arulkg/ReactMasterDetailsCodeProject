import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import React, {useState, useEffect} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import DashboardMovies from './Movies/DashboardMovies';

function Movies(){
    const [movies, setMovies] = useState([{}]);
    const [movie, setMovie] = useState();
    const [showAddForm, setshowAddForm] = useState(false);
    const [showEditForm, setshowEditForm] = useState(false);

    // Initial data bind to movies
     useEffect(() => {
        getAllMovies();
     }, []);

    //API call to Get all movies 
    function getAllMovies() {
        Axios.get("http://localhost:5020/api/Movies/GetAllMovies")
          .then((response) => {
            // Handle successful response
            console.log('Response data:', response.data);
            setMovies(response.data);
            if (response.data.length !== 0) {
              toast.success('Record Retrived Successfully!', {
                position: "top-right",
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
            else {
              toast.success('No Record Retrived!', {
                position: "top-right",
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          })
          .catch((error) => {
            // Handle error
            console.error('Error fetching movies:', error);
          });
    }
      

    
    //Edit movie API call
    function handleEditMovie(movie) {

        const data = {
          ID: movie.id,
          Title: movie.title,
          MovieLanguage: movie.movieLanguage,
          ReleaseYear: movie.releaseYear,
          OTT: movie.ott
        };
    
        Axios.put("http://localhost:5020/api/Movies/UpdateMovie", data)
          .then(response => {
            console.log('UpdateMovie response:', response.data);
            // Update the movies state with the edited movie
            setMovies(prevMovies =>
              prevMovies.map(m => (m.id === movie.id ? { ...m, ...data } : m))
            );
            setshowEditForm(false);
            getAllMovies(); // Call getAllMovies to refresh the movies list
            toast.success('Movie updated successfully!', {
              position: "top-right",
              autoClose: 3000, // Close after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch(error => {
            console.error('Error updating movie:', error);
          });
    }
    //Add movie API call
    function handleSubmit(movie) {

        const data = {
          ID: uuidv4(),
          Title: movie.title,
          MovieLanguage: movie.movieLanguage,
          ReleaseYear: movie.releaseYear,
          OTT: movie.ott
        };
        Axios.post("http://localhost:5020/api/Movies/AddMovie", data)
          .then(response => {
            console.log('AddMovie response:', response.data);
            // Update the movies state with the new movie
            setMovies(prevMovies => [...prevMovies, response.data]);
            setshowAddForm(false);
            getAllMovies(); // Call getAllMovies to refresh the movies list
            toast.success('Movie added successfully!', {
              position: "top-right",
              autoClose: 3000, // Close after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch(error => {
            console.error('Error adding movie:', error);
          });
    }
    //Delete movie API call
    function deleteMovie(id) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            id: id
          }
        };
    
        Axios.delete(`http://localhost:5020/api/Movies/DeleteByIdMovie`, config)
          .then(response => {
            console.log('DeleteMovie response:', response.data);
            getAllMovies();
            toast.success('Movie deleted successfully!', {
              position: "top-right",
              autoClose: 3000, // Close after 3 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch(error => {
            console.error('Error deleting movie:', error);
          });
    }

    //Add moive click action
    function addForm() {
        setshowAddForm(true);
        setshowEditForm(false);
    }
    
    //Cancel moive click action
    function closeForm() {
        setshowAddForm(false);
        setshowEditForm(false);
        setMovie("");
    }
    
    // Edit movie click action 
    function editForm(movie) {
        setMovie("");
        setshowAddForm(false);
        setshowEditForm(true);
        setMovie(movie);
    
    }

    return (
        <>
            <h1>List of Movies</h1>
            <DashboardMovies 
             movies={movies} 
             showAddForm={showAddForm} 
             showEditForm={showEditForm} 
             editForm={editForm} 
             addForm={addForm}  
             movie={movie} 
             deleteMovie={deleteMovie} 
             closeForm={closeForm} 
             handleSubmit={handleSubmit} 
             handleEditMovie={handleEditMovie} />
           <ToastContainer position="top-center" /> 
      
        </>
    );
}
export default Movies;