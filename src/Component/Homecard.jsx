import React from 'react'
import { NavLink} from 'react-router-dom';

const CardHome = (props) => {
    const { imgUrl, title, description, articleid } = props;
    return (
        <NavLink state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`article/${articleid}`}>
          <div className={articleid}>
            <div className="cardHome" >
              <div className='cardImage'>
                <img src={imgUrl} alt="" />
              </div>
              <div className='homeBigcard'  >
                <h3 >{title}</h3>
                <p>{description}....</p>
              </div>
            </div>
            <hr style={{ fontWeigth: "30px", color: "black" }} />
          </div></NavLink>
    )
          
}

export default CardHome;
