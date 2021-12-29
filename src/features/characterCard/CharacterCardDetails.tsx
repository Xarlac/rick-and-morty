import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { getEpisodes } from "../../utils/Api";
import { selectCharacterDetail } from "../dashboard/DashboardSlice";
import styles from "./CharacterCardDetails.module.scss";
import strings from "../../assets/strings.json";
import { useHistory } from "react-router-dom";
import { Character } from "../../utils/Characters";

export const CharacterCardDetails: FC = () => {
  const characterDetail: Character | null = useAppSelector(
    selectCharacterDetail
  );
  const [episodes, setEpisodes] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    if (characterDetail !== null && characterDetail.episode.length > 0) {
      const episodes: string = getLast5EpisodeId(characterDetail.episode);
      getEpisodes(episodes).then((res: any) => {
        if (Array.isArray(res)) {
          setEpisodes(res.map((data: any) => data.name));
        } else {
          setEpisodes([res.name]);
        }
      });
    }
  }, [characterDetail]);

  const goBack = () => {
    history.goBack();
  };

  const getLast5EpisodeId = (episodes: string[]): string => {
    let last5EpisodeID = "";
    for (let i = episodes.length - 1; i >= 0 && i > episodes.length - 6; i--) {
      last5EpisodeID += episodes[i].substring(40);
      last5EpisodeID += ",";
    }
    return last5EpisodeID.slice(0, -1);
  };

  if (characterDetail === null) {
    return (
      <div className={styles.characterCardDetails}>
        <h2 className={styles.noCharacter}>{strings.NoCharacterFound}</h2>
      </div>
    );
  }
  return (
    <div className={styles.characterCardDetails}>
      <span className={styles.backBtn} onClick={goBack}>
        &laquo; {strings.Back}
      </span>
      <h2 className={styles.title}>{strings.CharactersDetails}</h2>
      <div className={styles.details}>
        <img
          className={styles.image}
          src={characterDetail?.image}
          alt={characterDetail.name}
          height={250}
        />
        <h3 className={styles.fieldName}>
          {strings.Name}
          <span className={styles.fieldValue}>{characterDetail.name}</span>
        </h3>
        <h3 className={styles.fieldName}>
          {strings.Origin}
          <span className={styles.fieldValue}>
            {characterDetail.origin.name}
          </span>
        </h3>
        <h3 className={styles.fieldName}>
          {strings.LastEpisodes}
          <ul className={styles.episode}>
            {episodes.map((episode: string) => {
              return <li key={episode}>{episode}</li>;
            })}
          </ul>
        </h3>
      </div>
    </div>
  );
};
