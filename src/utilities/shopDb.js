const addToDB=(id)=>{
    let shoppingCart={}
    const storedCart=localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }
    const qunatity=shoppingCart[id]
    if(qunatity){
        shoppingCart[id]=qunatity+1
    }else{
        shoppingCart[id]=1
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const getStoredCart=()=>{
    let shoppingCart={}
    const storedCart=localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)

    }
    return shoppingCart
}
export{addToDB,getStoredCart}