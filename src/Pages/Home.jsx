import React, { useContext } from "react";
import Card from "../Component/Card";
import CardHome from "../Component/Homecard";
import Smallcard from "../Component/Smallcard";
import { store } from "./MainDataStore";


const Home = () => {
  const [detail] = useContext(store);
  return (
    <div>

       
       <div className="Follow">
      
<div>
<i className='fab fa-facebook-f' style={{ color:'white'}}></i>
<span style={{ color:'white'}}> Facebook</span>
</div>

<div>
<i className='fab fa-pinterest' style={{ color:'white'}}></i>
<span style={{ color:'white'}}> Pinterest</span>
</div>

<div>
<i className='fab fa-twitter'style={{ color:'white'}}></i>
<span style={{ color:'white'}}> Twitter</span>
</div>

<div>
<i className='fa fa-envelope' style={{ color:'white'}}></i>
<span style={{ color:'white'}}> Mail</span>
</div>

    </div>
      
      <div className="Home">
        <div className="Componenthome">
          <div className="Home1"> <img className="mainpic" src="https://images.thrillophilia.com/image/upload/s--HPalFNSy--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/075/465/original/Khandala.jpg.jpg" alt=""/>  </div>
          <div className="Homerightcom">

            <div className="Helicopter">
                <img
                  src="https://www.wallpapertip.com/wmimgs/59-599333_rohit-sharma-in-cricket-world-cup-2019-4k.jpg"
                  alt="" />
            </div>

            <div className="Nature">
                <img
                  src="https://thumbs.dreamstime.com/b/bird-s-eye-view-nainital-lake-china-peak-bird-s-eye-view-nainital-lake-china-peak-nainital-uttarakhand-india-197870237.jpg"
                  alt=""
                />
             
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "40px",color: 'red',textShadow: "4px 4px 4px blue" }}>The Latest</h1>
        
        <div className="homeleft left1 ">
          {detail
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
               
              />
            ))}
        </div>
        <div className="homeleft left1">
          {detail
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
              />
            ))}
        </div>
        <div className="homeleft left1">
          {detail
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" ,color: 'red',textShadow: "4px 4px 4px blue"}}>
          Latest Articles
        </h1> <br/>
        <h1 className="Toppost">Top Posts</h1>

        <div className="Rightside2">
          {detail
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card 
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        
        <div className="Leftside2">
          {detail
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Smallcard
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                description={n.description.slice(0, 200)}
                title={n.title.slice(0, 25)}
                author={n.author}
              />
            ))}

        </div> <br/>

        <h1 style={{ marginTop: "20px", display: "inline-block",color: 'red',textShadow: "4px 4px 4px blue" }}>
          Latest Stories
        </h1>
<div className="mainhomeleft">

<div className="homeleft">
          {detail
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="homeleft">
          {detail
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
              
              />
            ))}
        </div>

        <div className="homeleft">
          {detail
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
               
              />
            ))}
        </div>
</div>
        
      </div>
    </div>
  );
};

export default Home;
