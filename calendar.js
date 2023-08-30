const daysElement = document.getElementById("calendarDays");
const fullDateElement = document.getElementById("fullDate");
const clockElement = document.getElementById("clock");
const japaneseTimeElement = document.getElementById("japaneseTime");

const japaneseMonths = ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"];
const japaneseDays = ["日", "月", "火", "水", "木", "金", "土"];

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

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const localTime = `${hours}:${minutes}:${seconds}`;
  
  const japaneseTime = new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" });
  
  clockElement.textContent = localTime;
  japaneseTimeElement.textContent = japaneseTime;
}

const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

setInterval(() => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const localTime = `${hours}:${minutes}:${seconds}`;
  
  const japaneseTime = new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" });
  
  clockElement.textContent = localTime;
  japaneseTimeElement.textContent = japaneseTime;
}, 1000);
