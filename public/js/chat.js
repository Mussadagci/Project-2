var socket = io();

socket.on("message", (data) => {
    // console.log("Message")
    // console.log(data)
    addMessages(data);
    // socket.emit('welcome', { hello: 'world' });
});
$("button[name ='send']").on("click", function () {
    console.log($("#liveChatMessage").val())
    event.preventDefault();
    sendMessage({ message: $("#liveChatMessage").val() });
    $("#messageForm").trigger("reset");
})
getMessages()
function addMessages(data) {
    // console.log(data.message)
    $("#messages").append(`<p> ${data.message} </p>`)
}
function getMessages() {
    $.get(window.location.href + 'messages', (data) => {
        data.forEach(addMessages);
    })
}
function sendMessage(message) {
    $.post(window.location.href + 'messages', message)
    // location.reload();
}