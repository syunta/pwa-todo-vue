import Vue from 'vue'
import App from './components/App.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import store from './store/todo';
import sw from './sw';

UIkit.use(Icons);
sw.register();

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
