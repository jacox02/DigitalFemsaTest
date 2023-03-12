import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovementState } from "../../core/types/MovementState.type";
import { Movement } from "../../core/types/Movement.type";

const initialState: MovementState = {
  movements: [],
  filteredMovements: [],
};

export const movementsSlice = createSlice({
  name: "movements",
  initialState: initialState,
  reducers: {
    init: (state: any, { payload }: PayloadAction<Movement[]>) => {
      state.movements = payload;
      state.filteredMovements = state.movements;
    },
    filter: (state: any, action: PayloadAction<FilterPayload>) => {
      let filteredMovements: Movement[] = [];
      switch (action.payload) {
        case "ALL":
          filteredMovements = state.movements;
          break;
        case "WON":
          filteredMovements = state.movements.filter(
            (movement: Movement) => movement.is_redemption === false
          );
          break;
        case "PAID":
          filteredMovements = state.movements.filter(
            (movement: Movement) => movement.is_redemption === true
          );
          break;
        default:
          filteredMovements = state.movements;
          break;
      }
      state.filteredMovements = filteredMovements;
    },
  },
});
