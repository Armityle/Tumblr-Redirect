function armityle_redirect(newUrl) {
	var protocolEndPos = document.URL.indexOf('://');
	
	if (protocolEndPos === -1) {
		newUrl = 'http://' + newUrl;
		var domainStartPos = 7;
		
	} else {
		var domainStartPos = protocolEndPos + 3;
	}
	
	var filePathStartPos = document.URL.indexOf('/', domainStartPos);
	
	if (filePathStartPos === -1) {
		var redirectUrl = newUrl;
	} else {
		var redirectUrl = newUrl + document.URL.substring(filePathStartPos, document.URL.length);
	}
	
	window.location.replace(redirectUrl);
}
