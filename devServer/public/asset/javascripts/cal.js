// $(document).ready(function(){
//   // console.log('cal doc ready');
//   //  1 坪 = 3.30579m平方
//   //  可裝設容量約 100 * 3.30579 / 1.65 平方公尺 = 幾塊板子
//   //  一塊 250w
//   // 50000 = 50kWp

//   // 50kWp * 價格
//   //
//   // 度數 * 0.522 = CO@
//   //

// })


$(document).ready(function(){
  $("#a2").focus(function(){
    $("#a2").val("");
  });

  $("#a4").change(function(){
  if($(this).val() == 2){
    $("#a6").css("display","block");
    $("#a6s").css("display","block");
  } else{
    $("#a6").css("display","none");
    $("#a6s").css("display","none");
    $("#a6").val("");
  }

  });


});

$("#submit").click(function(){

var a1 = $("#a1").val();
var a2 = $("#a2").val();
var a3 = $("#a3").val();
var a4 = $("#a4").val();
var a5 = $("#a5").val();
var a6 = $("#a6").val();  //自訂價格




if (a1==0) {alert("請選擇縣市!");return ;};
if (a2=='') {alert("請輸入可用屋頂坪數!");return ;};
if (a2=='請輸入可用屋頂坪數') {alert("請輸入可用屋頂坪數!");return ;};
if (a3==0) {alert("請選擇模組類型!");return ;};

// if(!isNumber(a6)){alert("自訂值為數字");return;};
if(a4==2){
  if(isNull(a6)){alert("請輸入自訂值");return;};
}

if (a5==0) {alert("預計併聯試運轉時間!");return ;};
if (a2>999) {alert("可用屋頂坪數不能大於999!");return ;};


//太陽光電系統初期設置價格
if(a4==2){
  var arr1 = [a6,a6,a6,a6];
}else{
  var arr1 = [93300,78000,72900,70600];
}

//太陽光電上半年躉購費率
var arr2 = [6.8633,5.7378,5.3627,5.1935];

//太陽光電下半年躉購費率
var arr3 = [6.6721,5.5760,5.2155,5.0537];

//CO2系數
var co2 = 0.522;

var ar1;
var ar2;


//可裝設容量值
v1 = Math.round(a2 / a3 * 100) / 100;

if (1   <= v1 && v1  < 20) {
  ar1 = arr1[0];
  if (a5 == 1) {ar2 = arr2[0]};
  if (a5 == 2) {ar2 = arr3[0]};
};
if (20  <= v1 && v1  < 100) {
  ar1 = arr1[1];
  if (a5 = 1) {ar2 = arr2[1]};
  if (a5 = 2) {ar2 = arr3[1]};
};
if (100 <= v1 && v1  < 500) {
  ar1 = arr1[2];
  if (a5 = 1) {ar2 = arr2[2]};
  if (a5 = 2) {ar2 = arr3[2]};
};
if (500 <= v1) {
  ar1 = arr1[3];
  if (a5 = 1) {ar2 = arr2[3]};
  if (a5 = 3) {ar2 = arr3[3]};
};

//系統設置價格
//v2 = Math.round(1.14 * v1 * ar1 * 100) / 100;
v2 = Math.round(1.2 * v1 * ar1 * 100) / 100;

//預估每年發電量
//t3 = v1 * 365 * a1;
//v3 = Math.round(v1 * 365 * a1 * 100) / 100;
t3 = v1 * a1;
v3 = Math.round(t3 * 100) / 100;

//粗估回收年限
v4 = Math.round(v2 / (t3 * ar2) * 100) / 100;

//預估電能躉售月收入
v5 = Math.round((v3 / 12) * ar2 * 100) / 100;
//v5 = Math.round(a1 * 30 * v1 * ar2 * 100) / 100;
//v5 = Math.round(a1 * v1 * ar2 * 100) / 100;

//預估電能躉售年收入
v6 = Math.round(v3 * ar2 * 100) / 100;

//預估每年CO2減量
v7 = Math.round(v3 * co2 * 100) / 100;

$('#r1').val(v1);
$('#r2').val(v2);
$('#r3').val(v3);
$('#r4').val(v4);
$('#r5').val(v5);
$('#r6').val(v6);
$('#r7').val(v7);


//alert(arr1[1]);
})
