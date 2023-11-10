<template>
  <div>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Enter a task" />
    <button @click="addTask">Save</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Task } from "@/types/Task";
import { LocalStorageRepository } from "@/repositories/LocalStorageRepository";

@Component
export default class TaskForm extends Vue {
  private newTask: string = "";
  private repository = new LocalStorageRepository<Task>("tasks");

  private addTask() {
    if (this.newTask.trim() === "") return;

    const task: Task = {
      id: new Date().getTime(),
      title: this.newTask,
    };

    this.repository.create(task);
    this.newTask = "";
  }
}
</script>