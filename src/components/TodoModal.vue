<script setup lang="ts">
import { reactive } from 'vue'

const todoForm = reactive({
    title: '',
    description: '',
    status: 'Pending'
})

const emit = defineEmits(['publish', 'delete', 'update'])

const handlePublish = () => {
    emit('publish', todoForm)
    resetForm()
}

const handleDelete = () => {
    emit('delete', todoForm)
    resetForm()
}

const handleUpdate = () => {
    emit('update', todoForm)
    resetForm()
}

const resetForm = () => {
    todoForm.title = ''
    todoForm.description = ''
    todoForm.status = 'Pending'
}

const updateForm = (form: any) => {
    todoForm.title = form.title
    todoForm.description = form.description
}

defineExpose({
    updateForm
})
</script>

<template>
    <div class="modal">
        <h2>Tutorials</h2>
        <el-form label-position="top"
                 label-width="auto"
                 :model="todoForm"
                 style="max-width: 600px">
            <el-form-item label="Title" prop='title'>
                <el-input v-model="todoForm.title" clearable spellcheck="false" />
            </el-form-item>
            <el-form-item label="Description" prop='description'>
                <el-input v-model="todoForm.description" clearable spellcheck="false" />
            </el-form-item>
            <el-text tag="b">Status: </el-text>
            <el-text>{{ todoForm.status }}</el-text>
        </el-form>
        <div class="action-modal">
            <el-button type="primary" size="small" class="action-btn" @click="handlePublish">
                <el-text tag="b" class="action-btn-text">Publish</el-text>
            </el-button>
            <el-button type="danger" size="small" class="action-btn" @click="handleDelete">
                <el-text tag="b" class="action-btn-text">Delete</el-text>
            </el-button>
            <el-button type="success" size="small" class="action-btn" @click="handleUpdate">
                <el-text tag="b" class="action-btn-text">Update</el-text>
            </el-button>
        </div>
    </div>

</template>

<style scoped>
.modal {
    width: 400px;
}

.action-modal {
    margin-top: 20px;
}

.action-btn {
    box-shadow: 0 0 4px rgb(134,138,134);
}

.action-btn-text {
    color: white;
}
</style>