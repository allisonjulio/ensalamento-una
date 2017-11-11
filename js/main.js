
  function DadosPessoais(){
       document.getElementById("dados-pessoais").style.transition = "all .5s";
       document.getElementById("dados-pessoais").style.transform = "translateY(0)";
                 }

  $(".btn-default").click(function() {
  
    // Toggle the element
    $( "#dados-pessoais" ).fadeToggle();
    
  });