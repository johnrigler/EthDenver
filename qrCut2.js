fetch("eval/freeTalk.js")

g = new Object();
g.svgWidth = "1200"
g.svgHeight = "600"
g.svgStroke = "blue"
g.cellWidth = "120"
g.cellHeight = "120"
g.width = "7"
g.height = "5"
g.left = "380"
g.top = "220"
g.scale = ".67"

h = new Object();
h.svgWidth = "2500"
h.svgHeight = "2000"
h.svgStroke = "green"
h.cellWidth = "144"
h.cellHeight = "144"
h.width = "7"
h.height = "5"
h.left = "224"
h.top = "167"
h.scale = ".67" 


drawGrid = function( g,scale = 1 ) {      

if(typeof(g) != "object")
{
  g = new Object();
  g.svgWidth = "2500"
  g.svgHeight = "2000"
  g.svgStroke = "blue"
  g.cellWidth = "80"
  g.cellHeight = "80"
  g.width = "7"
  g.height = "5"
  g.left = "380"
  g.top = "380"
  g.scale = "1"
}

svgHeader=`<svg xmlns="http://www.w3.org/2000/svg" 
             width="${g.svgWidth}" 
             height="${g.svgHeight}" 
             stroke="${g.svgStroke}" >\n`;

Line = new Array();     
height = g.cellHeight;     
width = g.cellWidth;           


X1 = g.left * .7 * scale;
X2 = X1 * g.width * 1.001 * scale;
Y1 = g.top * .8 * scale;
Y2 = g.top * g.height * 1.1 * scale;

align = `
     <line x1="${X1}" y1="${Y1}" x2="${X1}" y2="${Y2}" stroke-dasharray="6" stroke="salmon" />
     <line x1="${X1}" y1="${Y2}" x2="${X2}" y2="${Y2}" stroke-dasharray="6" stroke="salmon" />
     <line x1="${X2}" y1="${Y1}" x2="${X1}" y2="${Y1}" stroke-dasharray="6" stroke="salmon" />
`;      


// Horizontal Lines       
X1 = g.left * scale;     
X2 = ((g.left * 1) + (g.width) * g.cellWidth) * scale;


for(x = 0; x <= g.height; x++)
   {            
   Y1 = (g.top * 1 + x * g.cellHeight) * scale;         
   Y2 = (g.top * 1 + x * g.cellHeight) * scale;                  
   t += `  <line x1="${X1}" y1="${Y1}" x2="${X2}" y2="${Y2}" stroke="blue"/>\n`;
   }  

// Circle the holes in page for alignment
//
circle0 = 170 * scale;
circle1 = 784 * scale;
circle2 = 1397 * scale;

circley = 54 * scale;
circler = 30 * scale;

circles=`
 <circle cx="${circle0}" cy="${circley}" r="${circler}" fill="none" stroke="green" />
 <circle cx="${circle1}" cy="${circley}" r="${circler}" fill="none" stroke="green" />
 <circle cx="${circle2}" cy="${circley}" r="${circler}" fill="none" stroke="green" />
`;


// Vertical Lines

Y1 = g.top * scale;
Y2 = ((g.top * 1 ) + (g.height * g.cellHeight)) * scale;

for(x = 0; x <= g.width; x++)         
   {            
   X1 = (g.left * 1 + x * g.cellWidth) * scale;  
   X2 = (g.left * 1 + x * g.cellWidth) * scale;    
   t += `  <line x1="${X1}" y1="${Y1}" x2="${X2}" y2="${Y2}" stroke="blue"/>\n`;
   }           

svgFooter = '</svg>';       
return svgHeader + align + t + svgFooter; 
}
