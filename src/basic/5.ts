enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
	if (day === DayOfWeek.Sunday) {
		return true;
	} else if (day === DayOfWeek.Saturday) {
		return true;
	} else {
		return false;
	}
};

export{isWeekend,DayOfWeek}