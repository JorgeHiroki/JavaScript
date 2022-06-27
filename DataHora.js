var dayarray=new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado")
var montharray=new Array("1","2","3","4","5","6","7","8","9","10","11","12")


var mydate=new Date()
mydate.setUTCHours(-2);
var year=mydate.getYear()
if (year < 1900)
year+=1900
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()


if (daym<10)
daym="0"+daym
var hours=mydate.getHours()
var minutes=mydate.getMinutes()
var seconds=mydate.getSeconds()
var dn="AM"
if (hours>=24)
dn="PM"
if (hours>24){
hours=hours-24
}
if (hours==0)
hours=24
if (minutes<=9)
minutes="0"+minutes
if (seconds<=9)
seconds="0"+seconds

var cdate="Hoje é: "+dayarray[day]+" - "+daym+"/"+montharray[month]+"/"+year+" Agora são exatamente:"+hours+":"+minutes+":"+seconds;

console.log(cdate);

