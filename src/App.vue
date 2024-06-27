<script setup lang="ts">

import TodoTable from '@/components/TodoTable.vue'
import TodoModal from '@/components/TodoModal.vue'
import { ref } from 'vue'

const tableData = ref([])
const filteredData = ref([...tableData.value])
const searchValue = ref('')

const modalRef = ref<InstanceType<typeof TodoModal>>()

const handlePublish = (todoItem: any) => {
    tableData.value.push({...todoItem})
    handleSearch()
}

const handleDelete = (todoItem: any) => {
    console.log(todoItem)
    const index = tableData.value.findIndex(todo => todo.title === todoItem.title)
    if (index !== -1) {
        tableData.value.splice(index, 1)
        handleSearch()
    }
}

const handleUpdate = (todoItem: any) => {
    const index = tableData.value.findIndex(todo => todo.title === todoItem.title)
    if (index !== -1) {
        tableData.value[index] = {...todoItem}
        handleSearch()
    }
}

const handleSearch = () => {
    if (searchValue.value !== '') {
        filteredData.value = tableData.value.filter(todo =>
            todo.title.toLowerCase().includes(searchValue.value.toLowerCase())
        )
    } else {
        filteredData.value = tableData.value
    }
}

const handleRemoveAll = () => {
    tableData.value = []
    filteredData.value = tableData.value
}

const handleChangeFormToUpdate = (data: any) => {
    modalRef.value?.updateForm(data)
}
</script>

<template>
    <el-container class="container">
        <div class="search-box">
            <input class="search-input" v-model="searchValue" placeholder="Search by Title" spellcheck="false" />
            <el-button class="search-btn" type="info" @click="handleSearch">
                SEARCH
            </el-button>
        </div>

        <el-card class="card" body-style="padding: 0">
            <template #header>
                <div class="card-header">
                    <h2>Tutorials</h2>
                </div>
            </template>
            <TodoTable :data="filteredData" @update="handleChangeFormToUpdate" @delete="handleDelete" />
            <template #footer>
                <el-button type="danger" @click="handleRemoveAll">REMOVE ALL</el-button>
            </template>
        </el-card>

        <TodoModal ref="modalRef" @publish="handlePublish" @delete="handleDelete" @update="handleUpdate" />
    </el-container>
</template>

<style scoped>
.container {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}

.search-box {
    display: flex;
    width: 500px;
}

.card {
    margin-top: 20px;
    min-width: 800px;
}

.search-input {
    width: 300px;
    border: none;
    border-radius: 0;
    box-shadow: 0 3px 2px -2px gray;
}

.search-input:hover {
    box-shadow: 0 4px 2px -2px gray;
}

.search-input:focus-visible {
    outline: none;
    box-shadow: 0 4px 2px -2px gray;
}

.search-btn {
    margin-left: 20px;
    background-color: #f6f6f6;
    color: black;
    border: none;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
                0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-btn:hover {
    background-color: rgba(246, 246, 246, 0.6);
}
</style>
