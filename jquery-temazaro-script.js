$(function(){
	var form = $("form");
	
	form.on("submit", function(e){
		e.preventDefault();
		var resultDiv = $(".result .title");
		
		function calcBMI(){
			var weight = $("#weight").val();
	    var height = $("#height").val();
			var bmi = weight / ((height / 100) * (height / 100));
			return bmi.toFixed(2);
			
		}
		
		function bmiState(){
			if(calcBMI() < 15.99 ){
				return "Súlyos soványság";
			}
			if(calcBMI() > 16 && calcBMI() < 16.99 ){
				return "Mérsékelt soványság";
			}
			if(calcBMI() > 17 && calcBMI() < 18.49 ){
				return "Enyhe soványság";
			}
			if(calcBMI() > 18.5 && calcBMI() < 24.99 ){
				return "Normális testsúly";
			}
			if(calcBMI() > 25 && calcBMI() < 29.99 ){
				return "Túlsúlyos";
			}
			if(calcBMI() > 30 && calcBMI() < 34.99 ){
				return "I. fokú elhízás";
			}
            if(calcBMI() > 35 && calcBMI() < 39.99 ){
				return "II. fokú elhízás";
			}
			if(calcBMI() > 40){
				return "III. fokú elhízás";
			}
		}
		
		resultDiv.html(" TTI értéked: " + calcBMI() + " -> " + bmiState());
	});
});