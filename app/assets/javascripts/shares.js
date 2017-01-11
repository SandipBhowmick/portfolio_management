// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('change', '#share-rate', function() {
	// $(document).on('click', '#share-buy',function() {
   		if(!$('#share-buy').is(':checked') && !$('#share-sell').is(':checked')) { 
   			alert(" Buy or Sell it's checked"); 
   			$("#share-rate").val("");
   			return;
   		}
	//Brokerage claculation


	var brokerage = $("#share-rate").val() * 0.01;
	if (brokerage < 17){
    brokerage = 17
 	}
 	$("#share-brokerage").val(brokerage);

 	

 	//Net rate calculation
 	if($('#share-buy').val() == "sell"){
   		alert($('#share-buy').val())
		var netRate = $("#share-rate").val() - $("#share-brokerage").val() ;
		}
    else{
		var netRate = $("#share-rate").val() + $("#share-brokerage").val() ;
	}
	$("#share-net_rate").val(netRate);
	
	//Net Value calculation
	var netValue = $("#share-net_rate").val() * $("#share-quantity").val() ;
     $("#share-net_value").val(netValue);
	});




$(document).on('click', '#share-brokerage',function(){ 
	 $("#share-brokerage").attr('readonly','readonly');
});

$(document).on('click', '#share-net_rate',function(){ 
	 $("#share-net_rate").attr('readonly','readonly');
});

$(document).on('click', '#share-net_value',function(){ 
	 $("#share-net_value").attr('readonly','readonly');
});

$(document).on('click', '#share-user_id',function(){ 
	 $("#share-user_id").attr('readonly','readonly');
});

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