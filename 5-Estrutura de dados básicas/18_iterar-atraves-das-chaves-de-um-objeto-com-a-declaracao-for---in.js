const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Altere apenas o código abaixo desta linha
let result = 0
for (let user in usersObj) {
  if (usersObj[user].online === true) {
    result++
  }
}
return result
  // Altere apenas o código acima desta linha
}

console.log(countOnline(users));