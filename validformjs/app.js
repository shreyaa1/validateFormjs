function validateForm() {
	var result = true;
var first = document.getElementsByTagName("input");
for(var i = 0; i<= 2; i++){
if(first[i].value.length == 0){
result = false;
return(result);	
}
}
var e = document.getElementsByName("email").value;
var result = true;
var at = e.indexof("@");
var dot = e.indexof(".");
if(at<1 || dot>e.length-2 || dot-at<3)
	result = false;
return(result);

}