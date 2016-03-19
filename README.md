How to Use
==========

1. Put a [link](http://thomasrichards.xyz/-jsdump/armityleRedirectMin.js) to this code in the head of your Tumblr page. Or copy and paste the code into a script tag.
```html
<script src="http://thomasrichards.xyz/-jsdump/armityleRedirectMin.js"></script>
```

2. Either call the function `armityle_redirect` in the head to immediately redirect. Or attach it as an event handler to a button or something that resembles an anchor. Don't actually use an anchor tag because there are issues when it comes to people doing a ctrl+click.
```html
<script>
	armityle_redirect('http://new-url.tumblr.com');
</script>
```
```html
<button onclick="armityle_redirect('http://new-url.tumblr.com')">Go to new blog</button>
```
```html
<span onclick="armityle_redirect('http://new-url.tumblr.com')" style="cursor:pointer; text-decoration:underline;">Go to new blog</span>
```