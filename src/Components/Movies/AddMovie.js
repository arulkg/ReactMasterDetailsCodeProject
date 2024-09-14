import {Button, Form, Segment, Message} from 'semantic-ui-react';
import React,{useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/ReactToastify.css';

function AddMovie(props){
    //Initialize movie object 
    const initialState = {
        title: "",
        movieLanguage: "",
        releaseYear: "",
        ott: ""
    };

    const [movie, setMovie] = useState(initialState);
    const [errors, setErrors] = useState({});
    // add submit click action 
    function handleSubmit(e) {
        e.preventDefault();

        // Validation checks
        const errors = {};
        if (!movie.title) {
            errors.title = "Title is required";
        }
        if (!movie.movieLanguage) {
            errors.movieLanguage = "Language is required";
        }
        if (!movie.releaseYear) {
            errors.releaseYear = "Year is required";
        }
        if (!movie.ott) {
            errors.ott = "OTT is required";
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        props.handleSubmit(movie);
        setMovie(initialState);
    }

    //Input value change 
    function handleInputChange(event) {
        const { name, value } = event.target;
        setMovie({ ...movie, [name]: value });
        setErrors({ ...errors, [name]: undefined });

    }

    return (
        <>
            <h1 style={{ marginLeft: "15px" }}> Add Movie</h1>

            <Segment clearing style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }}>
                <Form onSubmit={handleSubmit} autoComplete="off">
                    <Form.Input placeholder="Title" value={movie.title} name="title" onChange={handleInputChange} error={errors.title ? true : false} />
                    {errors.title && <Message content={errors.title} />}
                    <Form.Input placeholder="Language" value={movie.movieLanguage} name="movieLanguage" onChange={handleInputChange} error={errors.movieLanguage ? true : false} />
                    {errors.movieLanguage && <Message content={errors.movieLanguage} />}
                    <Form.Input placeholder="Year" value={movie.releaseYear} name="releaseYear" onChange={handleInputChange} error={errors.releaseYear ? true : false} />
                    {errors.releaseYear && <Message content={errors.releaseYear} />}
                    <Form.Input placeholder="OTT" value={movie.ott} name="ott" onChange={handleInputChange} error={errors.ott ? true : false} />
                    {errors.ott && <Message content={errors.ott} />}
                    <Button floated='right' positive type="submit" content="Submit" onClick={handleSubmit}/>
                    <Button floated='right' positive type="button" content="Cancel" onClick={() => props.closeForm()} />
                </Form>
            </Segment>
        </>
    );
}
export default AddMovie;