// Made-up sample data for the demo, generated around today's date so the demo always looks current.
// All guest names are fictional.
import { BUSINESS } from "../business.js";

const FIRST = ["Andrea", "Ben", "Carmina", "Dante", "Elise", "Franco", "Gia", "Hector", "Ivy", "Jomar", "Kaye", "Luis",
  "Mara", "Nico", "Olive", "Paolo", "Queenie", "Rafa", "Sofia", "Tristan", "Uma", "Vince", "Wendy", "Xander", "Yna", "Zed"];
const LAST = ["Aguilar", "Bautista", "Castro", "Dizon", "Estrada", "Flores", "Garcia", "Herrera", "Ilagan", "Jimenez",
  "Lopez", "Mendoza", "Navarro", "Ocampo", "Perez", "Quiambao", "Reyes", "Santos", "Torres", "Villanueva"];

// Small seeded random generator so everyone sees the same demo.
let seed = 20260927;
const rand = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);
const pick = a => a[Math.floor(rand() * a.length)];

const pad = n => String(n).padStart(2, "0");
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const today = new Date(); today.setHours(0, 0, 0, 0);
const todayStr = ymd(today);

function makeBookings() {
  const out = [];
  const start = new Date(today.getFullYear(), today.getMonth() - 8, 1);
  const end = new Date(today); end.setDate(end.getDate() + 45);
  for (const u of BUSINESS.units) {
    for (let d = new Date(start); d <= end; ) {
      const dow = d.getDay(), weekend = dow === 5 || dow === 6 || dow === 0;
      const future = d > today, daysAhead = (d - today) / 864e5;
      // busier on weekends; fewer bookings the further ahead you look
      const chance = (weekend ? 0.8 : 0.42) * (future ? Math.max(0.25, 1 - daysAhead / 50) : 1);
      if (rand() > chance) { d.setDate(d.getDate() + 1); continue; }
      const nights = rand() < 0.3 ? 2 : rand() < 0.08 ? 3 : 1;
      const guest = `${pick(FIRST)} ${pick(LAST)}`;
      const pax = Math.max(1, u.pax - Math.floor(rand() * Math.min(4, u.pax)));
      const comp = rand() < 0.015;
      for (let i = 0; i < nights && d <= end; i++) {
        const s = ymd(d), we = [5, 6, 0].includes(d.getDay());
        const total = comp ? 0 : u.rate[we ? 1 : 0];
        const down = comp ? 0 : i === 0 ? (rand() < 0.3 ? total : Math.round(total / 2)) : 0;
        out.push({
          cabin: u.id, stay_date: s, client_name: guest, phone: `(555) ${String(Math.floor(rand() * 1000)).padStart(3, "0")}-${String(Math.floor(rand() * 10000)).padStart(4, "0")}`,
          persons: pax, total, down_payment: down, commission: comp ? 0 : u.commission, complimentary: comp,
          balance_collected: s < todayStr, commission_paid: s < todayStr && rand() < 0.85,
          notes: comp ? "Complimentary (influencer stay)" : "",
        });
        d.setDate(d.getDate() + 1);
      }
      d.setDate(d.getDate() + (rand() < 0.4 ? 1 : 0));
    }
  }
  return out;
}

function makeExpenses() {
  const out = [];
  const cabins = BUSINESS.units.map(u => u.id);
  for (let m = -8; m <= 0; m++) {
    const first = new Date(today.getFullYear(), today.getMonth() + m, 1);
    const day = n => ymd(new Date(first.getFullYear(), first.getMonth(), n));
    if (m === 0 && today.getDate() < 15) continue;  // this month's bills aren't in yet
    const add = (d, category, sub, amount, cabin = "") => out.push({ spent_on: day(d), cabin, category, sub_category: sub, amount: Math.round(amount), notes: "" });
    // each typical cost varies a little month to month
    for (const [category, sub, amount, d] of BUSINESS.sampleMonthlyExpenses || []) add(d, category, sub, amount * (0.85 + rand() * 0.35));
    const avgRate = BUSINESS.units.reduce((s, u) => s + u.rate[0], 0) / BUSINESS.units.length;
    if (rand() < 0.5) add(12 + Math.floor(rand() * 10), "Repairs", "", avgRate * (0.5 + rand() * 2), pick(cabins));
  }
  return out.filter(e => e.amount > 0);
}

export const SEED_BOOKINGS = makeBookings();
export const SEED_EXPENSES = makeExpenses();
