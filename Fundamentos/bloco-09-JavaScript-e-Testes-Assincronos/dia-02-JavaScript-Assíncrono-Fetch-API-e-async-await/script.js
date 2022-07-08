const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;
  

  const usoJSONPorque = JSON.parse(jsonInfo);
  // console.log(usoJSONPorque);

  // console.log(typeof usoJSONPorque);
  
  const corporationsList = document.getElementById('corporations-used-by');
  const advantagesList = document.getElementById('advantages');
  const languagesList = document.getElementById('languages-used-by');
  
  usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
    const newLi = document.createElement('li');
    newLi.innerText = empresa;
    corporationsList.appendChild(newLi);
  });
  
  usoJSONPorque.temVariasVantagens.map((vantagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = vantagens;
    advantagesList.appendChild(newLi);
  });
  
  // usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  //   const newLi = document.createElement('li');
  //   newLi.innerText = linguagens;
  //   languagesList.appendChild(newLi);
  // });

  usoJSONPorque.muitasLinguagensDaoSuporte.map((element) => {
    const li = document.createElement('li');
    li.innerText = element;
    languagesList.appendChild(li);
  });