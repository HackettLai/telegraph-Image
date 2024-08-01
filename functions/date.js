// copyrightYear function to set the current year in the #thisYear element
window.addEventListener("load", copyright, true);
function copyright() {
  const thisYear = new Date().getFullYear();
  document.getElementById("thisYear").innerHTML = thisYear;
}