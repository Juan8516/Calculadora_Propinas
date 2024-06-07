type MenuITems = {
    id: number,
    name: string,
    price: number
}

type orderItem = MenuITems & {
    quantity: number
}

export type {
    MenuITems,
    orderItem
}