function calc() {
  let s11 = document.getElementById("s11").value;
  let s12 = document.getElementById("s12").value;
  let s13 = document.getElementById("s12").value;

  let s21 = document.getElementById("s21").value;
  let s22 = document.getElementById("s22").value;
  let s23 = document.getElementById("s23").value;

  let s31 = document.getElementById("s31").value;
  let s32 = document.getElementById("s32").value;
  let s33 = document.getElementById("s33").value;
  

  let res = s11 * ((s22*s33) - (s32*s23)) - s21 * ((s12*s33) - (s32*s13)) + s31 * ((s12*s23) - (s22*s13));

  document.getElementById("nan").innerHTML = res;
  document.getElementById("nan1").innerHTML = res;
  
}
