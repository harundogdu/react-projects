import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllQuotes} from "../redux/quotes/quotesSlice";

const Quotes = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.quotes.status);
    const quotes = useSelector(state => state.quotes.items);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(getAllQuotes())
        }
    }, [dispatch, status])
    return (
        <div>
            {
                status === "succeeded" ?
                    quotes.map(quote => (
                        <div className={"quote-items"} key={quote.quote_id}>
                            <q>{quote.quote}</q>
                            <span>-{quote.author}</span>
                        </div>
                    ))
                    :
                    <div>Loading...</div>
            }
        </div>
    )
}
export default Quotes;