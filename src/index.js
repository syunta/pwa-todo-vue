import Vue from 'vue'
import App from './components/App.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import store from './store/todo';

UIkit.use(Icons);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
