import * as types from "../constants";

export function getListNewsAction(news) {
  return {
    type: types.LIST_NEWS,
    payload:news
  };
}