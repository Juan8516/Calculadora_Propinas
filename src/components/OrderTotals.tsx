import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrent } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void

}

export default function OrderTotals({ order, tip, placeOrder } : OrderTotalsProps) {
    
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ),
    [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount= useMemo(() => subTotalAmount + tipAmount, [subTotalAmount, tipAmount])
    
    return (

    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Total y Propina</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{ formatCurrent(subTotalAmount) }</span>
            </p>

            <p>Propina: {''}
                <span className="font-bold">{ formatCurrent(tipAmount) }</span>
            </p>

            <p>Total a pagar: {''}
                <span className="font-bold">{ formatCurrent(totalAmount) }</span>
            </p>
        </div>

        <button
            className="w-full bg-black p-5 uppercase text-white font-bold my-10 disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
