$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#Hover").show();
    }).mouseout(function(){
      $("#Hover").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#Hover2").show();
    }).mouseout(function(){
      $("#Hover2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#Hover3").show();
    }).mouseout(function(){
      $("#Hover3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#Hover4").show();
    }).mouseout(function(){
      $("#Hover4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#Hover5").show();
    }).mouseout(function(){
      $("#Hover5").hide();
    });
    $("#work6").mouseover(function(){
      $("#Hover6").show();
    }).mouseout(function(){
      $("#Hover6").hide();
    });
    $("#work7").mouseover(function(){
      $("#Hover7").show();
    }).mouseout(function(){
      $("#Hover7").hide();
    });
    $("#work8").mouseover(function(){
      $("#Hover8").show();
    }).mouseout(function(){
      $("#Hover8").hide();
    });
  });

  
$('.submit').click(function () {
        let Name = $('#mce-FNAME').val();
        let Email = $('#mce-EMAIL').val();
        let Message = $('#mce-MESSAGE');
        let key ='da6d9c832f25496dc39143d88-us1';
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }
  });

