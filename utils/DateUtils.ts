// 根据"YY-MM-DD"格式的日期计算当前日期与其的差值
export const getDaysDiffBetweenDates = (dateFinal: string): number => {
  const diffInMs = new Date(dateFinal).getTime() - new Date().getTime();
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
};
