import React from 'react'
import "./bookmark.css"

const Bookmark = (props) => {
  const handleRemove = (idx) => {
    alert("Image will be removed.")
    let list = [...props.bookmark]
    list.splice(idx, 1)
    props.setBookmark([...list])
  }
  return (
    <div>
      <h1 className='head'>Book Mark Images</h1>
      <marquee width="100%" direction="right" height="50px">
       * Click on images which you want to remove from your favorite list. *
      </marquee>
      {
        props.bookmark.map((data, i) => {
          return (
            <span key={i} className='image'>

              <img src={data} key={i} alt="images" className='image1' onClick={() => handleRemove(i)}></img>
              {/* <span>Remove</span> */}
            </span>
          )
        })
      }
    </div>
  )
}

export default Bookmark