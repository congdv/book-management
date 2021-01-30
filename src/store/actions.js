export const StoreActionTypes = {
  RESET_STORE: 'RESET_STORE',
};

export const resetStore = () => {
  return { type: StoreActionTypes.RESET_STORE };
};
