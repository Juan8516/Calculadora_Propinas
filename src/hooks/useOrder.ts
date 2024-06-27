import { useState } from "react"
import { MenuITems, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item : MenuITems) => {
        const itemExist = order.find(OrderItem => OrderItem.id === item.id)
        if(itemExist){
            const updateOrder = order.map(OrderItem => OrderItem.id === item.id ? 
                {...OrderItem, quantity: OrderItem.quantity + 1} : 
                OrderItem
            )
            setOrder(updateOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuITems['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem
    }
}