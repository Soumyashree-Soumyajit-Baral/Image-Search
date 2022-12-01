
import './App.css';
import {useState} from "react"
import axios from "axios"
import BookMark from './components/bookmark'

function App() {
  const [images,setImages]=useState([])
  const [query, setQuery]=useState("")
  const [bookmark, setBookmark]=useState(["https://in.images.search.yahoo.com/images/view;_ylt=AwrPo4wcsYhjjpQKNTm9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2QzYWVjMmJlZGYyOGIzNGIxMmI1MDg1ODJiNzZmMGY0BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%26type%3DE211IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=4928&h=3280&imgurl=imaging.nikon.com%2Flineup%2Fdslr%2Fdf%2Fimg%2Fsample%2Fimg_01_l.jpg&rurl=https%3A%2F%2Fimaging.nikon.com%2Flineup%2Fdslr%2Fdf%2Fsample.htm&size=6861.8KB&p=image&oid=d3aec2bedf28b34b12b508582b76f0f4&fr2=piv-web&fr=mcafee&tt=Nikon+%7C+Imaging+Products+%7C+Sample+Images+-+Nikon+Df&b=0&ni=21&no=2&ts=&tab=organic&sigr=eshbAVkkgshy&sigb=jIB_htNACZAn&sigi=SvrBFYmtvdLg&sigt=X7p_DqlLVYz.&.crumb=7NUeVs1FVjg&fr=mcafee&fr2=piv-web&type=E211IN885G0"])

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
        <p onClick={allBookmarks}>bookmarks</p>
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
      <bookmark images={bookmark}></bookmark>
    </>
  );
}

export default App;
