const a = "dry";
const b = "wet";
const c = 4;
const d =7;

if (a===b) {
	console.log("Impossible");
} else if ((a=== "dry" & b=== "dry") || (a === "wet" & b=== "wet")) {
	console.log (" Partially correct");

} else {
	console.log ("correct");
}

if (c+d === 11 & d-c=== 3) {
	console.log (" correct calculation");
} else { console.log ("wrong calculations")}