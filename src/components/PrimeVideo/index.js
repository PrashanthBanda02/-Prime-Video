import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  return (
    <div className="app-container">
      <div className="banner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="app-banner-img"
        />
        <div className="action-movies-section">
          <h1 className="movies-section-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <div className="action-movies-section">
          <h1 className="movies-section-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
