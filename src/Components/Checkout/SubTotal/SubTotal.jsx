import './SubTotal.css'
import {useStateValue} from '../../../StateProvider'
import {subTotal} from '../../../reducer'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircle from '@mui/icons-material/CheckCircle';

const SubTotal = () => {
    const [{cart}, dispatch] = useStateValue()
    let total = subTotal(cart)
  return (
    <div className="subtotal">
        <p className="eligible">
            <CheckCircle className="checkIcon"/>
            <span>Your order is eligible for FREE Delivery</span>
        </p>
        <h1>Subtotal({cart?.length}  item): ${total}</h1>

        <button className="checkoutBtn">
            Proceed to Buy
        </button>
    </div>
  )
}

export default SubTotal