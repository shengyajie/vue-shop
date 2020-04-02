import Vue from 'vue'
import {Button, Form, FormItem, Input,Message} from 'element-ui'


Vue.prototype.$message=Message;
Vue.use(Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
