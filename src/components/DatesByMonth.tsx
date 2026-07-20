// DatesByMonth.tsx
import React from "react";

type Props = { dates: string[] };

const DatesByMonth: React.FC<Props> = ({ dates }) => {
  // parse és normalizálás
  const parsed = dates
    .map((d) => {
      const cleaned = d.replace(/\./g, "").replace(/-/g, "/").trim();
      const date = new Date(cleaned);
      return isNaN(date.getTime()) ? null : date;
    })
    .filter(Boolean) as Date[];

  const grouped = parsed.reduce<Record<string, Record<number, Date[]>>>(
    (acc, date) => {
      const year = String(date.getFullYear());
      const month = date.getMonth(); // 0-11
      acc[year] = acc[year] || {};
      acc[year][month] = acc[year][month] || [];
      acc[year][month].push(date);
      return acc;
    },
    {},
  );

  const years = Object.keys(grouped).sort((a, b) => Number(a) - Number(b));

  const dayMonthShort = (d: Date) =>
    d.toLocaleDateString("hu-HU", { day: "2-digit", month: "short" });
  const monthName = (year: string, monthIndex: number) =>
    new Date(Number(year), monthIndex, 1).toLocaleDateString("hu-HU", {
      month: "long",
    });

  return (
    <div className="max-w-6xl mx-auto px-4">
      {years.map((year) => {
        const monthsObj = grouped[year];
        const months = Object.keys(monthsObj)
          .map(Number)
          .sort((a, b) => a - b);
        return (
          <section key={year} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{year}</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {months.map((m) => (
                <div key={m} className="bg-white/0">
                  <h3 className="text-lg font-medium mb-3 capitalize">
                    {monthName(year, m)}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {monthsObj[m]
                      .sort((a, b) => a.getTime() - b.getTime())
                      .map((d) => (
                        <button
                          key={d.toISOString()}
                          className="border rounded-md py-4 px-3 text-center text-base md:text-lg focus:outline-none hover:shadow-sm"
                          type="button"
                        >
                          {dayMonthShort(d)}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default DatesByMonth;
