<template>
    <div class="page">
        {{text}}
    </div>
</template>
<script>
    import Cookie from 'js-cookie'
    export default {
        data: function() {
            return {
                text: 'hello'
            }
        },
        mounted () {
          chrome.cookies.getAll({
          }, function(cookie) {
             console.log(1)
            console.log(cookie)
          })
        }
    }
</script>
