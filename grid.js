fetch("eval/freeTalk.js")

g = new Object();
g.svgWidth = "2500"
g.svgHeight = "2000"
g.svgStroke = "blue"
g.cellWidth = "10"
g.cellHeight = "10"
g.width = "4"
g.height = "3"
g.left = "20"
g.top = "20"

drawGrid = function( g ) {      

if(typeof(g) != "object")
{
  g = new Object();
  g.svgWidth = "2500"
  g.svgHeight = "2000"
  g.svgStroke = "blue"
  g.cellWidth = "10"
  g.cellHeight = "10"
  g.width = "4"
  g.height = "3"
  g.left = "20"
  g.top = "20"
}



svgHeader=`<svg xmlns=http://www.w3.org/2000/svg 
             width="${g.svgWidth}" 
             height="${g.svgHeight}" 
             stroke="${g.svgStroke}" >\n`;

Line = new Array();     
height = g.cellHeight;     
width = g.cellWidth;           
// t = `<line x1="${g.left}" y1="${g.top}" x2="${g.left}" y2="120" stroke="black" />`;      
// Horizontal Lines       
X1 = g.left;     
X2 = (g.left * 1) + g.width + (1*1) * g.cellWidth;     
X2 = (g.left * 1) + (g.width) * g.cellWidth;

for(x = 0; x <= g.height; x++)
   {            
   Y1 = g.top * 1 + x * g.cellHeight;         
   Y2 = g.top * 1 + x * g.cellHeight;                  
   t += `  <line x1="${X1}" y1="${Y1}" x2="${X2}" y2="${Y2}"/>\n`;
   }  

// Vertical Lines
Y1 = g.top;     
Y2 = (g.top * 1 ) + (g.height * g.cellHeight);
for(x = 0; x <= g.width; x++)         
   {            
   X1 = g.left * 1 + x * g.cellWidth;  
   X2 = g.left * 1 + x * g.cellWidth;    
   t += `  <line x1="${X1}" y1="${Y1}" x2="${X2}" y2="${Y2}"/>\n`;
   }           

svgFooter = '</svg>';       
return svgHeader + t + svgFooter; 
}
