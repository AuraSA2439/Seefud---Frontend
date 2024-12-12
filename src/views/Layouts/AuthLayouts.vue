<script>
export default {
  name: 'AuthLayout',
  mounted() {
    this.addStyle('/assets/css/styles-login.css')
  },
  beforeUnmount() {
    console.log('AuthLayout is being destroyed')
    this.removeStyle('/assets/css/styles-login.css')
  },
  methods: {
    addStyle(href) {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
      }
    },
    removeStyle(href) {
      const link = document.querySelector(`link[href="${href}"]`)
      if (link) {
        document.head.removeChild(link)
      }
    },
  },
}
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
/* kalo bisa, tolong buat ini popup wrap nya kagak perlu di hardcode tiap ada popup baru hehe */
.popup-wrap {
  display: none;
  position: absolute !important;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.popup {
  position: fixed;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  color: white;
}

#popup-logout,
#popup-delete {
  left: 50%;
  top: 50%;
  width: 320px;
  height: fit-content;
  gap: 4px;
  text-align: center;
  padding-bottom: 20px;
  transform: translate(-50%, -50%);
  /* color: white; */
}

#popup-logout .button-wrap,
#popup-delete .button-wrap {
  justify-content: center;
  gap: 20px;
}

#popup-logout .button-wrap button,
#popup-delete .button-wrap button {
  margin: 0;
  height: 32px;
}

.confirm {
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 0 20px;
  gap: 20px;
}

.confirm .xl {
  height: fit-content !important;
}

#popup-edit-user {
  top: 18%;
  left: 38%;
  width: 400px;
  height: 320px;
}

#popup-edit-vendor {
  top: 8%;
  left: 38%;
  width: 400px;
  height: 480px;
}

#popup-edit-report {
  top: 18%;
  left: 33%;
  width: 560px;
  height: 400px;
}

#popup-report-counts {
  top: 18%;
  left: 27%;
  width: 680px;
  height: 320px;
}

#popup-response {
  top: 18%;
  left: 33%;
  width: 560px;
  height: 400px;
}

.close {
  display: flex;
  justify-content: end;
  height: fit-content;
  color: white;
  box-shadow: none !important;
}

.form {
  display: flex;
  width: auto;
  height: 100%;
  padding: 0 20px;
}

.reports {
  height: 260px;
  overflow: auto;
  /* color: #303D58; */
  font-size: 12px !important;
}

.input {
  /* width: auto; */
  /* display: flex;
    flex-direction: column; */
  height: fit-content;
  margin-bottom: 4px;
}

.input input {
  width: 86%;
  /* width: auto; */
  height: 30px;
  border-radius: 20px;
  border: solid 1px #bfc3cb;
  margin-left: 4px;
  margin-right: 4px;
}

.input textarea {
  border-radius: 20px;
  border: solid 1px #bfc3cb;
  width: 86%;
  height: 100px;
  resize: none;
  padding: 10px;
  margin-left: 4px;
  margin-right: 4px;
}

/* .input-big input {
    height: 160px;
} */

.button-wrap {
  width: auto;
  display: flex;
  /* align-items: end; */
  justify-content: end;
  gap: 8px;
  height: fit-content;
  padding: 0 10px;
}

.wrapper {
  display: flex;
  height: fit-content;
  align-items: center;
}

#foto_bukti,
#foto_vendor,
#rating {
  color: #bfc3cb;
}

a {
  color: inherit;
  text-decoration: none;
}

input {
  padding: 0 12px;
  /* border-radius: 12px; */
}

input,
button,
textarea {
  border: 0;
  margin: 8px 0;
}

input[type='file'] {
  border-radius: 0;
  border: 0;
  padding: 0;
  height: fit-content;
  /* display: flex;
    align-items: center; */
  color: inherit;
}

input[type='number'] {
  width: 44px;
  border-radius: 10px;
  /* padding: 0; */
  color: #303d58 !important;
}

input[type='radio'] {
  width: 48px;
}

button {
  /* height: fit-content;
    width: fit-content; */
  /* box-shadow: 2px 2px 4px #222B3E; */
  background-color: transparent;
}

button:hover {
  cursor: pointer;
}

button::after {
  box-shadow: none;
}
</style>
