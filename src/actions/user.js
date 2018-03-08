export const RENAME_USER = "user/rename";

export const rename = name => ({
  type: RENAME_USER,
  payload: { name }
});
