import SimpleToast from './toast.vue';

const toast = {
    install(Vue, options = {}) {
        let vm;
        let toastWrapper;
        const el = Vue.extend({
            render(h) {
                return h(SimpleToast, {
                    props: {
                        type: this.type
                    }
                }, this.msg)
            },
            data: function () {
              return {
                type: '',
                msg: ''
              }
            }
        })
        function openToast(type, msg) {
            vm = new el();
            vm.type = type;
            vm.msg = msg;
            if (toastWrapper) return;
            toastWrapper = document.createElement('div');
            const toastEl = document.createElement('div');
            toastWrapper.id = 'simple-toast-tip';
            toastEl.id = 'simple-toast-tip-el';
            toastWrapper.appendChild(toastEl);
            document.body.appendChild(toastWrapper);
            vm.$mount('#simple-toast-tip-el');
        }
        function closeToast() {
            vm && vm.$destroy();
            if (toastWrapper) {
                document.body.removeChild(toastWrapper);
                toastWrapper = undefined;
            }
        }
        Vue.prototype.$toast = {
            success(msg) {
                openToast('success', msg);
                setTimeout(() => {
                    closeToast()
                }, options.time || 2000);
            },
            error(msg) {
                openToast('error', msg);
                setTimeout(() => {
                    closeToast()
                }, options.time || 2000);
            }
        }
    }
}

export default toast;