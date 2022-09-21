import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { imgUrl, title, description, articleid, Release, Extra } = props;
  return (
    <NavLink
      state={{
        title: title,
        img: imgUrl,
        description: description,
        id: articleid,
        Release:Release,
        Extra: Extra
      }}
      to={`${articleid}`}
    >
      <div >
        <div className="Cardcomponent">
          <div className="cardImage">
            <img src={imgUrl} alt=" " />
          </div>
          <div className="Bigcard">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{Release}</p>
        
          </div>
        </div>
        
      </div>
    </NavLink>
  );
};

export default Card;