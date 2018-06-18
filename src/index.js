import Vue from 'vue'
import App from './components/App.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

new Vue({
  el: '#app',
  render: h => h(App),
});
