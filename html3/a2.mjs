import sheet from "./blue.css" with { type: "css" };
document.adoptedStyleSheets.unshift(sheet);
export default function Zoo(){
	let el= document.getElementById("root")
	el.innerText= "blue-Zoo";
 	el.style.fontSize='3.5em';
}


//const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
//sheet.replaceSync("a { color: red; }");

// Apply the stylesheet to a document