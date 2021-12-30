import React from "react";
import {useParams, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export const CharacterDetails = () => {
    const characters = useSelector(state => state.characters.items);
    const status = useSelector(state => state.characters.status);
    const {char_id} = useParams();
    const character= characters.filter(char => Number(char.char_id) === Number(char_id))[0];
    if (status === "loading") {
        return <div>Loading...</div>
    }
    if(!character){
        return <Redirect to={"/"} />
    }
    return (
        <div className={"character-details-container"}>
            <div>
                <h2>{character.name}</h2>
                <h3>{character.birthday}</h3>
                <h3>{character.nickname}</h3>
                {
                    character.occupation && character.occupation.map((item, index) =>
                        (
                            <h5 key={index}>{item}</h5>
                        )
                    )}
            </div>
            <img src={character.img} alt={character.name} />
        </div>
    )
}
export default CharacterDetails;