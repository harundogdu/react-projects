import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCharacters} from "../redux/characters/chartactersSlice";
import CharactersContainer from "../components/Characters";

const Characters = () => {
    const status = useSelector(state => state.characters.status);
    const characters = useSelector(state => state.characters.items);
    const page = useSelector(state => state.characters.page);
    const hasNextPage = useSelector(state => state.characters.hasNextPage);
    const dispatch = useDispatch()
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllCharacters())
        }
    }, [dispatch,status])
    return (
        <div>
            <CharactersContainer characters={characters}/>
            <div>
                {
                    hasNextPage &&
                    <button onClick={() => dispatch(fetchAllCharacters(page))} className={"btn-load-more"}>
                        <span>{status === "loading" ? " Loading..." : "Load more.."}</span>
                    </button>
                }
                {!hasNextPage && <div className={"character-item-info"}>There is nothing to be shown!</div>}
            </div>
        </div>
    )
}
export default Characters;