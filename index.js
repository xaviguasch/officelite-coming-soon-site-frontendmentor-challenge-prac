const launchDateDay = document.querySelector('#launch-date__day')
const launchDateMonth = document.querySelector('#launch-date__month')
const launchDateYear = document.querySelector('#launch-date__year')
const countdownDays = document.querySelector('#countdown__days')
const countdownHours = document.querySelector('#countdown__hours')
const countdownMinutes = document.querySelector('#countdown__minutes')
const countdownSeconds = document.querySelector('#countdown__seconds')

const startCountdown = () => {
  const currentDate = new Date()
  const currentDateMs = currentDate.getTime() // Gets the current date in milliseconds

  const targetDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 30 // adds 30 days to the current day
  )
  const targetDateMs = targetDate.getTime() // Gets the target date in milliseconds

  const difference = targetDateMs - currentDateMs

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const pendingDays = Math.floor(difference / day)
  const pendingHours = Math.floor((difference % day) / hour)
  const pendingMinutes = Math.floor(((difference % day) % hour) / minute)
  const pendingSeconds = Math.floor((((difference % day) % hour) % minute) / second)

  launchDateDay.textContent = targetDate.getDate()
  launchDateMonth.textContent = targetDate.getMonth()
  launchDateYear.textContent = targetDate.getFullYear()

  countdownDays.textContent = pendingDays
  countdownHours.textContent = pendingHours
  countdownMinutes.textContent = pendingMinutes
  countdownSeconds.textContent = pendingSeconds
}

setInterval(startCountdown, 1000)
