const monthYear = document.getElementById('monthYear');
const calendarDates = document.getElementById('calendarDates');
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    // Clear previous dates
    calendarDates.innerHTML = "";

    // Set heading
    monthYear.textContent = `${months[currentMonth]} ${currentYear}`;

    // First day of month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    // Number of days in current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // Number of days in previous month
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    // Days from previous month (to fill the first row)
    for (let i = firstDay; i > 0; i--) {
        const div = document.createElement("div");
        div.classList.add("inactive");
        div.textContent = prevMonthDays - i + 1;
        calendarDates.appendChild(div);
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
        const div = document.createElement("div");

        // Highlight today
        if (
            i === currentDate.getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            div.classList.add("active");
        }

        const dateKey = `${currentYear}-${currentMonth + 1}-${i}`;
        if (localStorage.getItem(dateKey)) {
            div.innerHTML = `${i} 📝`;
        } else {
            div.textContent = i;
        }

        calendarDates.appendChild(div);
    }


    // Fill in next month's days to complete the row (optional, but looks nice)
    const totalBoxes = firstDay + daysInMonth;
    const remainingBoxes = 7 - (totalBoxes % 7);
    if (remainingBoxes < 7) {
        for (let i = 1; i <= remainingBoxes; i++) {
            const div = document.createElement("div");
            div.classList.add("inactive");
            div.textContent = i;
            calendarDates.appendChild(div);
        }
    }
}

// Event Listeners
prevBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

// Initial call
renderCalendar();


const notePopup = document.getElementById("notePopup");
const selectedDateText = document.getElementById("selectedDate");
const noteText = document.getElementById("noteText");
const saveNoteBtn = document.getElementById("saveNote");
const closeNoteBtn = document.getElementById("closeNote");

let selectedDayForNote = null;

// Open popup on date click
calendarDates.addEventListener("click", (e) => {
    const clicked = e.target;

    // Only dates of current month
    if (clicked.tagName === "DIV" && !clicked.classList.contains("inactive")) {
        const day = clicked.textContent;
        selectedDayForNote = `${currentYear}-${currentMonth + 1}-${day}`;

        selectedDateText.textContent = selectedDayForNote;
        noteText.value = localStorage.getItem(selectedDayForNote) || ""; // Load saved note
        notePopup.style.display = "flex";
    }
});

// Save note
saveNoteBtn.addEventListener("click", () => {
    if (selectedDayForNote) {
        localStorage.setItem(selectedDayForNote, noteText.value);
        notePopup.style.display = "none";
        renderCalendar(); // Refresh calendar to maybe show note indicator
    }
});

// Close without saving
closeNoteBtn.addEventListener("click", () => {
    notePopup.style.display = "none";
});

