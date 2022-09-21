import React from 'react'
import { Link } from 'react-router-dom'

const Smallcard = (props) => {
  const { imgUrl, title, description, articleid } = props;
  return (
    <Link state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`${articleid}`}>
      <div className='Smallbox' >
        <div className="Card" >
          <div className="SmallboxImage">
            <img src={imgUrl} alt="" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Smallcard
