import { useState } from "react";
import { useLog } from "../hooks/useLog";
import {
  fetchCategories,
  fetchCategoryQuote
} from "../../services/RHKServices";

const initialState = { categories: [], currentCategory: "", currentQuote: "" };

function RHKContainer() {
  const [state, setState] = useState(initialState);

  const actions = {
    getCategories: async () => {
      const data = await fetchCategories();
      setState({ ...state, categories: data });
    },
    getCategoryQuote: async () => {
      const data = await fetchCategoryQuote(state.currentCategory);
      setState({ ...state, currentQuote: data.value });
    },
    setCurrentCategory: category => {
      setState({ ...state, currentCategory: category });
    }
  };

  /**
   * JUST COMMENT THE LINE BELOW IF LOGGING IS NOT NEEDED
   */
  useLog("RHKContainer", state);

  return { rhkState: state, rhkActions: actions };
}

export { RHKContainer };
