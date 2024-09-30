import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"




const ItemsMenuMobile = () => {
  return (
    <Popover>

      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>

      <PopoverContent>
        <link href="/categories/cafe-molido" className="block">Cafe Molido</link>
        <link href="/categories/cafe-granop" className="block">Cafe En Grano</link>
        <link href="/categories/cafe-capsulas" className="block">Cafe En Capsulas</link>
      </PopoverContent>

    </Popover>
  )
}

export default ItemsMenuMobile