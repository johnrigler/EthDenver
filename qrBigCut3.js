fetch("eval/freeTalk.js")

h = new Object();
h.svgWidth = 2500
h.svgHeight = 1100
h.svgStroke = "purple"
h.cellWidth = 142
h.cellHeight = 142
h.width = 9
h.height = 6
h.left = 150
h.top = 146


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

// Align2 (uses corner squares)

XA1 = (g.left - g.cellWidth + 12)  * scale;
YA1 = (g.top + 10)                * scale;
XA2 = (XA1 - 24 + g.cellWidth)    * scale;
YA2 = (g.top - 12 + g.cellHeight)  * scale;

align0=`
<line x1="${XA1}" y1="${YA1}" x2="${XA2}" y2="${YA1}" stroke-dasharray="6" stroke="green" />
<line x1="${XA2}" y1="${YA1}" x2="${XA2}" y2="${YA2}" stroke-dasharray="6" stroke="green" />
<line x1="${XA2}" y1="${YA2}" x2="${XA1}" y2="${YA2}" stroke-dasharray="6" stroke="green" />
<line x1="${XA1}" y1="${YA2}" x2="${XA1}" y2="${YA1}" stroke-dasharray="6" stroke="green" />
`
XB1 = XA1 + ((g.cellWidth * ((g.width + 1)) + 2) * scale);
XB2 = XA2 + ((g.cellWidth * ((g.width + 1)) + 2) * scale);

align1=`
<line x1="${XB1}" y1="${YA1}" x2="${XB2}" y2="${YA1}" stroke-dasharray="6" stroke="green" />
<line x1="${XB2}" y1="${YA1}" x2="${XB2}" y2="${YA2}" stroke-dasharray="6" stroke="green" />
<line x1="${XB2}" y1="${YA2}" x2="${XB1}" y2="${YA2}" stroke-dasharray="6" stroke="green" />
<line x1="${XB1}" y1="${YA2}" x2="${XB1}" y2="${YA1}" stroke-dasharray="6" stroke="green" />
`
 
YB1 = YA1 + (( g.height - 1 ) * g.cellHeight  ) * scale;
//YB1 = YA1 + 200;
YB2 = YA2 + (( g.height - 1 ) * g.cellHeight ) * scale;
//YB2 = YB1 + 200;

align2=`
<line x1="${XA1}" y1="${YB1}" x2="${XA2}" y2="${YB1}" stroke-dasharray="6" stroke="green" />
<line x1="${XA2}" y1="${YB1}" x2="${XA2}" y2="${YB2}" stroke-dasharray="6" stroke="green" />
<line x1="${XA2}" y1="${YB2}" x2="${XA1}" y2="${YB2}" stroke-dasharray="6" stroke="green" />
<line x1="${XA1}" y1="${YB2}" x2="${XA1}" y2="${YB1}" stroke-dasharray="6" stroke="green" />
`

align3=`
<line x1="${XB1}" y1="${YB1}" x2="${XB2}" y2="${YB1}" stroke-dasharray="6" stroke="green" />
<line x1="${XB2}" y1="${YB1}" x2="${XB2}" y2="${YB2}" stroke-dasharray="6" stroke="green" />
<line x1="${XB2}" y1="${YB2}" x2="${XB1}" y2="${YB2}" stroke-dasharray="6" stroke="green" />
<line x1="${XB1}" y1="${YB2}" x2="${XB1}" y2="${YB1}" stroke-dasharray="6" stroke="green" />
`
align = align0 + align1 + align2 + align3

// Horizontal Lines       
X1 = g.left * scale;     
X2 = ((g.left * 1) + (g.width) * g.cellWidth) * scale;

for(x = 0; x <= g.height; x++)
   {            
   Y1 = (g.top * 1 + x * g.cellHeight) * scale;         
   Y2 = (g.top * 1 + x * g.cellHeight) * scale;                  
   if(x === 0 || x === g.height)
     {   
     // Add a little bit to perforate to edges of page at top and bottom
     toLeft = (X1 - g.cellWidth * 2) * scale;
     toRight = X2 + g.cellWidth * scale;
     t += `  <line x1="${toLeft}" y1="${Y1}" x2="${X1}" y2="${Y1}" stroke="purple"/>\n`;
     t += `  <line x1="${X2}" y1="${Y2}" x2="${toRight}" y2="${Y2}" stroke="purple"/>\n`;
     }

   t += `  <line x1="${X1}" y1="${Y1}" x2="${X2}" y2="${Y2}" stroke="purple"/>\n`;
   }  

// Circle the holes in page for alignment
//
circle0 = 170 * scale;
circle1 = 784 * scale;
circle2 = 1397 * scale;

circley = 54 * scale;
circler = 30 * scale;

circles=`
 <circle cx="${circle0}" cy="${circley}" r="${circler}" fill="none" stroke="purple" />
 <circle cx="${circle1}" cy="${circley}" r="${circler}" fill="none" stroke="purple" />
 <circle cx="${circle2}" cy="${circley}" r="${circler}" fill="none" stroke="purple" />
`;


// Vertical Lines

Y1 = g.top * scale;
Y2 = ((g.top * 1 ) + (g.height * g.cellHeight)) * scale;

for(x = 0; x <= g.width; x++)         
   {            
   X1 = (g.left * 1 + x * g.cellWidth) * scale;  
   X2 = (g.left * 1 + x * g.cellWidth) * scale;    
   t += `  <line x1="${X1}" y1="${Y1}" x2="${X2}" y2="${Y2}" stroke="purple"/>\n`;
   }           

svgFooter = '</svg>';       

heading.innerHTML = ""
footer.innerHTML = ""


return svgHeader + align + t + svgFooter; 
}

