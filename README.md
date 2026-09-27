# Resort CRM (demo)

A phone-first booking and money app for small resorts, cabins and guesthouses. It replaces the usual Google Sheet.

- **Home**: this month's income, occupancy, commission, balances still due and next check-ins.
- **Calendar**: a week board of every unit, or a month calendar for one unit. Tap an empty night to book it. The same unit can't be booked twice on one night.
- **Bookings**: by month and unit, plus guest search.
- **Money**: income, commissions, expenses and cash surplus, month by month for each unit.

The demo runs on made-up sample data kept in the viewer's browser. "Reset demo data" restores it.

## Customize for a client

Edit `business.js`: the business name, currency, units (name, capacity, usual rates, commission), agents and expense categories.
Change the colors in the `:root` tokens at the top of `index.html`.

## Go live

1. Create a free Supabase project, run `supabase/schema.sql` in the SQL editor, and turn off public sign-ups.
2. Create one team user (Authentication → Users → Create new user, auto-confirm) with the team password.
3. Fill in `config.js` with the project URL, anon key and that user's email.
4. Host free on GitHub Pages.
