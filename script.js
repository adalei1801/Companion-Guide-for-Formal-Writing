const terms = document.querySelectorAll('dt');

function showDef(e) {
  e.target.classList.add('hover-style');
  
  let active = document.querySelector('.active');
  let close = false;

  if (active != null) {
    close = active.previousElementSibling == e.target;
    active.classList.remove('active');
  }

  if (close) {
    e.target.classList.remove('hover-style');
    return false;
  }

  let def = e.target.nextElementSibling;
  
  def.classList.add('active');
}

for (let i=0, ii=terms.length; i<ii; i++) {
  terms[i].addEventListener('click', showDef);
}