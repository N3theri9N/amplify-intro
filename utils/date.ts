import { format, parseISO } from "date-fns";

export const parseMdxDateFormat = (date: string) => {
  return format(parseISO(date), "yyyy-MM-dd HH:mm");
};
