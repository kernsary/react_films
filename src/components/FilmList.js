import React, {Component} from 'react'
import Film from './Film'

class FilmList extends Component {

  render(){

    const filmNodes = this.props.films.map(film => {
      return(
        <Film
        key={film.id}
        url={film.url}
        name={film.name}
        >
        </Film>
      )
    })

    return(
      <ul className="FilmList">
      {filmNodes}
      </ul>

    )
  }

}

export default FilmList
