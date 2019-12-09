import React, {Component} from 'react';

class FavMovies extends Component{
 
  render(){

    return (
      <ul>
        {this.props.profiles.map((profile)=>{
          const userName=this.props.users[profile.userID].name;
          const movieName = this.props.movies[profile.favoriteMovieID].name;

          return (
            <li key={profile.id}>
            <p>{userName} favorite movies is {movieName}</p>
    		</li>
          );

       })}
  </ul>
    );
  }
}

export default FavMovies;