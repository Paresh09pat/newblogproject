import React, { useState, useEffect } from 'react'
import fetchData from './api';
import Card from '../Component/Card'
import Smallcard from '../Component/Smallcard';

export const Technology = () => {
  const [apidata, setData] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      setData(await fetchData());
    };
    apiFetch();
  }, [apidata]);

  return (
    <div><br /><br />
      <h1 className='bollyhead'>Technology</h1>
      <h1 className='bollyhead1'>Top Posts</h1><br />

      <div className="Bigcomponent">
        <div className='Rightside'>
          {apidata &&
            apidata.filter((data) => data.category === "Technology")
              .map((data) => (<Card
                key={data.id}
                articleid={data.id}
                imgUrl={data.Image}
                description={data.description.slice(0, 200)}
                title={data.title}

              />))
          }
        </div>
        <div className="Leftside">
          {apidata &&
            apidata.filter((data) => data.category === "Technology")
              .map((data) => (
                <Smallcard
                  key={data.id}
                  articleid={data.id}
                  imgUrl={data.Image}
                  description={data.description.slice(0, 200)}
                  title={data.title}

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