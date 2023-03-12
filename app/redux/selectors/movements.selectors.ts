import { MovementState } from "./../../core/types/MovementState.type";
import { Movement } from "../../core/types/Movement.type";

export const selectPoints = (state: MovementState) => {
  let userPoints = 0;
  state.movements.map(({ points, is_redemption }: Movement) => {
    userPoints = is_redemption ? userPoints - points : userPoints + points;
  });
  return userPoints;
};
