import React from "react";
import {moneyFormat} from "../helpers";

const Footer = ({setBasket, basket, total}) => {
    const clearBasket = () => {
        setBasket([]);
    }
    return (
        <div className={"footer"}>
            <div className={"footer-header"}>Sepetiniz</div>
            <div className={"footer-container"}>
                {basket.map(item => (
                    <div className={"footer-basket-item"} key={item.id}>
                        <span>{item.title}</span>
                        <span> {item.amount}</span>
                    </div>
                ))}
            </div>
          <div className="button-container">
              <span>Toplam: ${moneyFormat(total)}</span>
              <button onClick={clearBasket} className="btn btn-reset">Sepeti Sıfırla</button>
          </div>
        </div>
    )
}
export default Footer