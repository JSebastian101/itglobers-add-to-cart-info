import React from "react"
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtomGroup from "./ButtomGroup"
import { generateBlockClass } from "@vtex/css-handles"
import styles from './styles.css'
/* import Totalizers from "./Totalizers" */
/* import ProductGroup from "./ProductGroup" */

const AddToCartInfo = ({ blockClass } : {blockClass: string}) => {
  const classes = generateBlockClass(styles.container, blockClass)
  const itemClass = generateBlockClass(styles.container__item, blockClass)
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log('info de producto', productInfo);
  
  return (
    <div className={classes}>
    {
      items.map((item: any, index:number) => {
        console.log('este es mi item en el map',item);
        return (
          <div key={index} className={itemClass}>
            <img src={item.imageUrls.at1x} alt="item-name" />
            <p>{item.name}</p>
            <p>{item.id}</p>
            <p>${item.price / 100}</p>
            <p>Cantidad {item.quantity}</p>
          </div>
        )
      })
    }
    <div>
      <p>tenemos x items en tu compra</p>
      <p>Total: ${totalizers[0]?.value / 100}</p>
    </div>
      <ButtomGroup/>
    </div>
  )
}

export default AddToCartInfo

/*       <ProductGroup products={items}/> */
/*       <Totalizers totalizers ={totalizers[0]}/> */
