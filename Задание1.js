const result = +prompt('¬ведите число', '')
if (isNaN(result % 2)) {
  alert('”пс, кажетс€, вы ошиблись')
} else if (result % 2 === 0) {
  alert('„исло четное')
} else {
  alert('„исло нечетное')
}