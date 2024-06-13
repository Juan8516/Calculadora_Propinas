type MenuITems = {
    id: number,
    name: string,
    price: number
}

type OrderItem = MenuITems & {
    quantity: number
}

export type {
    MenuITems,
    OrderItem
}