import { formatCurrent } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({order}: OrderContentsProps) {
  return (
    <div>
        <h2 className=' font-black text-4xl'>Consumo</h2>
        <div className='space-y-3 mt-5 text-xl'>
            {order.length === 0 ?
              <p className="text-center text-xl">la orden esta vacia</p>  
          :(
              order.map(item => (
                <div key={item.id}>
                  <p>
                    {item.name} - {formatCurrent(item.price)}
                  </p>
                  <p>
                    Cantidad: {item.quantity} - {item.price * item.quantity}
                  </p>
                </div>
              ))
          )}
        </div>
    </div>
  )
}
