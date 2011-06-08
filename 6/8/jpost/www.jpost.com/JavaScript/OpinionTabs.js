
         function ChangeTab()
        {
             if($("#opinion1").is(':visible'))
             {
              $('#opinion1:visible').hide();
              $('#opinion2:hidden').show();
              $('#opinion3:visible').hide();
              $("li.1").removeClass("active");    
              $("li.last").removeClass("last2");
              $("li.2").addClass("active");
             } 
             else if($('#opinion2').is(':visible')) {
              $('#opinion1:visible').hide();
              $('#opinion2:visible').hide();
              $('#opinion3:hidden').show();
              $("li.1").removeClass("active"); 
              $("li.2").removeClass("active");   
              $("li.last").addClass("last2");
              }
              else if($('#opinion3').is(':visible')) 
              {
              $('#opinion1:hidden').show();
              $('#opinion2:visible').hide();
              $('#opinion3:visible').hide();              
              $("li.2").removeClass("active");
              $("li.last").removeClass("last2");
              $("li.1").addClass("active");
              }
        }
         function opinions_Exchange()
                 {
                    if($('#opinion1').is(':hidden')){
                           $('#opinion1 fieldset.jp-section-item:eq(2) .line-saperator').removeClass("hide-line");
                           $('#opinion1 fieldset.jp-section-item:eq(0)').insertAfter('#opinion1 fieldset.jp-section-item:eq(2)');
                           $('#opinion1 fieldset.jp-section-item:eq(2) .line-saperator').addClass("hide-line");    
                         }
                    if($("#opinion2").is(':hidden')){
                          $('#opinion2 fieldset.jp-section-item:eq(2) .line-saperator').removeClass("hide-line");
                          $('#opinion2 fieldset.jp-section-item:eq(0)').insertAfter('#opinion2 fieldset.jp-section-item:eq(2)'); 
                          $('#opinion2 fieldset.jp-section-item:eq(2) .line-saperator').addClass("hide-line");   
                    }
                    if($("#opinion3").is(':hidden')){
                         $('#opinion3 fieldset.jp-section-item:eq(2) .line-saperator').removeClass("hide-line");
                         $('#opinion3 fieldset.jp-section-item:eq(0)').insertAfter('#opinion3 fieldset.jp-section-item:eq(2)');
                         $('#opinion3 fieldset.jp-section-item:eq(2) .line-saperator').addClass("hide-line");
                    }
                 }
       $(document).ready(function() {   
        $("#opinion1").show();
        $("#opinion2").hide();
        $("#opinion3").hide();
        var flag=0;
        var refreshIntervalId=setInterval("ChangeTab()",15000);
        setInterval("opinions_Exchange()",45000);
        $("#snews").click(function(){    
            if(flag==0) {
            clearInterval(refreshIntervalId);
            flag=1;
            }
            $("#opinion1").show();
            $("#opinion2").hide();
            $("#opinion3").hide();
            $("li.1").removeClass("active"); 
            $("li.1").addClass("active");
            $("li.2").removeClass("active");    
            $("li.last").removeClass("last2");
        });
        $("#sopinion").click(function(){
          if(flag==0) {
            clearInterval(refreshIntervalId);
            flag=1;
            }
            $("#opinion1").hide();
            $("#opinion2").show();
             $("#opinion3").hide();
            $("li.1").removeClass("active");    
            $("li.last").removeClass("last2");
            $("li.2").addClass("active");       
        });
        $("#sblogs").click(function(){
          if(flag==0) {
            clearInterval(refreshIntervalId);
            flag=1;
            }
            $("#opinion1").hide();
            $("#opinion2").hide();
            $("#opinion3").show();
            $("li.1").removeClass("active");    
            $("li.2").removeClass("active");
            $("li.last").addClass("last2");
        });
  });