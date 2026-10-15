(() => {
  const body = document.body;
  const hoursEl = document.getElementById("cd-hours");
  const minutesEl = document.getElementById("cd-minutes");
  const secondsEl = document.getElementById("cd-seconds");
  const statusEl = document.getElementById("countdown-status");
  const countdownRoot = document.querySelector(".countdown");

  const pad = (n) => String(Math.max(0, n)).padStart(2, "0");

  /**
   * Target: 2026-10-15 23:59:00 in the visitor's local timezone.
   * Parsed as local wall-clock via Date(y, m-1, d, h, min, s).
   */
  const getTargetDate = () => {
    const raw = countdownRoot?.dataset.targetLocal || "2026-10-15T23:59:00";
    const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/.exec(raw);
    if (!match) {
      return new Date(2026, 9, 15, 23, 59, 0);
    }
    const [, y, mo, d, h, mi, s] = match.map(Number);
    return new Date(y, mo - 1, d, h, mi, s);
  };

  const target = getTargetDate();
  let tickId = null;

  const render = () => {
    const remaining = target.getTime() - Date.now();

    if (remaining <= 0) {
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (statusEl) {
        statusEl.textContent = "Back soon";
        statusEl.classList.add("is-expired");
      }
      if (tickId !== null) {
        clearInterval(tickId);
        tickId = null;
      }
      return;
    }

    const totalSeconds = Math.floor(remaining / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  };

  const init = () => {
    body.classList.add("is-loaded");
    render();
    tickId = setInterval(render, 1000);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
