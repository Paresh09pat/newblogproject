import React from 'react'
import { useLocation } from 'react-router-dom'
import "./SinglePage.css";


const SingleBlogPage = () => {
  const location = useLocation();
  const { title, img, description } = location.state;
  console.log(title)
  return (
    <div className='blogpage'>
      <h1 style={{color: 'red',textShadow: "4px 4px 4px blue"}}>{title}</h1>
      <img src={img} alt="" />
      <p>{description}</p> <br/>



      
      <p>Born in south Mumbai, Kapoor is the second son of film director and actor Raj Kapoor. He did his schooling with his brothers at Mumbai's Campion School.
        His brothers are well-known actors, Randhir Kapoor and Rajiv Kapoor. Rishi Kapoor debuted in his father's 1970 film Mera Naam Joker,
        playing his father's role as a child. Rishi Kapoor had his first lead role opposite Dimple Kapadia in the popular 1973 film Bobby which
        became an instant hit among youngsters. He made a popular pairing with future wife Neetu Singh in 1974-1981 but the pair was successful
        only in films with big casts, since films with Rishi as the lead - like Zehreela Insaan, Zinda Dil, Doosara Aadmi, Anjane Mein, Jhoota Kahin Ka,
        Dhan Daulat - were box office flops. Rishi Neetu pair was successful in multi-star films like Khel Khel Mein, Kabhie Kabhie, Amar Akbar Anthony,
        Pati Patni Aur Woh, Duniya Meri Jeb Mein.</p>

        <br/>
        <p>Born in south Mumbai, Kapoor is the second son of film director and actor Raj Kapoor. He did his schooling with his brothers at Mumbai's Campion School.
        His brothers are well-known actors, Randhir Kapoor and Rajiv Kapoor. Rishi Kapoor debuted in his father's 1970 film Mera Naam Joker,
        playing his father's role as a child. Rishi Kapoor had his first lead role opposite Dimple Kapadia in the popular 1973 film Bobby which
        became an instant hit among youngsters. He made a popular pairing with future wife Neetu Singh in 1974-1981 but the pair was successful
        only in films with big casts, since films with Rishi as the lead - like Zehreela Insaan, Zinda Dil, Doosara Aadmi, Anjane Mein, Jhoota Kahin Ka,
        Dhan Daulat - were box office flops. Rishi Neetu pair was successful in multi-star films like Khel Khel Mein, Kabhie Kabhie, Amar Akbar Anthony,
        Pati Patni Aur Woh, Duniya Meri Jeb Mein.</p>

    </div>
  )
}

export default SingleBlogPage