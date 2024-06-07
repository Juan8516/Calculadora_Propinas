import { useState } from "react"
import type { orderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<orderItem[]>([])

    return {

    }
}