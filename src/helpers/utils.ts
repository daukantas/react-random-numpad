export const shuffle = (array: number[]): number[] => {
  const newArray = [...array];
  let currentIndex = newArray.length - 1;

  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    const temp = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temp;
    currentIndex -= 1;
  }
  return newArray;
};
