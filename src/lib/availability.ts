export type MonthStatus = "available" | "booked" | "reserved";

export interface MonthAvailability {
  month: string;
  year: number;
  status: MonthStatus;
  rate: number | null;
}

export interface DayAvailability {
  date: string; // YYYY-MM-DD
  status: MonthStatus;
  dailyRate: number | null;
}

const mockData: MonthAvailability[] = [
  { month: "April", year: 2026, status: "booked", rate: null },
  { month: "May", year: 2026, status: "booked", rate: null },
  { month: "June", year: 2026, status: "available", rate: 14000 },
  { month: "July", year: 2026, status: "available", rate: 16000 },
  { month: "August", year: 2026, status: "booked", rate: null },
  { month: "September", year: 2026, status: "reserved", rate: null },
  { month: "October", year: 2026, status: "available", rate: 14000 },
  { month: "November", year: 2026, status: "available", rate: 12000 },
  { month: "December", year: 2026, status: "available", rate: 9000 },
  { month: "January", year: 2027, status: "available", rate: 8500 },
  { month: "February", year: 2027, status: "reserved", rate: null },
  { month: "March", year: 2027, status: "available", rate: 9500 },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function monthToIndex(name: string): number {
  return MONTH_NAMES.indexOf(name);
}

function expandToDays(months: MonthAvailability[]): DayAvailability[] {
  const days: DayAvailability[] = [];
  for (const m of months) {
    const mi = monthToIndex(m.month);
    const count = daysInMonth(m.year, mi);
    const dailyRate = m.rate ? Math.round(m.rate / count) : null;
    for (let d = 1; d <= count; d++) {
      const dd = String(d).padStart(2, "0");
      const mm = String(mi + 1).padStart(2, "0");
      days.push({
        date: `${m.year}-${mm}-${dd}`,
        status: m.status,
        dailyRate,
      });
    }
  }
  return days;
}

// TODO: Replace with Hospitable API call
export async function getAvailability(): Promise<MonthAvailability[]> {
  return mockData;
}

export async function getDayAvailability(): Promise<DayAvailability[]> {
  const months = await getAvailability();
  return expandToDays(months);
}
