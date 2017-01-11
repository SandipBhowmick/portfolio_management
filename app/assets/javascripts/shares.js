// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('change', '#share-rate', function() {
	if(!$('#share-buy').is(':checked') && !$('#share-sell').is(':checked')) { 
	alert(" Buy or Sell it's checked"); 
	$("#share-rate").val("");
	$("#share-quantity").val("");
	return;
		}


	//Brokerage claculation
	var brokerage = parseInt($("#share-rate").val()) * 0.01;
	if (brokerage < 17){
    brokerage = 17
 	}
 	$("#share-brokerage").text(brokerage);

 	

 	//Net rate calculation
 	if($('#share-buy').is(':checked') == false){
   		var netRate = parseInt($("#share-rate").val()) - parseInt($("#share-brokerage").text());
		}
    else{
    	 var netRate = parseInt($("#share-rate").val()) + parseInt($("#share-brokerage").text()) ;
	}
	$("#share-net_rate").text(netRate);
	
	//Net Value calculation
	var netValue = parseInt($("#share-net_rate").text()) * parseInt($("#share-quantity").val()) ;
     $("#share-net_value").text(netValue);
	});




//Radio button alter 
//sell
$(document).on('change', '#share-sell',function(){
	$("#share-rate").val("");
	$("#share-quantity").val("");
	$("#share-brokerage").text("");
	$("#share-net_rate").text("");
	$("#share-net_value").text("");
	});
//buy
$(document).on('change', '#share-buy',function(){
	$("#share-rate").val("");
	$("#share-quantity").val("");
	$("#share-brokerage").text("");
	$("#share-net_rate").text("");
	$("#share-net_value").text("");
	});




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