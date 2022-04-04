<script lang="ts">
  import { Message, MessageType } from '../stores/store';

  export let messageType: MessageType;
  export let message: Message;
  export let isFirstMessage: boolean = false;
</script>

<div class="message_wrapper">
  {#if isFirstMessage}
    <div
      class="from"
      class:from_sended={messageType === MessageType.outgoing}
      class:from_recieved={messageType === MessageType.incoming}
    >
      {#if messageType === MessageType.incoming}
        <img src={message.from.avatarUrl} alt="" />
        <span>{message.from.name}</span>
      {:else}
        <span>{message.from.name}</span>
        <img src={message.from.avatarUrl} alt="" />
      {/if}
    </div>
  {/if}
  <div
    class="message"
    class:message_recieved={messageType === MessageType.incoming}
    class:message_sended={messageType === MessageType.outgoing}
    class:first_message={isFirstMessage}
    class:from_sended={messageType === MessageType.outgoing}
  >
    <p class="message_text">{message.content}</p>
    <div class="message_time">{message.dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
  </div>
</div>

<style>
  .from {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: white;
  }
  .message_wrapper {
    display: flex;
    flex-direction: column;
  }

  .from img {
    width: 40px;
    height: 40px;
    border-radius: 30px;
    margin-bottom: 20px;
    margin-top: 5px;
    border: 2px solid #546777;
    /* align-self: flex-end; */
    /* margin-left: 5px;
    margin-right: 5px; */
  }

  .from span {
    /* width: 200px; */
    height: 40px;
    /* margin-bottom: 20px; */
    /* margin-top: 5px; */
    display: table-cell;
    vertical-align: middle;
    font-weight: 700;
  }

  .message,
  .from {
    margin-left: 50px;
    margin-right: 50px;
  }

  .from_sended {
    align-self: flex-end;
  }

  .from_sended span {
    margin-right: 10px;
  }

  .from_recieved span {
    margin-left: 10px;
  }

  .from_recieved {
    align-self: flex-start;
  }

  .message {
    height: 30px;
    display: flex;
    align-items: center;
    /* padding: 10px; */
    margin-bottom: 15px;
    /* margin-top: 20px; */
    position: relative;
    border-radius: 5px;
    padding-left: 10px;
    color: white;
  }

  .message .message_time {
    margin-bottom: 3px;
    margin-right: 3px;
    margin-left: 10px;
  }

  .first_message::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    border: 0.75rem solid transparent;
    border-top: none;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }

  .message_recieved.first_message::before {
    left: 0.5em;
    border-bottom-color: #112030;
  }

  .message_sended.first_message::before {
    right: 0.5em;
    border-bottom-color: #275179;
  }

  .message_time {
    font-weight: 500;
    font-size: 7pt;
    margin-left: 5px;
    padding: 2px;
    border-radius: 5px;
    color: #546777;
    align-self: flex-end;
    /* margin-top: 5px; */
  }

  .message_recieved {
    align-self: flex-start;
    background-color: #112030;
    margin-right: 15%;
    height: auto;
  }

  .message_recieved .message_time {
    /* background-color: #09111a; */
  }

  .message_sended .message_time {
    /* background-color: #142f49; */
  }

  .message_sended {
    align-self: flex-end;
    background-color: #275179;
    margin-left: 15%;
    height: auto;
  }
</style>
