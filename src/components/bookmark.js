import React from 'react'

const Bookmark = ({images}) => {
  return (
    <div>
        {
            images.map((data,i)=>{
                return(
                    <img src={data} key={i}></img>
                )
            })
        }
    </div>
  )
}

export default Bookmark