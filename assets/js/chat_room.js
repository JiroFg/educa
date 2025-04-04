document.addEventListener("DOMContentLoaded", () => {
    const courseId = JSON.parse(
        document.getElementById('course-id').textContent
    )
    const requestUser = JSON.parse(
        document.getElementById('request-user').textContent
    )
    const chatDiv = document.getElementById('chat')
    const chatMsgInput = document.getElementById('chatMsgInput')
    const chatMsgSubmit = document.getElementById('chatMsgSubmit')
    const dateOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    // const courseId = document.getElementById("courseIdInput").value;
    const url = `wss://${window.location.host}/ws/chat/room/${courseId}/`;
    const chatSocket = new WebSocket(url);
    chatSocket.onmessage = function (event) {
        const data = JSON.parse(event.data);
        const datetime = new Date(data.datetime).toLocaleString('en', dateOptions)
        const name = data.user == requestUser ? 'Me' : data.user;
        chatDiv.innerHTML += `
            <div>
                <strong>${name}:</strong>
                <br>
                ${datetime}
                <br>
                ${data.message}
            </div>
        `;
        chatDiv.scrollTop = chatDiv.scrollHeight;
    };
    chatSocket.onclose = function (event) {
        console.error('Chat socket closed unexpectedly');
    };
    chatMsgSubmit.addEventListener('click', (event) => {
        const message = chatMsgInput.value
        if (message) {
            chatSocket.send(JSON.stringify({ 'message': message }))
            chatMsgInput.value = '';
            chatMsgInput.focus();
        }
    })
    chatMsgInput.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault()
            chatMsgSubmit.click()
        }
    })
    chatMsgInput.focus()
})