(function()
	{
		var _id="64f4d9ac77267a8bf1fa04308050e71a";
		while(document.getElementById("timer"+_id))_id=_id+"0";
		document.write("<div id='timer"+_id+"' style='min-width:261px;height:60px;'></div>");
		var _t=document.createElement("script");
		_t.src="http://megatimer.ru/timer/timer.min.js";
		var _f=function(_k)
		{
			var l=new MegaTimer(_id, 
				{
					"view":[1,1,1,1],"type":
					{
						"currentType":"1","params":
						{
							"usertime":true,"tz":"3","utc":1504224000000
						}
					},"design":
					{
						"type":"text","params":{
							"number-font-family":{
								"family":"Comfortaa",
								"link":"<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
							},
							"number-font-size":"48",
							"number-font-color":"#000",
							"separator-margin":"8",
							"separator-on":false,
							"separator-text":":",
							"text-on":true,
							"text-font-family":{
								"family":"Comfortaa",
								"link":"<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
							},"text-font-size":"12","text-font-color":"#c7c7c7"
						}
					},
					"designId":1,"theme":"white","width":261,"height":60
				});
				if(_k!=null)l.run();
			};
			_t.onload=_f;
			_t.onreadystatechange=function(){if(_t.readyState=="loaded")_f(1);
			};
			var _h=document.head||document.getElementsByTagName("head")[0];
			_h.appendChild(_t);}).call(this);