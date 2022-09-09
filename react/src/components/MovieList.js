import React, { Component } from 'react'
import Movie from './Movie'

class MovieList extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      load: true,
    }
  }

  render() {
    return (
      <>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="h3 mb-2 text-gray-800">
          All the movies in the Database
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </tfoot>
                <tbody>
                  {
                  this.state.load ? (
                    <tr><td>cargando...</td></tr>
                  ) : (
                    this.state.movies.map((movie, index) => { //despues de la llave va return o sino directamente poner parentesis y sin return
                      return <Movie {...movie} key={movie.title + index} />
                    })
                  )}

                  <tr>
                    <td>02</td>
                    <td>La caida del halcon negro</td>
                    <td>10</td>
                    <td>18</td>
                    <td>240</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  }

  async componentDidMount() {
    try {
      let response = await fetch('http://localhost:3001/api/movies')
      let result = await response.json()

      this.setState({
        movies: result.data,
        load: false,
      })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidUpdate() {
    console.log('El componente se actualizó correctamente');
}


}

export default MovieList
