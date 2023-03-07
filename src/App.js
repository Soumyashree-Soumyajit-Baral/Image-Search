
import './App.css';
import {useState} from "react"
import axios from "axios"
// import BookMark from './components/bookmark'
import {useNavigate} from "react-router-dom"


function App(props) {
  const [images,setImages]=useState([])
  const [query, setQuery]=useState("")
  // const [bookmark, setBookmark]=useState([])
  const navigate=useNavigate()

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
    
    props.setBookmark([...props.bookmark,e.target.name])
    alert("Image has been added to your Book Mark list")
  }
  

  return (
    <>
    <marquee width="100%" direction="right" height="30px">
       * Click on images which you want to add to your favorite list. *
      </marquee>
      <div className='parent'>
        <div className='header'>
        <h1>React Photo Search</h1>
        
        </div>
        <div className='flex'>
        <span onClick={()=>navigate("/bookmark")} className='p'>bookmarks</span>
        <input value={query} onChange={(e)=>setQuery(e.target.value)}></input>
        <button onClick={handleImage}>Search</button>
        </div>
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
