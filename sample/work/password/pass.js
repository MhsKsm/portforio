$(function(){
	var str = 'abcdefghijklmnopqrstuvwxyz';
	var str2 = '01234569789';
	var str3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var str4 = '!#$%&=-^~\|';
	var strArr = [];
	var n1,n2,i,tmp;
	var pass ='';
	var passLength = 10;
	
	$('#num').val(passLength);
	
	$('#btn').on('click',function(){
		var numnum = $('#num').val();
		$('#msg').text('');
		str += str2 + str3;
		strArr = str.split('');
		for(i=0;i<300;i++){
			n1 = Math.floor(Math.random()*strArr.length);
			n2 = Math.floor(Math.random()*strArr.length);
			tmp = strArr[n1];
			strArr[n1] = strArr[n2];
			strArr[n2] = tmp;
		}
		if(isNaN($('#num').val()) || $('#num').val() > strArr.length || $('#num').val() < 1){
			$('#msg').text('無効な文字数です');
			return;
		}
		
		passLength = $('#num').val();
		for(i=0;i<passLength;i++){
			pass += strArr[i];
		}
		$('#pass').text(pass);
		pass = '';
		console.log(pass);
	});
});