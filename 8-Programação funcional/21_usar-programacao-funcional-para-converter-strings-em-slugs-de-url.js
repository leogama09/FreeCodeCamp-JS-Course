// Altere apenas o código abaixo desta linha
function urlSlug(title) {
  return title
  .toLowerCase()
  .trim()
  .split(/\s+/)
  .join("-")

}
// Altere apenas o código acima desta linha
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");