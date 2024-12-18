export const getId = () => {
  const dataId = Math.floor(Math.random() * 1000000);
  return dataId.toString();
};
