import {Button, Grid, GridColumn} from 'semantic-ui-react';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import ListMovie from './ListMovies';
import React,{useState} from 'react';
import ListMovies from './ListMovies';

function DashboardMovies(props){
    return (
        <Grid>
            <Grid.Column width="10">
                <ListMovies movies = {props.movies} addForm={props.addForm} editForm={props.editForm} deleteMovie={props.deleteMovie} />
            </Grid.Column>
            <Grid.Column width="6">
                {props.showAddForm && (<AddMovie closeForm={props.closeForm} handleSubmit={props.handleSubmit} />)}
                {props.showEditForm && (<EditMovie movie={props.movie} closeForm={props.closeForm} handleEditMovie={props.handleEditMovie} />)}
            </Grid.Column>
        </Grid>
    );
}
export default DashboardMovies;

