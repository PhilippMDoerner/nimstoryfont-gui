export const replaceItem = <T>(list: T[], item: T, key: keyof T): T[] => {
  const newList = [...list];
  const itemIndex = newList.findIndex(
    (listItem) => listItem[key] === item[key],
  );
  newList[itemIndex] = item;
  return newList;
};
