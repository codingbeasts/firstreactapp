import React from 'react';
import ReactDOM from 'react-dom';

import '../css/styles.css';

const movieInfo = {
  movieName:["Men of Steel","Batman v Superman: Dawn of Justice","Wonder Woman","Justice League","Aquaman"],
  movieImage:["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLtBapSgavJgGxTgMgC-Q-9DRivYiyOw9EXeFeX7iXiVvYytGz",
  "https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91FsZrtVvDL._RI_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAW8_E8ynNo97bf-PGda55Uruz9eCH1HP8gw&usqp=CAU",
  "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg"],
  movieDirector:["Zack Snyder","Zack Snyder","Patty Jenkins","Zack Snyder","James Wan"],
  movieReleaseDate:["14 June 2013","25 March 2016","15 May 2017","15 November 2017","14 December 2018"]
};

function DC(){
  return(
    <section className="movie">
      <Movie mName={movieInfo.movieName[0]} mImg={movieInfo.movieImage[0]} mDir={movieInfo.movieDirector[0]} mRel={movieInfo.movieReleaseDate[0]} />
      <Movie mName={movieInfo.movieName[1]} mImg={movieInfo.movieImage[1]} mDir={movieInfo.movieDirector[1]} mRel={movieInfo.movieReleaseDate[1]} />
      <Movie mName={movieInfo.movieName[2]} mImg={movieInfo.movieImage[2]} mDir={movieInfo.movieDirector[2]} mRel={movieInfo.movieReleaseDate[2]} />
      <Movie mName={movieInfo.movieName[3]} mImg={movieInfo.movieImage[3]} mDir={movieInfo.movieDirector[3]} mRel={movieInfo.movieReleaseDate[3]} />
      <Movie mName={movieInfo.movieName[4]} mImg={movieInfo.movieImage[4]} mDir={movieInfo.movieDirector[4]} mRel={movieInfo.movieReleaseDate[4]} />
    </section>
  );
}

const Movie = (props) =>{
  return(
    <article className="movie_info">
      <img src={props.mImg} alt="2527s_Justice_League"/>
      <span>{props.mName}</span>
      <h1>{props.mDir}</h1>
      <span>{props.mRel}</span>
    </article>
  );
};
ReactDOM.render(<DC />,document.getElementById("root"));
