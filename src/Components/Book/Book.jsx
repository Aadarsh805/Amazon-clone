import './Book.css'

const Book = ({image}) => {
  return (
    <div className="book">
        <img class="img" src={image} alt="" />
    </div>
  )
}

export default Book