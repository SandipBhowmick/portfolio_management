// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).on('turbolinks:load',function(){
	$("#js-scrip-name").select2().on('change', function(){
	$("#share-rate").val("");
	$("#share-quantity").val("");
	$("#share-brokerage").text("0");
	$("#share-net_rate").text("0");
	$("#share-net_value").text("0");
	});

});



//Radio button alter 
//sell
$(document).on('change', '#share-sell',function(){
	$("#share-rate").val("");
	$("#share-quantity").val("");
	$("#share-brokerage").text("0");
	$("#share-net_rate").text("0");
	$("#share-net_value").text("0");
	});
//buy
$(document).on('change', '#share-buy',function(){
	$("#share-rate").val("");
	$("#share-quantity").val("");
	$("#share-brokerage").text("0");
	$("#share-net_rate").text("0");
	$("#share-net_value").text("0");
	});



$(document).on('change', '#share-quantity', function(){
	var rw_url= "http://finance.google.com/finance/info?client=ig&q=NSE:" + $("#js-scrip-name").val();
	if($("#js-scrip-name").val()== null)
		{
			$("#share-quantity").val("");
			alert("Please select Script Name first"); 
		}
	else{
			$.get(rw_url, function(data) {
				data = data.replace('//', '');
				var jqObj = jQuery.parseJSON(data);
	    		$("#share-rate").val(jqObj[0]["l"]);
	    		if(!$('#share-buy').is(':checked') && !$('#share-sell').is(':checked')) { 
					alert(" Buy or Sell it's checked"); 
					$("#share-rate").val("");
					$("#share-quantity").val("");
					return;
					}
	//Brokerage claculation
	var brokerage = parseInt($("#share-rate").val()) * 0.01 ;	
	var total_brokerage = brokerage * parseInt($("#share-quantity").val())
	// alert(total_brokerage);
	if (total_brokerage < 17){
    brokerage = 17/parseInt($("#share-quantity").val())
 	}
 	$("#share-brokerage").removeAttr('readonly');
 	$("#share-brokerage").val(brokerage)
 	$("#share-brokerage").attr('readonly', true);
 	

 	//Net rate calculation
 	if($('#share-buy').is(':checked') == false){
   		var netRate = parseInt($("#share-rate").val()) - parseInt($("#share-brokerage").val());
		}
    else{
    	 var netRate = parseInt($("#share-rate").val()) + parseInt($("#share-brokerage").val()) ;
	}
	$("#share-net_rate").val(netRate);
	
	//Net Value calculation
	var netValue = parseInt($("#share-net_rate").val()) * parseInt($("#share-quantity").val()) ;
     $("#share-net_value").val(netValue);
	    		});
		}

		
	
});



$(document).on('change', '#share-rate', function(){
	if(!$('#share-buy').is(':checked') && !$('#share-sell').is(':checked')) { 
		alert(" Buy or Sell it's checked"); 
		$("#share-rate").val("");
		$("#share-quantity").val("");
		return;
		}
	//Brokerage claculation
	var brokerage = parseInt($("#share-rate").val()) * 0.01 ;
	var total_brokerage = brokerage * parseInt($("#share-quantity").val())
	// alert(total_brokerage);
	if (total_brokerage < 17){
    brokerage = 17/parseInt($("#share-quantity").val())
 	}
 	$("#share-brokerage").removeAttr('readonly');
 	$("#share-brokerage").val(brokerage)
 	$("#share-brokerage").attr('readonly', true);
 	

 	//Net rate calculation
 	if($('#share-buy').is(':checked') == false){
   		var netRate = parseInt($("#share-rate").val()) - parseInt($("#share-brokerage").val());
		}
    else{
    	 var netRate = parseInt($("#share-rate").val()) + parseInt($("#share-brokerage").val()) ;
	}
	$("#share-net_rate").val(netRate);
	
	//Net Value calculation
	var netValue = parseInt($("#share-net_rate").val()) * parseInt($("#share-quantity").val()) ;
     $("#share-net_value").val(netValue);
});
// $(document).on('change', '#share-quantity',function(){
// 	if($("#js-scrip-name").val!="")
// 		{
// 			alert("abcd");
// 		};
// 	});




//$(document).on('change', '#share-brokerage',function(){

//$(document).on('click', '#share-brokerage',function(){ 
//	 $("#share-brokerage").attr('readonly','readonly');
//});



//var a=$("#share-quantity").val() * $("#share-rate").val() * 0.01
		//$("#share-brokerage").val(a);

//$(document).ready(function(){
//    var qty=$("#qty");
//    qty.keyup(function(){
//        var total=isNaN(parseInt(qty.val()* $("#price").val())) ? 0 :(qty.val()* $("#price").val())
//        $("#total").val(total);
//    });
//});



//$(document).on('click', '#share-buy',function() {
 //  		if($('#share-buy').is(':checked')) { alert(" Buy it's checked"); }
  //   });