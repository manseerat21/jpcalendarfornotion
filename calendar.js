const daysElement = document.getElementById("calendarDays");
const fullDateElement = document.getElementById("fullDate");

const japaneseMonths = ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"];
const japaneseDays = ["日", "月", "火", "水", "木", "金", "土"];

const clockElementLeft = document.getElementById("clock-left");
const clockElementRight = document.getElementById("clock-right");

function generateCalendar(year, month, day) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const today = new Date().getDate();

  const japaneseMonthName = japaneseMonths[month];
  const japaneseDay = japaneseDays[new Date(year, month, day).getDay()];

  fullDateElement.textContent = `${year}年${month + 1}月${day}日 (${japaneseDay})`;
  daysElement.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("day");
    daysElement.appendChild(emptyDay);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = d;
    dayElement.classList.add("day");

    if (d === today) {
      dayElement.classList.add("highlight");
    }

    daysElement.appendChild(dayElement);
  }
}

const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

function updateClocks() {
  const now = new Date();

  // Update local time clock (clock-left)
  const localTimeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const localTime = now.toLocaleTimeString(undefined, localTimeOptions);
  clockElementLeft.textContent = `now:${localTime}`;

  // Update JST time clock (clock-right)
  const jstTimeOptions = { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const jstTime = now.toLocaleTimeString(undefined, jstTimeOptions);
  clockElementRight.textContent = `jst: ${jstTime}`;
}

updateClocks();
setInterval(updateClocks, 1000);
