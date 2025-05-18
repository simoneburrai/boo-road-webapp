import { parseISO, differenceInMonths, compareAsc } from "date-fns";


const filteredSortedTravels = (travels, monthsFilter)=>{

    return travels //riordino per data di inizio, filtro solo quelli nei prossimi 2 mesi
  .map(travel => ({
    ...travel,
    startDate: parseISO(travel.start) // parsing ISO date
  }))
  .filter(travel => differenceInMonths(travel.startDate, new Date()) <= monthsFilter)
  .sort((a, b) => compareAsc(a.startDate, b.startDate));
}

export default filteredSortedTravels;