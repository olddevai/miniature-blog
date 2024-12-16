import readingTime from 'reading-time';

export const getReadingTime = (content: string): string => {
  const stats = readingTime(content);
  return stats.text;
};