const apps = [
  { id: 1, name: 'Primeira' },
  { id: 2, name: 'Segunda' },
  { id: 3, name: 'Terceira' },
  { id: 4, name: 'Quarta' },
  { id: 5, name: 'Quinta' },
  { id: 6, name: 'Sexta' },
  { id: 7, name: 'Sabado' },
  { id: 8, name: 'Domingo' },
  { id: 9, name: 'Primeira' },
  { id: 10, name: 'Segunda' },
  { id: 11, name: 'Terceira' },
  { id: 12, name: 'Quarta' },
  { id: 13, name: 'Quinta' },
  { id: 14, name: 'Sexta' },
  { id: 15, name: 'Sabado' },
  { id: 16, name: 'Domingo' },
]

export default function Menu() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-700">
      <div className="grid w-5/6 grid-flow-row bg-white grid-flow-auto auto-cols-max h-3/4">
        {apps.map(({ id, name }) => (
          <div className="flex flex-col items-center gap-2" key={`menu_${id}`}>
            <div className="w-32 h-32 bg-red-500 aspect-square"></div>
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
