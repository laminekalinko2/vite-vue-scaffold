import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('todoList test', () => {
   const wrapper = mount(HelloWorld)

   test('init the todos', () => {
      expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
   })

   test('creates a todo', async () => {
      await wrapper.get('[data-test="new-todo"]').setValue('New todo')
      await wrapper.get('[data-test="form"]').trigger('submit')

      expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
   })
})
