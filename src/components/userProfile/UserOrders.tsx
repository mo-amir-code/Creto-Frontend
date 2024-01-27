import { useEffect } from "react"
import { OrderItemType } from "../componentsTypes"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { selectUserOrders } from "../../redux/user/userSlice";
import { selectLoggedInUser } from "../../redux/auth/authSlice";
import { deleteUserOrderAsync, fetchUserOrdersAsync } from "../../redux/user/userAsyncThunk";
import { APIAddressType, APIOrderItemType } from "../../redux/user/userTypes";

const UserOrders = () => {
  const dispatch = useAppDispatch();
  const userOrders = useAppSelector(selectUserOrders);
  const loggedInUser = useAppSelector(selectLoggedInUser);
  
  useEffect(() => {
    if(loggedInUser) {
      dispatch(fetchUserOrdersAsync({userId: loggedInUser?.userId}));
    }
  }, [])

  return (
    <div className="w-full py-4" >
      <h2 className="text-3xl font-[Teko]" >Your Orders</h2>
      <div className="flex items-center justify-center flex-col gap-4" >
        {
          userOrders.data?.map((order, idx) => (
            <Order key={idx} orderId={order._id} status={order.orderStatus} address={order.deliveryAddress} payment={order.paymentMode} totalAmount={order.totalAmount} items={order.orderItems} />
          ))
        }
      </div>
    </div>
  )
}

export default UserOrders

export const Order = ({orderId, status, address, payment, totalAmount, items}:{orderId:string, status:string, address:APIAddressType, payment:string, totalAmount:number, items:[APIOrderItemType]}) => {
  const dispatch = useAppDispatch();

  const handleCancleOrder = () => {
    dispatch(deleteUserOrderAsync({orderId: orderId}));
  }

  return (
    <div className="p-6 rounded-lg shadow-lg w-full" >
      {/* Order Header */}
      <div className="w-full pb-6 border-b border-secondary-color flex items-center justify-between" >
        <div>
          <h3 className="text-base font-bold max-sm:text-sm" >Order ID: {orderId} <span className="text-green-600" >{status}</span></h3>
          <h3 className="font-semibold text-gray-500 max-sm:text-sm" >Date: 16 December 2023</h3>
        </div>
        <div>
          <button onClick={()=>handleCancleOrder()} className="px-4 py-2 rounded-lg bg-primary-color font-[Teko] text-lg max-sm:text-base font-semibold shadow-lg hover:-translate-y-1 smooth_transition" >Cancel Order</button>
        </div>
      </div>

      {/* Order contact details */}
      <div className="w-full flex items-center flex-wrap py-4 gap-3" >
        <div className="border-r min-w-[300px] max-[1020px]:border-none flex-1 border-secondary-color" >
          <h4 className="font-semibold text-gray-500 text-base max-sm:text-sm" >Contact</h4>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >{address.name}</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >Phone: {address.mobileNo}</p>
          <p className="font-semibold text-gray-600  flex-1text-base max-sm:text-sm" >Email: {address.email}</p>
        </div>
        <div className="border-r min-w-[300px] max-[1020px]:border-none flex-1 border-secondary-color" >
          <h4 className="font-semibold text-gray-500 text-base max-sm:text-sm" >Shipping Address</h4>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >{address.country}</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >{address.address}</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >{address.postalCode}</p>
        </div>
        <div className="flex-1 min-w-[300px] max-[1020px]:border-none" >
          <h4 className="font-semibold text-gray-500 text-base max-sm:text-sm" >Payment</h4>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >{payment}</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >Shipping Fee: $12</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >Total Paid: {totalAmount}</p>
        </div>
      </div>


      {/* Order items */}
      <div className="w-full flex items-center flex-wrap gap-3 border-t border-secondary-color" >
        {
          items.map((item, idx) => (
            <OrderItem _id={item._id} key={idx} title={item.productId.title} thumbnail={item.productId.thumbnail} color={item.color} quantity={item.quantity} price={item.currentPrice} />
          ))
        }
      </div>
    </div>
  )
}

export const OrderItem = ({ title, thumbnail, color, quantity, price }: OrderItemType) => {
  return (
    <div className="min-w-[300px] w-full flex gap-2 max-[1020px]:border-none flex-1 py-4 " >
      <div className="w-[80px] h-[80px] flex items-center justify-center shadow-md rounded-lg" >
        <img src={thumbnail} alt="product" className="w-full object-center" />
      </div>
      <div className="py-2 flex-grow flex items-center justify-between" >
        <div className="w-full" >
          <h4 className="font-semibold text-gray-500 text-sm" >{title}</h4>
          <div className="font-semibold text-gray-500 text-sm flex items-center gap-1" ><span>Color: </span><div style={{ backgroundColor: color }} className="w-3 h-3 shadow-lg mt-1 rounded-full"></div></div>
          <h4 className="font-semibold text-gray-500 text-sm" >Item: {quantity}</h4>
        </div>
        <div className="h-full w-full flex items-end justify-end" >
          <h4 className="font-bold text-gray-500 text-sm" >SubTotal: ${price * quantity}</h4>
        </div>
      </div>
    </div>
  )
}
