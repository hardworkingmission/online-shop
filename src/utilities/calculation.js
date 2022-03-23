const totalTax=(totalPrice)=>(parseFloat(totalPrice)*0.1).toFixed(2)
const totalCost=(totalPrice,shipping,tax)=>parseFloat(totalPrice)+parseFloat(shipping)+parseFloat(tax)
export{totalCost,totalTax}