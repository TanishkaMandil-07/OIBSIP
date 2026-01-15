const roles = [
  "Frontend Developer",
  "UI Designer",
  "Web Designer",
  "Creative Coder",
  "Problem Solver",
  "Learner",
  "Creater & Designer"
];

let index = 0;
let charIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeRole() {
  if (charIndex < roles[index].length) {
    dynamicText.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 90);
  } else {
    setTimeout(eraseRole, 1200);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    dynamicText.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 60);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 200);
  }
}

typeRole();
