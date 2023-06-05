document.addEventListener('DOMContentLoaded', function() {

    var rolunkContent = document.getElementById('rolunk-content');
    var galeriaContent = document.getElementById('galeria-content');
    var kapcsolatContent = document.getElementById('kapcsolat-content');
    var fooldalContent = document.getElementById('fooldal-content');

    var rolunkButton = document.getElementById('rolunk-button');
    var galeriaButton = document.getElementById('galeria-button');
    var kapcsolatButton = document.getElementById('kapcsolat-button');
    var fooldalButton = document.getElementById('fooldal-button');


    rolunkButton.addEventListener('click', function() {
      rolunkContent.style.display = 'block';
      galeriaContent.style.display = 'none';
      kapcsolatContent.style.display = 'none';
     fooldalContent.style.display = 'none';
    });

    galeriaButton.addEventListener('click', function() {
      galeriaContent.style.display = 'block';
      rolunkContent.style.display = 'none';
      kapcsolatContent.style.display = 'none';
     fooldalContent.style.display = 'none';
    });

    kapcsolatButton.addEventListener('click', function() {
        kapcsolatContent.style.display = 'block';
        galeriaContent.style.display = 'none';
        rolunkContent.style.display = 'none';
        fooldalContent.style.display = 'none';
      });

    fooldalButton.addEventListener('click', function() {
        fooldalContent.style.display = 'block';
        kapcsolatContent.style.display = 'none';
        galeriaContent.style.display = 'none';
        rolunkContent.style.display = 'none';
      });
  });

document.addEventListener('DOMContentLoaded', function() {
    var fooldalButton = document.getElementById('fooldal-button');
    var contentSections = document.getElementsByClassName('content-section');

    fooldalButton.addEventListener('click', function() {
      for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
      }
    });
  });