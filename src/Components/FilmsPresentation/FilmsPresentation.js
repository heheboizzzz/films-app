import React from 'react'

export default function FilmsPresentation({films}) {
    console.log(films);
    return (

      <div class="p-3 mb-2 bg-dark text-white" className='container-fluid'>  
      <div class= "row d-inline-flex">
      {films.map((film)=>(
      <div class ="col-12 col-sm-6 col-md-4 p-2 ">
      <div class="  text-center height100" key={film.id}>
        <div className="image-container">
              <img class="rounded img-thumbnail" src={film.img} alt="" style={{height: '626px', width: '350px' }} className="center-image" />
              </div>
          <h3>{film.title}</h3>
          <p className='title'>{film.year}</p>
          <p className='title'>{film.nation}</p>
          <button className="btn btn-block btn-danger border center-button">Detail</button>
          </div>
        </div>
        ))}
        </div>
    </div> 
  )
}
