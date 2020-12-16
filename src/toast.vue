<template>
    <div class="simple-toast-tip">
        <div class="simple-toast-content">
            <div :class="['simple-toast-icon', type]"></div>
            <div class="simple-toast-text">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'simple-toast',
        props: ['type'],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="css" scoped>
.simple-toast-tip {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999999;
}
.simple-toast-tip .simple-toast-content {
    max-width: 70%;
    min-width: 35%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    display: flex;
    align-items: center;
}
.simple-toast-tip .simple-toast-content .simple-toast-icon {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    background-color: transparent !important;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.simple-toast-tip .simple-toast-content .simple-toast-icon.success {
    background-image: url('./images/success.png');
}
.simple-toast-tip .simple-toast-content .simple-toast-icon.error {
    background-image: url('./images/error.png');
}
        
.simple-toast-tip .simple-toast-content .simple-toast-text {
    color: #ffffff;
    font-size: 14px;
}
</style>