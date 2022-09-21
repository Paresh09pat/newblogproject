import React, {useContext} from 'react'
import { store } from './MainDataStore'
import Card from '../Component/Card'
import Smallcard from '../Component/Smallcard';

export const Technology = () => {
  const [detail ] = useContext(store);
  return (
    <div><br/><br/>
            <h1 className='bollyhead'>Technology</h1>
            <h1 className='bollyhead1'>Top Posts</h1><br/>

            <div className="Bigcomponent">
            <div className='Rightside'>
                  {
                    detail.filter((article) =>{return article.category === "Technology"}).map((n)=>( <Card 
                      key={n.id}
                      articleid={n.id}
                      imgUrl = {n.Image}
                      description={n.description.slice(0, 200)}
                      title={n.title}

                      />))
                  }
            </div>
            <div className="Leftside">
                    {
                        detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                            <Smallcard
                            key={n.id}
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 0)}
                               
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Technology