function changeImage()
{
element=document.getElementById('example')
if (element.src.match("car1"))
  {
   element.src="car2.jpg";
  }
else
  {
   element.src="car1.jpg";
  }
}
