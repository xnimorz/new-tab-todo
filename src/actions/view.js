export const CHANGE_VIEW = "view/change";

export const changeView = type => ({
  type: CHANGE_VIEW,
  payload: { type }
});
