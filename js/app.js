$(document).ready(function() {
  $('#roller button.add').on('click', () => {
    console.log("WAT")
    $('.dice').append('<div class="dice">0</div>')
  })

  $('#roller button.roll').on('click', () => {
    $('.dice').each((k, dice) => {
      let value = Math.floor((Math.random() * 6) + 1)
      $(die).text(value)
    })
  })
})
