import React from "react";
import {moneyFormat} from "../helpers";

const Header = ({money, total}) => {
    return (
        <div className={"header"}>
            {
                total > 0 && money - total !== 0 && (
                    <span>Harcamak için <span
                        className={"money"}>${moneyFormat(money - total)}</span> tutarında paranız var!</span>
                )
            }
            {
                total === 0 && (
                    <span>Harcamak için <span
                        className={"money"}>${moneyFormat(money)}</span> paranız var!</span>
                )
            }
            {
                money - total === 0 && (
                    <span> <span
                        className={"money"}>${moneyFormat(total)}</span>'ı nasıl bitirdin ??? </span>
                )
            }
        </div>
    )
}

export default Header;