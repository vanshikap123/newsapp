import { useContext } from "react"
import { Link } from "react-router-dom"
import SearchContext from "../useContext/SearchContext"

const Navbar=()=>{

  let store = useContext(SearchContext)

  const handleLinkClicked=(ans)=>{
    console.log(ans)
    store.setSearchItem(ans)
  }
    return(
<div>
<nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" href="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
      <li className="nav-item" onClick={()=>handleLinkClicked('sports')}>
          <Link className="nav-link active text-white" aria-current="page" href="#">Sport</Link>
        </li>
        <li onClick={()=>handleLinkClicked('world')} className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" href="#">World</Link>
        </li>
        <li onClick={()=>handleLinkClicked('bollywood')} className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" href="#">Bollywood</Link>
        </li>
      
        <li onClick={()=>handleLinkClicked('music')} className="nav-item">
          <Link  className="nav-link active text-white" aria-current="page" href="#">music</Link>
        </li>
      
       
      </ul>
    
    </div>
  </div>
</nav>

</div>
    )
}
export default Navbar