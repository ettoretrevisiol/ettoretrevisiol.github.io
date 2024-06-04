	$(document).ready(function() 
	{
		
		
		
		
		$('.cascade').casadeLanding();
		
		$.getJSON('http://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=deltagarrett&count=15&callback=?', function(data) 	
		{
			if(data.length)
			{
				var list=$('<ul>');
				$(data).each(function(index,value)
				{
					list.append($('<li>').append($('<p>').html(value.text)));
				});
						
				$('#latest-tweets').append(list);
					
				list.bxSlider(
				{
					auto: true,
					mode:'vertical',
					nextText:null,
					prevText:null,
					displaySlideQty:1,
				    pause:5000
				});  
			}
		});
	});