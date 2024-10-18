export const replaceItem = <T>(list: T[], item: T, key: keyof T): T[] => {
  const newList = [...list];
  const itemIndex = newList.findIndex(
    (listItem) => listItem[key] === item[key],
  );
  newList[itemIndex] = item;
  return newList;
};

export const sortByProp = <T>(list: T[], prop: keyof T): T[] => {
  const newList = [...list];
  newList.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  return newList;
};
