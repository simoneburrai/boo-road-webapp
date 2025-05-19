import { parseISO, differenceInMonths, isAfter, isEqual, compareAsc } from 'date-fns';

const filteredSortedTravels = (travels, monthsFilter) => {
  const today = new Date();

  return travels
    .map(travel => ({
      ...travel,
      startDate: parseISO(travel.start)
    }))
    .filter(travel =>
      (isAfter(travel.startDate, today) || isEqual(travel.startDate, today)) &&
      differenceInMonths(travel.startDate, today) <= monthsFilter
    )
    .sort((a, b) => compareAsc(a.startDate, b.startDate))
    .slice(0, 6)
    .map(({ startDate, ...rest }) => rest);
};

export default filteredSortedTravels;