function toggleMessage() {
        var x = document.getElementById("this");
        var send_msg_button = document.getElementById("send_msg_button")
        var chat = document.getElementById("chat_window")
        var appendChat = document.getElementById("appendChat")
        var html = `
        <div id="chat_window" class="chat_window">
        <div class="top_menu">
            <div class="buttons">
                <div id="send_msg_button" onclick="toggleMessage()" class="button close" display="shown"></div>
            </div>
            <div class="title">Chat</div>
        </div>
        <ul class="messages"></ul>
        <div class="bottom_wrapper clearfix">
            <div class="message_input_wrapper">
                <input class="message_input" placeholder="Type your message here..." />
            </div>
            <div class="send_message">
                <div class="icon"></div>
                <div class="text">Send</div>
            </div>
        </div>
    </div>
    <div class="message_template">
        <li class="message">
            <div class="avatar"></div>
            <div class="text_wrapper">
                <div class="text"></div>
            </div>
        </li>
    </div>
        `
    if (chat != null && send_msg_button != null && send_msg_button.getAttribute("display") === "shown") {
      // close message popup
        chat.replaceWith("")
//       send_msg_button.setAttribute('display', "hidden");
      x.innerHTML = '<i class="material-icons text-lg position-relative">email</i>';
      x.setAttribute('display', "hidden");
      console.log('closing')
    } else if (chat == null && x.getAttribute('display') === "hidden") {
      // open message popup
      appendChat.innerHTML += html;
      x.setAttribute('display', "shown");
      console.log('opening')
    }
}

(function () {
        var Message;
        Message = function (arg) {
            this.text = arg.text, this.message_side = arg.message_side;
            this.draw = function (_this) {
                return function () {
                    var $message;
                    $message = $($('.message_template').clone().html());
                    $message.addClass(_this.message_side).find('.text').html(_this.text);
                    $('.messages').append($message);
                    return setTimeout(function () {
                        return $message.addClass('appeared');
                    }, 0);
                };
            }(this);
            return this;
        };
        $(function () {
            var getMessageText, message_side, sendMessage;
            message_side = 'right';
            getMessageText = function () {
                var $message_input;
                $message_input = $('.message_input');
                return $message_input.val();
            };
            sendMessage = function (text) {
                var $messages, message;
                if (text.trim() === '') {
                    return;
                }
                $('.message_input').val('');
                $messages = $('.messages');
                message_side = message_side === 'left' ? 'right' : 'left';
                message = new Message({
                    text: text,
                    message_side: message_side
                });
                message.draw();
                return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
            };
            $('.send_message').click(function (e) {
                return sendMessage(getMessageText());
            });
            $('.message_input').keyup(function (e) {
                if (e.which === 13) {
                    return sendMessage(getMessageText());
                }
            });
            sendMessage('Hello Philip! :)');
            setTimeout(function () {
                return sendMessage('Hi Sandy! How are you?');
            }, 1000);
            return setTimeout(function () {
                return sendMessage('I\'m fine, thank you!');
            }, 2000);
        });
    }.call(this));
