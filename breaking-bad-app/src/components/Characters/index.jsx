import React from "react";
import {Link} from "react-router-dom";

const CharactersContainer = ({characters}) => {
    return (
        <div className={"character-container"}>
            {characters && characters.map(character => (
                <div className={"character-item"} key={character.char_id}>
                    <Link to={`/characters/${character.char_id}`}>
                        <figure>
                            <img src={character.img} alt={character.name}/>
                            <figcaption className={"character-item-name"}>{character.name}</figcaption>
                            <figcaption className={"character-item-nickname"}>({character.nickname})</figcaption>
                        </figure>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default CharactersContainer;