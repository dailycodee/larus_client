<script lang="ts">
  import { Dialogue, generateMockMessages, messages } from '../stores/store';

  export let dialogue: Dialogue;
  export let isActive: boolean = false;

  const onDialogClicked = (event) => {
    const activeDialogues = document.querySelectorAll('.active');

    if (activeDialogues) {
      isActive = false;
      activeDialogues.forEach((dialogue) => {
        dialogue.classList.remove('active');
      });
    }
    isActive = true;

    $messages = [...generateMockMessages()];
  };
</script>

<div
  on:click={onDialogClicked}
  class:active={isActive}
  class="dialogue"
>
  <img src={dialogue.companion.avatarUrl} alt="" />
  <div class="dialogue_info">
    <div class="dialogue_info_name">{dialogue.companion.name}</div>
    <div class="dialogue_info_last_message">{dialogue.dialogLastMessage.content}</div>
  </div>
  <div class="dialogue_last_message_time">
    {dialogue.dialogLastMessage.dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
  </div>
</div>

<style>
  .dialogue {
    max-height: 70px;
    min-height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #101b27;
    /* border: 1px solid black; */
    cursor: pointer;
    color: white;
  }

  .dialogue:hover {
    background-color: #1a2733;
  }

  .active,
  .active:hover {
    background-color: #275179;
  }

  .dialogue_info {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin-left: 15px;
  }

  .dialogue_info_name {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .dialogue_info_last_message {
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
    width: 230px;
    overflow-x: hidden;
  }

  .dialogue_last_message_time {
    margin-right: 20px;
    font-weight: 600;
    font-size: 10pt;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-left: 10px;
  }
</style>
