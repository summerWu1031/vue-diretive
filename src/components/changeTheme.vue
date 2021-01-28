<template>
    <div>
        <button @click="changeTheme">换肤</button>
        <button @click="changeFontSize('big')">放大</button>
        <button @click="changeFontSize('small')">缩小</button>
        <button @click="changeFontSize('normal')">正常</button>
    </div>
</template>

<script>
export default {
  inject:['changeTheme','changeFontSize']
}
</script>