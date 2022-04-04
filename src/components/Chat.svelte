<script lang="ts">
  import faker from '@faker-js/faker';

  import { afterUpdate, onMount } from 'svelte';
  import { messages, Message } from '../stores/store';
  let messagesElement;
  let inputValue: string = '';

  const scrollDown = (): void => {
    messagesElement.scrollTop = messagesElement.scrollHeight;
  };

  onMount(() => {
    scrollDown();
  });

  afterUpdate(() => {
    scrollDown();
  });

  const onSendButtonClicked = () => {
    if (inputValue) {
      const newMessage: Message = {
        id: 1222,
        content: inputValue,
        from: {
          id: 2,
          avatarUrl: '',
          name: 'Test',
        },
        dateTime: new Date(),
      };

      $messages = [...$messages, newMessage];
      inputValue = '';
    }
  };

  const onKeyPressed = (event) => {
    if (event.key === 'Enter') {
      onSendButtonClicked();
    }
  };
</script>

<div class="chat">
  <div bind:this={messagesElement} class="chat_messages">
    <slot />
  </div>
  <div class="chat_buttons">
    <input placeholder="Write a message..." on:keydown={onKeyPressed} bind:value={inputValue} type="text" />
    <!-- <button on:click={onSendButtonClicked}>Send</button> -->
  </div>
</div>

<style>
  .chat {
    width: 100%;
    background-color: #060e1b;
    /* #F0E6B9 */
    display: flex;
    flex-direction: column;
  }

  .chat_messages {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    height: 100%;
  }

  .chat_buttons {
    display: flex;
    height: 60px;
    margin-bottom: 4px;
  }

  input {
    height: 62px;
    flex-grow: 2;
    border: none;
    /* align-self: flex-end; */
  }

  /* button {
    height: 63px;
    width: 80px;
    border: 1px solid black;
    border-radius: 3px;
  } */

  ::-webkit-scrollbar {
    height: 10px;
    width: 6px;
    background: #747a80;
  }

  ::-webkit-scrollbar-thumb {
    background: #2b353f;
    border-radius: 5px;
    /* height: 10px; */
    /* -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75); */
  }

  ::-webkit-scrollbar-corner {
    background: #747a80;
  }

  input[type="text"] {
   /* border: 1px solid #cccccc; */
   /* border-radius: 3px; */
   background: #101b27 !important;
   outline: none;
   color: #cccccc;
   font-size: 10pt;
   font-family: Tahoma;
   padding-left: 10px;
}

::placeholder {
  color: #546777;
}
</style>
