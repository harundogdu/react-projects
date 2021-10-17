import React from "react";
import {moneyFormat} from "../helpers";

const CardItem = ({product, basket, setBasket, total, money}) => {
    const basketItem = basket.find(item => item.id === product.id);
    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id);
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== checkBasket.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1,
                title: product.title,
                price: product.price
            }])
        }
    }
    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id);
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }
    return (
        <div className={"card-item"}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={product.image} alt={`${product.title} image`}/>
            <div className={"card-text"}>
                <h3>{product.title}</h3>
                <h3>${moneyFormat(product.price)}</h3>
            </div>
            <div className="actions">
                <button disabled={!basketItem} onClick={removeBasket} className={"btn btn-sell"}>Çıkar</button>
                <span>{basketItem ? basketItem.amount : 0}</span>
                <button disabled={total + product.price > money} onClick={addBasket} className={"btn btn-buy"}>Ekle
                </button>
            </div>
        </div>
    )
}
export default CardItem;