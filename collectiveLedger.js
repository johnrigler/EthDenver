
middle.innerHTML = ""
a.utils.LoadCSS("cl/site.css")

setTimeout(() => {
f.contract.map("collectiveLedger.aboutBody()").then( x => {
     eval("a.aboutBody = " + x);
     middle.innerHTML = a.aboutBody();
     })

   },"300");

