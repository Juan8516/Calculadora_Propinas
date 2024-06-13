import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {

  console.log(menuItems)

  return (
    <>
      <header className=" bg-teal-400 py-10">
        <h1 className="text-center text-4xl font-black">Calculadora Propinas Y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-4xl font-black">Menú</h2>

            <div className="space-y-3 mt-10">
              {menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          

        </div>
      </main>
    </>
  )
}

export default App
