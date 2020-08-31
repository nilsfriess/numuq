window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true
  },
  svg: {
    fontCache: 'global'
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();

const removeCodeTags = () => {
  let codes = document.getElementsByTagName('code');
  for (let code of codes) {
    let newElement = document.createElement('span');
    newElement.innerHTML = code.innerHTML;
    code.parentNode.replaceChild(newElement, code);
  }
    
};

removeCodeTags();
