import React from 'react';
import ReactDOM from 'react-dom';

import '../css/styles.css';

function DC(){
  return(
    <section className="movie">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </section>
  );
}

const Movie = () =>{
  return(
    <article className="movie_info">
      <Image />
      <MovieName />
      <Director />
      <Release />
    </article>
  );
};

const Image = () =>(
  <img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Zack_Snyder%27s_Justice_League_promo.jpeg" alt="2527s_Justice_League"/>
);

const MovieName = () =>(
  <div>
    <span>Justice League</span>
    <span>Synder Cut</span>
  </div>
);

const Director = () =>(
  <h1>Zack Snyder</h1>
);

const Release = ()=>(
  <span>5 September 2021</span>
);
ReactDOM.render(<DC />,document.getElementById("root"));
