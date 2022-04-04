<script lang="ts">
  import Chat from './components/Chat.svelte';
  import Message from './components/Message.svelte';
  import Dialogue from './components/Dialogue.svelte';
  import Dialogues from './components/Dialogues.svelte';
  import { dialogues, messages, MessageType } from './stores/store';
</script>

<main>
  <Dialogues>
    {#each $dialogues as dialogue}
      <Dialogue {dialogue} isActive={false} />
    {/each}
  </Dialogues>
  <Chat>
    {#each $messages as message, index}
      <Message
        message={message}
        messageType={message.from.id === 1 ? MessageType.incoming : MessageType.outgoing}
        isFirstMessage={$messages[index-1]?.from.id !== message.from.id}
      />
    {/each}
  </Chat>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>
