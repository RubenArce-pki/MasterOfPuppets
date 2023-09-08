import { Grid } from "@mui/material";
import { GameStatus, GlobalGameStatus, Puppet } from "../interfaces/puppet";
import { ListPuppets } from "./ListPuppets";
import { getCurrentPuppet, getNameToShow, getWinnerName } from "../utils";
import TimerController from "./TImerController";

const MainContainer = (props: {
  listPuppets: Puppet[];
  gameStatus: GlobalGameStatus;
}) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ListPuppets
            list={props.listPuppets.filter(
              (p) => p.status == GameStatus.Waiting
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <div className="main-puppet">
            {props.gameStatus === GlobalGameStatus.Playing
              ? getNameToShow(props.listPuppets)
              : getWinnerName(props.listPuppets)}
          </div>
          <TimerController puppet={getCurrentPuppet(props.listPuppets)} />
        </Grid>
        <Grid item xs={4}>
          <ListPuppets
            list={props.listPuppets.filter(
              (p) => p.status == GameStatus.Sleeping
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContainer;
