function handleMessage(msgEvent) 
{
    var messageName = msgEvent.name;
    //var messageData = msgEvent.message;
    if (messageName === "ImportToMendeley")
    { 
	document.getElementsByTagName('body')[0].appendChild(document.createElement('script')).setAttribute('src','http://www.mendeley.com/min.php/bookmarklet');
    }
}

safari.self.addEventListener("message", handleMessage, false);