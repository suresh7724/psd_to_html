  $(document).ready(function() {
    $("#lightSlider").lightSlider({
      
      autoWidth:true,
      item:4,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } ,
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100
    }); 
  });
  

  