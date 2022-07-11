import './Deal.css'

const Deal = ({title, image}) => {
  return (
    <div className="deal">
      <img src={image} alt="" />
      <span>{title}</span>
    </div>
  )
}

export default Deal