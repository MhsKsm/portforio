var GU = 1;
var CHOKI = 2;
var PA = 3;
var msg = '半角数字で1～3の数字を入力してください。\n\n';
msg +='1:グー\n';
msg +='2:チョキ\n';
msg +='3:パー';
hands = ['','グー','チョキ','パー'];
var hum = prompt(msg);
hum = parseFloat(hum);

var com = Math.floor(Math.random()*3)+1;


//判定
var msgResult='コンピュータは、';
msgResult += hands[com];
msgResult += 'であなたは';
msgResult += hands[hum];
msgResult += 'で、';


if(hum == com){
	msgResult+='引き分け';
}else if((com==GU && hum==PA) || (com==CHOKI && hum==GU) || (com==PA && hum==CHOKI)){
	msgResult +='勝ち';
}else{
	msgResult +='負け';
}
alert(msgResult);
