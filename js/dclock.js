function dclock()
{
var d=new Date();
//alert(d);
india.innerHTML=d.toLocaleString('en-Us',
{
	timeZone:'Asia/Kolkata',
}).split(',')[1];
//alert(d);
usa.innerHTML=d.toLocaleString('en-Us',
{
	timeZone:'America/New_York',
}).split(',')[1];
//alert(d);
china.innerHTML=d.toLocaleString('en-Us',
{
	timeZone:'Asia/Shanghai',
}).split(',')[1];
}
setInterval(()=>{
	dclock();
},1000)