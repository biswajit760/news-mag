import image from "../assets/News Img.jpg"
import "../App.css" 
const NewsItem = ({title, description, src, url}) => {
  return (
   
       <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-3 py-3" style={{maxWidth: "400px" }}>
      <img src={src?src:image} style={{height:"200px", width:"350px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description? description.slice(0,150) : "Lorem ipsum dolor, sie velit. Libero magni ex soluta aliquam dignissimos sint nisi tenetur tempora esse enim modi, sapiente illo dolore ratione voluptatem!" }
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
   
  );
}

export default NewsItem