<script lang="ts">
</script>

<div class="dialogues">
  <slot />
</div>

<style>
  .dialogues {
    height: 100%;
    width: 500px;
    display: flex;
    flex-direction: column;
    background-color: #101b27;
    justify-content: flex-start;
    overflow-y: auto;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    height: 10px;
    width: 6px;
    background: #747a80;
  }

  ::-webkit-scrollbar-thumb {
    background: #2b353f;
    border-radius: 5px;
    /* -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75); */
  }

  ::-webkit-scrollbar-corner {
    background: #747a80;
  }
</style>
