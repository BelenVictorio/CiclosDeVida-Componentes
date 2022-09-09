import React, { Component } from 'react';
import Genre  from './Genre';

let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]

class GenresInDb extends Component {

    constructor(){
        super()
        this.state = {
            genresList: [],
            load: true
        }
    }


    render() {
        return (
            <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                </div>
                
                <div className="card-body">
                {
                    this.state.load 
                         ? <p>cargando...</p>
                         :
                         
                
                    <div className="row">
                        {
                            this.state.genresList.map((genre,index)=>{
                                return  <Genre {...genre}  key={index} />
                            })
                        }
                    </div>
                }
                </div>
            </div>
            </div>
        )
      }



    async componentDidMount() {
        try {
            
            let response = await fetch('http://localhost:3001/api/genres')
            let result = await response.json();
            console.log(result.data);
            this.setState(
                {
                    genresList: result.data,
                    load: false
                }
            )

        } catch (error) {
            
            console.error(error)
        }
    }


    componentDidUpdate() {
        console.log('El componente se actualizó correctamente');
    }



 
}

export default GenresInDb; 

// frc-rcc 