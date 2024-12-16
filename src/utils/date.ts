import { format, formatDistance } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'MMMM dd, yyyy');
};

export const formatRelativeDate = (date: Date): string => {
  return formatDistance(date, new Date(), { addSuffix: true });
};

export const formatISODate = (date: Date): string => {
  return date.toISOString();
};