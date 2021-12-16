<template>
    <div class="reasons">
        <label><input type="checkbox" name="report" />Harassment/Hate</label>
        <label><input type="checkbox" name="report" />Soliciting/Advertisement/Spam</label>
        <label><input type="checkbox" name="report" />Criminal Activity</label>
        <label><input type="checkbox" name="report" />Danger to Self or Others</label>
        <label><input type="checkbox" name="report" />Other</label>
        <p class="hint">If you want, you can include some additional info.</p>
        <textarea />     
    </div>
</template>

<script>
export default {
  name: 'reportDeets'
}
</script>

<style>
.reasons {
  text-align: left;
  width: fit-content;
}

.reasons label {display: block;}
.reasons label input {margin: 0 0.5em 0 0;}

.reasons textarea {
  width: 100%;
  height: 8em;
  overflow: auto;
}

.hint {
  color: #9cadb3;
}
</style>
