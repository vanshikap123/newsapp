import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import SearchContext from "../useContext/SearchContext";
import TopHeadlines from "../component/TopHeadlines";

const Home=()=>{

  let store = useContext(SearchContext)
  let searchItem = store.searchItem

let inputRef= useRef()
const[setvalue,searchitem] = useState("bitcoin")
console.log(setvalue)
    const [firstpge,setfirstpge]=useState(1)
  let itemPerPage = 6;
  let lastIndex = firstpge * itemPerPage
  let firstIndex = lastIndex - itemPerPage; 


  const[user,setuser] = useState([])
  let btnArr= Math.ceil(user.length/itemPerPage)
  let buttonArr=[...Array(btnArr+1).keys()].slice(1)
  console.log(buttonArr)
  let slicedArr = user.slice(firstIndex, lastIndex)
  console.log(slicedArr)

async function fetchData(){
  let res = await fetch(`https://newsapi.org/v2/everything?q=${searchItem?searchItem:setvalue}&apiKey=ba38c1ee10ce4d1d8fc6ff300745eb86`)
  let data = await res.json()
  console.log(data.articles)
  setuser(data.articles)
}
useEffect(()=>{
    fetchData()
},[setvalue,store.searchItem])
console.log(user)
   
 const handleIncrement = () => {

    if (firstpge < buttonArr.length) {
      setfirstpge(firstpge + 1)
    }

  }
  const handleDecrement = () => {

    if (firstpge > 1) {
      setfirstpge(firstpge - 1)
    }

  }

const handlesearch=(e)=>{
  e.preventDefault()
  store.setSearchItem("")
let searchValue = inputRef.current.value

if(searchValue){
  searchitem(searchValue)

}
}
    return(
        <div className="container-fluid">
            <div className="row">
              <div className="col-10 ">
              <form className="d-flex w-50 m-auto my-5 bg-dark p-3" role="search">
  <input ref={inputRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button onClick={handlesearch} className="btn btn-danger" type="submit">Search</button>
</form>

        <div className="row d-flex justify-content-center m-auto gap-4 mt-4">
            {slicedArr.map((ele)=>{
                return <div className="card p-2 " style={{width: '18rem'}}>
  <img src={ele.urlToImage} className="card-img-top " style={{width: '270px', height:'200px '}}alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
    <Link to={ele.url} className="btn btn-danger">View News</Link>
  </div>
</div> })}
<nav aria-label="Page navigation example ">
            <ul className="pagination flex-wrap my-5 d-flex justify-content-center bg-dark w-75 m-auto p-2 ">
              <li onClick={handleDecrement} className="page-item "><Link className="page-link" href="#">Previous</Link></li>
              {buttonArr.map((ele) => {
                return <li onClick={() => setfirstpge(ele)} className={firstpge===ele?"page-item active ":"page-item"}><Link class="page-link" to="#">{ele}</Link></li>
              })}

              <li onClick={handleIncrement} className="page-item"><Link className="page-link" to="#">Next</Link></li>
            </ul>
          </nav>
       
        </div>
              </div>
              <div className="col-2 mt-3 pe-5  boxYellow ">
                <h3 className="text-center  bg-warning headlineHeading">Top Headline</h3>
                <div className="headlineContainer">
                <TopHeadlines />
                </div>
              </div>
            </div>
        </div>
    )
}
export default Home;