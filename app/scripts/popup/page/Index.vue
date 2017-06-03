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
        }
    }
</script>
