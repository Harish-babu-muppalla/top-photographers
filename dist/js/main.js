function autocomplete(e,t){function a(e){if(!e)return!1;n(e),o>=e.length&&(o=0),o<0&&(o=e.length-1),e[o].classList.add("autocomplete-active")}function n(e){for(var t=0;t<e.length;t++)e[t].classList.remove("autocomplete-active")}function r(t){for(var a=document.getElementsByClassName("autocomplete-items"),n=0;n<a.length;n++)t!=a[n]&&t!=e&&a[n].parentNode.removeChild(a[n])}var o;e.addEventListener("input",function(a){var n,i,l,s=this.value;if(r(),!s)return!1;for(o=-1,n=document.createElement("DIV"),n.setAttribute("id",this.id+"autocomplete-list"),n.setAttribute("class","autocomplete-items"),this.parentNode.appendChild(n),l=0;l<t.length;l++)t[l].substr(0,s.length).toUpperCase()==s.toUpperCase()&&(i=document.createElement("DIV"),i.innerHTML="<strong>"+t[l].substr(0,s.length)+"</strong>",i.innerHTML+=t[l].substr(s.length),i.innerHTML+="<input type='hidden' value='"+t[l]+"'>",i.addEventListener("click",function(t){e.value=this.getElementsByTagName("input")[0].value,r()}),n.appendChild(i))}),e.addEventListener("keydown",function(e){var t=document.getElementById(this.id+"autocomplete-list");t&&(t=t.getElementsByTagName("div")),40==e.keyCode?(o++,a(t)):38==e.keyCode?(o--,a(t)):13==e.keyCode&&(e.preventDefault(),o>-1&&t&&t[o].click())}),document.addEventListener("click",function(e){r(e.target)})}function searchphotographer(){var e=document.getElementById("myInput").value.toLowerCase();console.log(e),console.log("11111111111"),"amar ramesh"==e||"amarramesh"==e?window.location="Amar-Ramesh-About.html":"audi venkatesh"==e||"audivenkatesh"==e?window.location="Audi-Venkatesh-About.html":"avinash gowariker"==e||"avinashgowariker"==e?window.location="Avinash-Gowariker-About.html":"joseph radhik"==e||"josephradhik"==e?window.location="Joseph-Radhik-About.html":"photriya"==e?window.location="Photriya-About.html":alert("not found")}var photographers=["Amar Ramesh","Audi Venkatesh","Avinash Gowariker","Joseph Radhik","Photriya"];autocomplete(document.getElementById("myInput"),photographers);var contactusUser=function(){var e=$("name1").value,t=$("email1").value,a=$("contact1").value,n=$("website1").value,r=!0;""==e?($("name1_error").firstChild.nodeValue="Please enter valid name",r=!1):$("name1_error").firstChild.nodeValue="",""==t||-1==t.indexOf("@")?($("email1_error").firstChild.nodeValue="Please enter valid email",r=!1):$("email1_error").firstChild.nodeValue="",""==a||10!==a.length?($("contact1_error").firstChild.nodeValue="Please enter valid phone number",r=!1):$("contact1_error").firstChild.nodeValue=" ",""==n||-1==n.indexOf(".")?($("website1_error").firstChild.nodeValue="Please enter valid website",r=!1):$("website1_error").firstChild.nodeValue=" ",r&&alert("Success! We have received your details.One of us will be contacting you shortly.  ")},suggestionUser=function(){var e=$("name2").value,t=$("email2").value,a=$("contact2").value,n=$("website2").value,r=!0;""==e?($("name2_error").firstChild.nodeValue="Please enter valid name",r=!1):$("name2_error").firstChild.nodeValue="",""==t||-1==t.indexOf("@")?($("email2_error").firstChild.nodeValue="Please enter valid email",r=!1):$("email2_error").firstChild.nodeValue="",""==a||10!==a.length?($("contact2_error").firstChild.nodeValue="Please enter valid phone number",r=!1):$("contact2_error").firstChild.nodeValue=" ",""==n||-1==n.indexOf(".")?($("website2_error").firstChild.nodeValue="Please enter valid website",r=!1):$("website2_error").firstChild.nodeValue=" ",r&&alert("Success! We have received your message.One of us will be contacting you shortly.")};