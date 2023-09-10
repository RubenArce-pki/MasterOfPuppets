import { GameStatus, Puppet } from "./interfaces/puppet";

export const getNameToShow = (people: Puppet[]) => {
  const currentSpeaker = people.find((p) => p.status == GameStatus.Talking);
  if (currentSpeaker) return currentSpeaker.name;
  else return "Waiting puppets...";
};

export const getCurrentPuppet = (people: Puppet[]): Puppet | undefined => {
  const currentSpeaker = people.find(
    (p: Puppet) => p.status == GameStatus.Talking
  );
  if (currentSpeaker) return currentSpeaker;
};

export const getImgToShow = (people: Puppet[]) => {
  const currentSpeaker = people.find((p) => p.status == GameStatus.Talking);
  if (currentSpeaker) return currentSpeaker.img;
  else return "/images/doll.png";
};

export const getWinnerName = (people: Puppet[]): string => {
  people.sort((a, b) => {
    if (a.elapsedTime !== undefined && b.elapsedTime !== undefined)
      return a.elapsedTime - b.elapsedTime;
    return 0;
  });
  return people[0].name;
};

export const millisToMinutesAndSeconds = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;
};
