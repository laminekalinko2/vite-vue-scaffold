<template>
   <div>
      <div v-for="todo in todos" :key="todo.id" data-test="todo">
         {{ todo.text }}
      </div>
      <form data-test="form" @submit.prevent="createTodo">
         <input v-model="newTodo" data-test="new-todo" />
      </form>
   </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
   name: 'HelloWorld',
   setup() {
      const newTodo = ref('')

      const todos = reactive([
         {
            id: 1,
            text: 'Learn vue.js 3',
            comleted: false,
         },
      ])
      const createTodo = () => {
         todos.push({
            id: 1,
            text: 'Learn javascript.js 3',
            comleted: false,
         })
      }

      return {
         newTodo,
         todos,
         createTodo,
      }
   },
})
</script>
