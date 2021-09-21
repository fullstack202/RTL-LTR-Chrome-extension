function appendButton() {
  const button = document.createElement('button')
  button.id = 'btn_toggle_rtl'
  button.className = 'btn_toggle_rtl _1k2fhcg'
  button.innerHTML = 'Toggle RTL mode on'

  button.addEventListener('click', function() {
    document.getElementsByClassName('pageContainer')[0].classList.toggle('is-rtl')
    const isOn = document.getElementsByClassName('pageContainer')[0].classList.contains('is-rtl')
    document.getElementById('btn_toggle_rtl').innerHTML = 'Toggle RTL mode ' + (isOn ? 'off' : 'on')
  })
  document.getElementsByClassName('_1sbsllb')[0].appendChild(button)
}

function exec() {
  const isready = document.getElementsByClassName('_1sbsllb').length > 0
  if (isready) {
    appendButton()
  } else {
    setTimeout(exec, 1000)
  }
}
exec()