import Zoo from '/a2.mjs';
import sheet from "./green.css" with { type: "css" };
document.adoptedStyleSheets.push(sheet);
//document.adoptedStyleSheets = [sheet];

export default function Boo(){
	
	document.getElementById("root").innerText= "green-Boo";
	//return 1;
}
Zoo();