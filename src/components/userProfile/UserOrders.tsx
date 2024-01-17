import { OrderItemType } from "../componentsTypes"

const UserOrders = () => {
  return (
    <div className="w-full py-4" >
      <h2 className="text-3xl font-[Teko]" >Your Orders</h2>
      <div className="flex items-center justify-center flex-col gap-4" >
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  )
}

export default UserOrders

export const Order = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg w-full" >
      {/* Order Header */}
      <div className="w-full pb-6 border-b border-secondary-color flex items-center justify-between" >
        <div>
          <h3 className="text-base font-bold max-sm:text-sm" >Order ID: 4365753456 <span className="text-green-600" >Shipped</span></h3>
          <h3 className="font-semibold text-gray-500 max-sm:text-sm" >Date: 16 December 2023</h3>
        </div>
        <div>
          <button className="px-4 py-2 rounded-lg bg-primary-color font-[Teko] text-lg max-sm:text-base font-semibold shadow-lg hover:-translate-y-1 smooth_transition" >Cancel Order</button>
        </div>
      </div>

      {/* Order contact details */}
      <div className="w-full flex items-center flex-wrap py-4 gap-3" >
        <div className="border-r min-w-[300px] max-[1020px]:border-none flex-1 border-secondary-color" >
          <h4 className="font-semibold text-gray-500 text-base max-sm:text-sm" >Contact</h4>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >Mo Amir</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >Phone: 7894561236</p>
          <p className="font-semibold text-gray-600  flex-1text-base max-sm:text-sm" >Email: mo.amir.code@gmail.com</p>
        </div>
        <div className="border-r min-w-[300px] max-[1020px]:border-none flex-1 border-secondary-color" >
          <h4 className="font-semibold text-gray-500 text-base max-sm:text-sm" >Shipping Address</h4>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >INDIA</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >Mohalla Takiya Wazirganj, Budaun</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >243726</p>
        </div>
        <div className="flex-1 min-w-[300px] max-[1020px]:border-none" >
          <h4 className="font-semibold text-gray-500 text-base max-sm:text-sm" >Payment</h4>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >UPI</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >Shipping Fee: $12</p>
          <p className="font-semibold text-gray-600 text-base max-sm:text-sm" >Total Paid: $324</p>
        </div>
      </div>


      {/* Order items */}
      <div className="w-full flex items-center flex-wrap gap-3 border-t border-secondary-color" >
        {/* <OrderItem />
        <OrderItem />
        <OrderItem /> */}
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
