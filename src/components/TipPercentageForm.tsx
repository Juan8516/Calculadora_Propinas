const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

export const TipPercentageForm = () => {
  return (
    <div>
        <form>
            <h3 className="font-black text-2xl mb-2">Propinas: </h3>
            {tipOptions.map(tip => (
                <div 
                    className="flex gap-2"
                    key={tip.id}>
                    <label htmlFor={tip.id}>{tip.label}</label>
                    <input
                        id={tip.id}
                        type="radio"
                        name="tip"
                        value={tip.value}
                    />    
                </div>
            ))}
        </form>
    </div>
  )
}
