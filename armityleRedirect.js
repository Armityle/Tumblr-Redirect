function armityleRedirect(newUrl) {
	var protocolEndPos = document.URL.indexOf('://');
	var domainStartPos = protocolEndPos + 3;
	var filePathStartPos = document.URL.indexOf('/', domainStartPos);
	
	if (filePathStartPos === -1) {
		var redirectUrl = newUrl;
	} else {
		var redirectUrl = newUrl + document.URL.substring(filePathStartPos, document.URL.length);
	}
	
	window.location.replace(redirectUrl);
}




















