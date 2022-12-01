
import './App.css';
import {useState} from "react"
import axios from "axios"
import BookMark from './components/bookmark'


function App() {
  const [images,setImages]=useState([])
  const [query, setQuery]=useState("")
  const [bookmark, setBookmark]=useState([])

  const handleImage=()=>{
      axios({
        url:`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=LXlY1POt1dQiTYrPwBWXpFhdk75q847fUnYH0g5wLRc`,
        method:"get"
      }).then((res)=>{
        // console.log(res)
        setImages(res.data.results)
      }).catch((err)=>{
        console.log(err)
      })
    }
  const handleBookmark=(e)=>{
    console.log(e.target.name)
    setBookmark([...bookmark,e.target.name])
  }
  const allBookmarks=()=>{
    console.log(bookmark)
    bookmark.map((data,i)=>{
      return(
        <div>
          <img src={data} key={i} alt=""></img>
        </div>
      )
    })
  }

  return (
    <>
      <div className='parent'>
        <div className='header'>
        <h1>React Photo Search</h1>
        <p href=''>bookmarks</p>
        </div>
        <input value={query} onChange={(e)=>setQuery(e.target.value)}></input>
        <button onClick={handleImage}>Search</button>
        <div className='imgcard'>
          {
            images.map((val,idx)=>{
              return (
                <>
                  <img src={val.urls.small} key={idx} alt='' onClick={handleBookmark} name={val.urls.small}></img>
                  {/* <span name={val.urls.small} onClick={handleBookmark}>Add</span> */}
                </>
              )
            })
          }
        </div>
      </div>
      {/* <div>
          <BookMark images={bookmark}></BookMark>
      </div> */}
      
    </>
  );
}

export default App;
