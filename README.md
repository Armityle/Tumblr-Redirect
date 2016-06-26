How to Use
==========

* Put a [link](http://thomasrichards.xyz/-jsdump/tumblrRedirect.min.js) to this code in the head of your Tumblr page. Or copy and paste the code into a script tag.
```html
<script src="http://thomasrichards.xyz/.jsdump/tumblrRedirect.min.js"></script>
```
* Either call the function `tumblr_redirect` in the head to immediately redirect. Or attach it as an event handler to a button or something that resembles an anchor. Don't actually use an anchor tag because there are issues when it comes to people doing a ctrl+click.
```html
<script>
	tumblr_redirect('http://new-url.tumblr.com');
</script>
```
```html
<button onclick="tumblr_redirect('http://new-url.tumblr.com')">Go to new blog</button>
```
```html
<span onclick="tumblr_redirect('http://new-url.tumblr.com')" style="cursor:pointer; text-decoration:underline;">Go to new blog</span>
```
