import { toDateString, toMilitaryTime, isDayTime } from '../utils/date';

it('gets date string in correct format', () => {
  const timezone = 'Europe/Brussels'

  const bday = toDateString(523962621, timezone);
  const testWrittenOn = toDateString(1570989132, timezone);
  const belgiumEuropeanChampion = toDateString(1594584621, timezone);

  expect(bday).toBe("Sat Aug 9th 1986");
  expect(testWrittenOn).toBe("Sun Oct 13th 2019");
  expect(belgiumEuropeanChampion).toBe("Sun Jul 12th 2020");
});

it('gets date string in custom format specified', () => {
  const timezone = 'Europe/Brussels'

  const bday = toDateString(523962621, timezone, 'DD/MM/YYYY');
  const testWrittenOn = toDateString(1570989132, timezone, 'YYYY-MM-DD');
  const belgiumEuropeanChampion = toDateString(1594584621, timezone, 'dddd Do MMMM YYYY');

  expect(bday).toBe("09/08/1986");
  expect(testWrittenOn).toBe("2019-10-13");
  expect(belgiumEuropeanChampion).toBe("Sunday 12th July 2020");
});

it('gets military time correctly', () => {
  let timezone = 'Europe/Brussels'
  
  let wakeUpTime = toMilitaryTime(1570945581, timezone);
  let drillMoment = toMilitaryTime(1570957221, timezone);
  let showerTime = toMilitaryTime(1571072433, timezone);

  expect(wakeUpTime).toBe("07:46");
  expect(drillMoment).toBe("11:00");
  expect(showerTime).toBe("19:00");

  // same timestamps but switch timezone
  timezone = 'America/Yellowknife';

  wakeUpTime = toMilitaryTime(1570945581, timezone);
  drillMoment = toMilitaryTime(1570957221, timezone);
  showerTime = toMilitaryTime(1571072433, timezone);

  expect(wakeUpTime).toBe("23:46");
  expect(drillMoment).toBe("03:00");
  expect(showerTime).toBe("11:00");
});

it('gets military time correctly', () => {
  let isDaytimeBrussels = isDayTime(1571054433, 'Europe/Brussels');
  expect(isDaytimeBrussels).toBeTruthy();

  // same timestamp, different timezone
  let isDaytimeVancouver = isDayTime(1571054433, 'America/Vancouver');
  expect(isDaytimeVancouver).toBeFalsy();
  
  // same timestamp, different timezone
  let isDayTimeSydney = isDayTime(1571054433, 'Australia/Sydney');
  expect(isDayTimeSydney).toBeFalsy();
});