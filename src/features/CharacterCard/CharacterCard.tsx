import { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { Character } from "../../utils/Characters";
import { setCharacterDetail } from "../dashboard/DashboardSlice";
import styles from "./CharacterCard.module.scss";

export interface ICharacterCardProps {
  character: Character;
}

export const CharacterCard: FC<ICharacterCardProps> = (props) => {
  const dispatch = useAppDispatch();
  const character: Character = props.character;
  const history = useHistory();

  const handleClick = useCallback(() => {
    dispatch(setCharacterDetail(character));
    history.push("/details");
  }, [dispatch, history, character]);

  return (
    <div className={styles.characterCard}>
      <p className={styles.characterName}>{character.name}</p>
      <span className={styles.characterImage} onClick={handleClick}>
        <img src={character.image} alt={character.name} height={250} />
      </span>
    </div>
  );
};
