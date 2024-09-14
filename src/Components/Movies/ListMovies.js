 import React,{useState,useEffect} from 'react';
 import { Fragment } from 'react';
 import {Table, Button, Confirm} from 'semantic-ui-react';
 import '../../index.css';

 function ListMovies(props){
    const [movies, setMovies] = useState([{}]);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteMovieId, setDeleteMovieId] = useState(null);
    const [deleteMovieTitle, setDeleteMovieTitle] = useState("");

    // Update the component's movies state whenever props.movies changes
    useEffect(() => {
        setMovies(props.movies);
    }, [props.movies]); // Only re-run the effect if props.movies changes

    useEffect(() => {
        // Find the movie object corresponding to the deleteMovieId and set its title
        const movieToDelete = movies.find(movie => movie.id === deleteMovieId);
        if (movieToDelete) {
            setDeleteMovieTitle(movieToDelete.title);
        }
    }, [deleteMovieId, movies]);

    function handleDelete(movieId) {
        // Close the confirmation dialog
        setConfirmOpen(false);
        // Call the deleteMovie function passed as a prop
        props.deleteMovie(movieId);
        setDeleteMovieId(null);
    }

    return (
        <>
            <Fragment>
            <h1 style={{marginLeft:"30px"}}>Movies List</h1> 
            <div>
                <Button positive content="Add Movie" onClick={()=>props.addForm()} />
            </div>
            <Table 
                celled 
                style ={{
                    marginLeft: "30px",
                    marginTop: "30px",
                    width:"1100px",
                    border:"1px solid black"
                }}
            >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Language</Table.HeaderCell>
                        <Table.HeaderCell>Year</Table.HeaderCell>
                        <Table.HeaderCell>OTT</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {movies.map((movie) => ( 
                        <Table.Row key={movie.id}>
                            <Table.Cell>{movie.title}</Table.Cell>
                            <Table.Cell>{movie.movieLanguage}</Table.Cell>
                            <Table.Cell>{movie.releaseYear}</Table.Cell>
                            <Table.Cell>{movie.ott}</Table.Cell>
                            <Table.Cell>
                                <Button positive onClick={() => props.editForm(movie)}> 
                                    EDIT 
                                </Button>
                                <Button positive onClick={() => {setDeleteMovieId(movie.id);
                                    setConfirmOpen(true);}}>
                                    Delete
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <Confirm open={confirmOpen} onCancel={() => {setConfirmOpen(false);setDeleteMovieId(null);}} 
            onConfirm={() => handleDelete(deleteMovieId)} content={`Are you sure you want to delete "${deleteMovieTitle}"?`} />
        </Fragment>
        </>
    );
}
export default ListMovies;