import type { MenuITems } from "../types"

type MenuItemProps = {
  item: MenuITems
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <button>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

