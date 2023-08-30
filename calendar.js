const daysElement = document.getElementById("calendarDays");
const monthYearElement = document.getElementById("monthYear");

function generateCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  monthYearElement.textContent = new Date(year, month).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  daysElement.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("day");
    daysElement.appendChild(emptyDay);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.classList.add("day");
    daysElement.appendChild(dayElement);
  }
}

const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
