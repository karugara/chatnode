var socket = io.connect('http://10.0.2.15:6677',{'forceNew':true});
var socket = io.connect('http://10.0.2.18:6677',{'forceNew':true});

socket.on('messages', function(data){
	console.log(data);
});

/*map es un metodo q me pertmite recorrer itera los elementos del array data*/
function render(data){
	var html = data.map(function(message, index){
		return(
			<div class="message">
				<strong>${message.nickname}</strong> dice:
				<span>${message.text}</span>
			</div>
			);
	}).join(' ');

	document.getElementById('messages').innerHTML = html;
}

function addMessage(e){
	var message = 
	nickname: document.getElementById('nickname').value,
	text: document.getElementById('text').value
};


