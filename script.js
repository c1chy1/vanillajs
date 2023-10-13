

   fetch('components/hero.html')
         .then(response => response.text())
         .then(html => {
             const element = document.getElementById('hero');
             element.innerHTML = html;
         })
         .catch(error => console.error('Error in HTML loading', error));

     fetch('components/text-media.html')
         .then(response => response.text())
         .then(html => {
             const element = document.getElementById('text-media');
             element.innerHTML = html;
         })
         .catch(error => console.error('Error in HTML loading', error));

     fetch('components/card.html')
         .then(response => response.text())
         .then(html => {
             const element = document.getElementById('card');
             element.innerHTML = html;
         })
         .catch(error => console.error('Error in HTML loading', error));








