import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <li className="eachMovie-container">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="movie-thumbnail"
            />
          </li>
        }
      >
        {close => (
          <div className="model-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              aria-label="Close Modal"
              data-testid="closeButton"
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={videoUrl}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
