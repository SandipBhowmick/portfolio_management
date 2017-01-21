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
				rate = jqObj[0]["l"]
	    		$("#share-rate").val(rate);
	    		if(!$('#share-buy').is(':checked') && !$('#share-sell').is(':checked')) { 
					alert(" Buy or Sell it's checked"); 
					$("#share-rate").val("");
					$("#share-quantity").val("");
					return;
					}
	//Brokerage claculation
	$("#share-net_value").removeAttr('readonly');
	$("#share-net_rate").removeAttr('readonly');
	$("#share-brokerage").removeAttr('readonly');
	var brokerage = parseInt($("#share-rate").val()) * 0.01 ;	
	var total_brokerage = brokerage * parseInt($("#share-quantity").val());
	// alert(total_brokerage);
	if (total_brokerage < 17){
    brokerage = 17/parseInt($("#share-quantity").val())
 	} 	
 	brokerage =brokerage.toFixed(2);
 	$("#share-brokerage").val(brokerage)
 	
 	

 	//Net rate calculation
 	if($('#share-buy').is(':checked') == false){
 		alert(parseInt($("#share-rate").val()));
   		var netRate = $("#share-rate").val() - parseInt($("#share-brokerage").val());
		}
    else{
    	alert(parseInt($("#share-rate").val()));
    	 var netRate = $("#share-rate").val() + parseInt($("#share-brokerage").val());
	}
	$("#share-net_rate").val(netRate);
	
	
	//Net Value calculation
	var netValue = parseInt($("#share-net_rate").val()) * parseInt($("#share-quantity").val());
     $("#share-net_value").val(netValue);
     $("#share-net_value").attr('readonly', true);
     $("#share-brokerage").attr('readonly', true);
     $("#share-net_rate").attr('readonly', true);
	    		});
		}

		
	
});



$(document).on('change', '#share-rate', function(){
	$("#share-brokerage").removeAttr('readonly');
	$("#share-net_rate").removeAttr('readonly');
	$("#share-net_value").removeAttr('readonly');

	if(!$('#share-buy').is(':checked') && !$('#share-sell').is(':checked')) { 
		alert(" Buy or Sell it's checked"); 
		$("#share-rate").val("");
		$("#share-quantity").val("");
		return;
		}
	//Brokerage claculation
	var brokerage = parseInt($("#share-rate").val()) * 0.01 ;
	var total_brokerage = brokerage * parseInt($("#share-quantity").val());
	// alert(total_brokerage);
	if (total_brokerage < 17){
    brokerage = 17/parseInt($("#share-quantity").val())
 	} 
 	brokerage =brokerage.toFixed(2);
 	$("#share-brokerage").val(brokerage);
 	

 	//Net rate calculation
 	if($('#share-buy').is(':checked') == false){
   		var netRate = $("#share-rate").val() - parseInt($("#share-brokerage").val());
		}
    else{
    	 var netRate = $("#share-rate").val() + parseInt($("#share-brokerage").val());
	}
	$("#share-net_rate").val(netRate);
	
	
	//Net Value calculation
	var netValue = parseInt($("#share-net_rate").val()) * parseInt($("#share-quantity").val()) ;
     $("#share-net_value").val(netValue);
     $("#share-net_value").attr('readonly', true);
     $("#share-brokerage").attr('readonly', true);
	 $("#share-net_rate").attr('readonly', true);
});
