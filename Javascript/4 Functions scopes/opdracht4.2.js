        //Punt 1
        const button1 = document.querySelector('button');
        button1.onClick = voorbeeldEen;
        function voorbeeldEen() {
            console.log("En het werkt!");
        }

        // Punt 2
        function tagName() {
        const listTag = document.getElementsByTagName('ul')[0];
        listTag.getElementsByTagName('li')[0].innerHTML = "It did change!";
        }

        // Punt 3
        const button3 = document.querySelector('button');
        button3.onclick = queryOne;

        function queryOne() {
        const html = document.querySelector('html')
        html.textContent = "This will appear on your webpage.";
        console.log('This is in html.');
        }

        // Punt 4
        const button4 = document.querySelector('button');

        function allItems() {
            const item = document.querySelectorAll('li');
            for (i=0; i< item.length; i++) {
                item[i].style.backgroundColor= "blue";
            }
        }

        //Punt 5
        function changeHtmlText() {
            document.getElementById('innerHtml').innerHTML = "Great! You've changed it!";
        }


        //Punt 6
        const innerTextParagraph = document.getElementById('innerTextParagraph');
        const innerTextResult = document.getElementById('innerTextResult');
        innerTextOutput.value = innerTextParagraph.innerText;

        
        