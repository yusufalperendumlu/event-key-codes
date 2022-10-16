const part = document.getElementById("key");


window.addEventListener("keydown", (e) => {
    part.innerHTML = `
    
    <div class="key">
    ${e.key == " " ? "Space":e.key}
    <small>event.key</small>
    </div>

    <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${e.code}
    <small>event.code</small>
  </div>
    `;
})