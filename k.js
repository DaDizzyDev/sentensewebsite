function extractContent(s) {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};
    
document.write(extractContent(https://pastebin.com/raw/kqS9pQSE));