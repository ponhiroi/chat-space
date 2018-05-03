$(function(){
  function buildHTML(message){
    if (message.image){
      img = `<img src=${message.image} class: 'lower-message__image'>`
    } else {
      img = ''
    }
    var html = `<div class="message" msg-id = "${ message.id }" >
                  <ul class="upper-message">
                    <li class="upper-message__user_name">
                      ${message.user_name}
                    </li>
                    <li class="upper-message__date">
                      ${message.time}
                    </li>
                  </ul>
                  <ul class="lower-message">
                      <li class="lower-message__content">
                        ${message.content}
                      </li>
                        ${img}
                  </ul>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.messages.js-messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast')
      $('.new_message')[0].reset();
      $('.form__message').val('');
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })

  function getMsg() {
    var newMsgId = $('.message').last().attr('msg-id')
    var url = $('#new_message').attr('action');
    $.ajax ({
      type: 'GET',
      url: url,
      data: { id: newMsgId },
      dataType: 'json'
    })
    .done(function(data){
      if (data.length == 0) return false
      data.forEach(function(msg) {
        var html = buildHTML(msg)
        $('.messages').append(html)
      })
      $('.messages.js-messages').animate({ scrollTop: $('.messages')[0].scrollHeight})

    })
  }
  setInterval(getMsg, 1000)
})
