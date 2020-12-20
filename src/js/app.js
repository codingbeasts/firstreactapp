import React from 'react';
import ReactDOM from 'react-dom';

import '../css/styles.css';
const movieInfo=[
  {
    id:1,
    name:"Men of Steel",
    image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLtBapSgavJgGxTgMgC-Q-9DRivYiyOw9EXeFeX7iXiVvYytGz",
    alt:"steel",
    director:"Zack Snyder",
    releasedate:"14 June 2013"
  },
  {
    id:2,
    name:"Batman v Superman: Dawn of Justice",
    image:"https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg",
    alt:"dawn",
    director:"Zack Snyder",
    releasedate:"25 March 2016"
  },
  {
    id:3,
    name:"Wonder Woman",
    image:"https://images-na.ssl-images-amazon.com/images/I/91FsZrtVvDL._RI_.jpg",
    alt:"wonder",
    director:"Patty Jenkins",
    releasedate:"15 May 2017"
  },
  {
    id:4,
    name:"Justice League",
    image:"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Justice-League-teaser-poster.jpg",
    alt:"League",
    director:"Zack Snyder",
    releasedate:"15 November 2017"
  },
  {
    id:5,
    name:"Aquaman",
    image:"https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg",
    alt:"aqua",
    director:"James Wan",
    releasedate:"14 December 2018"
  }
];

function DC(){
  return(
    <section className="movie">
      {
        movieInfo.map((movie)=>{
          return <Movie key={movie.id} {...movie} />; //--- spread operator
          // return <Movie key={movie.id} movies={movie} />;
        })
      }
    </section>
  );
}

const Movie = ({name,image,alt,director,releasedate}) =>{
  // const {name,image,alt,director,releasedate} = props; without prop.Object or
  /*
    pass function parameters like const Movie = ({name,image,alt,director,releasedate}) =>{};
  */
  // const {name,image,alt,director,releasedate} = props.movies;
  return(
    <article className="movie_info">
      <img src={image} alt={alt}/>
      <span>{name}</span>
      <h1>{director}</h1>
      <span>{releasedate}</span>
    </article>
  );
};
ReactDOM.render(<DC />,document.getElementById("root"));
