

    // Get the checkbox element
    const checkbox = document.getElementById('iconsss');

    // Add an event listener for the 'change' event
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
 
        // alert("ON")
        // document.getElementById('tex').innerHTML = "<style>#tex{background-color: rgb(255, 255, 255); width: 1.1cm;}</style>"

        document.getElementById('pl').innerHTML = "<style>#pl{display: none;}</style>"

      } else {
        // alert("Off")
        document.getElementById('pl').innerHTML = "<style>#pl{display: block;}</style>"

      }
    });



    

    // Get the checkbox element
    const checkbox2 = document.getElementById('Textshort');

    // Add an event listener for the 'change' event
    checkbox2.addEventListener('change', function() {
      if (checkbox2.checked) {
 
        // alert("ON")
        // document.getElementById('tex').innerHTML = "<style>#tex{background-color: rgb(255, 255, 255); width: 1.1cm;}</style>"
        document.getElementById('text1').style.display = 'none'
        document.getElementById('text2').style.display = 'none'
        document.getElementById('text3').style.display = 'none'
        document.getElementById('text4').style.display = 'none'
        document.getElementById('text5').style.display = 'none'
        document.getElementById('text6').style.display = 'none'
        document.getElementById('text7').style.display = 'none'
        document.getElementById('text8').style.display = 'none'
        document.getElementById('text9').style.display = 'none'


        document.getElementById('text11').style.display = 'block'
        document.getElementById('text22').style.display = 'block'
        document.getElementById('text33').style.display = 'block'
        document.getElementById('text44').style.display = 'block'
        document.getElementById('text55').style.display = 'block'
        document.getElementById('text66').style.display = 'block'
        document.getElementById('text77').style.display = 'block'
        document.getElementById('text88').style.display = 'block'
        document.getElementById('text99').style.display = 'block'

      } else {
        // alert("Off")

        document.getElementById('text1').style.display = 'block'
        document.getElementById('text2').style.display = 'block'
        document.getElementById('text3').style.display = 'block'
        document.getElementById('text4').style.display = 'block'
        document.getElementById('text5').style.display = 'block'
        document.getElementById('text6').style.display = 'block'
        document.getElementById('text7').style.display = 'block'
        document.getElementById('text8').style.display = 'block'
        document.getElementById('text9').style.display = 'block'


        
        document.getElementById('text11').style.display = 'none'
        document.getElementById('text22').style.display = 'none'
        document.getElementById('text33').style.display = 'none'
        document.getElementById('text44').style.display = 'none'
        document.getElementById('text55').style.display = 'none'
        document.getElementById('text66').style.display = 'none'
        document.getElementById('text77').style.display = 'none'
        document.getElementById('text88').style.display = 'none'
        document.getElementById('text99').style.display = 'none'
      }
    });
