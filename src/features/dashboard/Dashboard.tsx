import { FC, useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCharacterInfo } from "../../utils/Api";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import {
  selectCharacters,
  selectPageCount,
  setCharacters,
} from "./DashboardSlice";
import { Characters, Character } from "../../utils/Characters";
import strings from "../../assets/strings.json";

export const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const pageCount: number = useAppSelector(selectPageCount);
  const characters: Characters | null = useAppSelector(selectCharacters);
  const [reachedBottom, setReachedBottom] = useState<boolean>(true);
  const [isApiCalled, setIsApiCalled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isApiCalled && reachedBottom) {
      setIsApiCalled(true);
      getCharacterInfo(pageCount).then((res: any) => {
        if (res?.results?.length > 0) {
          dispatch(setCharacters(res));
        }
        setReachedBottom(false);
        setIsApiCalled(false);
      });
    }
  }, [dispatch, reachedBottom, isApiCalled]);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom && reachedBottom) {
      setReachedBottom(true);
    }
  };

  return (
    <div className={styles.dashboard}>
      <div>
        <h2 className={styles.title}>{strings.Characters}</h2>
        {characters?.results?.map((character: Character) => (
          <div className={styles.character} key={character.id}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};
