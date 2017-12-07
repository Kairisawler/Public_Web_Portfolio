/*
	Function List:
	stringRev
		Used to reverse the order of characters in a text string
*/



function stringRev(textString) {
	if (!textString) return '';
	var revVar = '';
	for(i = textString.length - 1; i>=0; i--)
		revVar += textString.charAt(i)
	return revVar;
}