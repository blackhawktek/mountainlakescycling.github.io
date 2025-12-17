// Highlight current nav link
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });
})();

// Optional: render "Next events" from a simple inline JSON list
// (This avoids needing API keys. You update it manually.)
const MLC_EVENTS = [
  // Example:
  // { title:"Group Ride: Trail of Tears", when:"Sat Jan 10, 2026 • 9:00 AM", where:"Trail of Tears TH" , link:"events.html" },
];

(function renderEvents(){
  const el = document.getElementById("next-events");
  if(!el) return;

  if(!MLC_EVENTS.length){
    el.innerHTML = `<div class="muted">No events listed yet — add your first ride on the Events page.</div>`;
    return;
  }

  el.innerHTML = `
    <div class="list">
      ${MLC_EVENTS.slice(0,3).map(ev => `
        <div class="item">
          <div>
            <b>${ev.title}</b>
            <div class="muted">${ev.when}${ev.where ? " • " + ev.where : ""}</div>
          </div>
          <a class="pill" href="${ev.link || "events.html"}">Details</a>
        </div>
      `).join("")}
    </div>
  `;
})();
