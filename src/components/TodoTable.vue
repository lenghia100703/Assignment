<script setup lang="ts">
import { Edit, Delete } from '@element-plus/icons-vue'

const props = defineProps({
    data: Array,
})

const emit = defineEmits(['update', 'delete'])

const handleEdit = (row: any) => {
    emit('update', row)
}

const handleDelete = (row: any) => {
    emit('delete', row)
}

</script>

<template>
    <el-table :data="props.data" style="width: 100%">
        <el-table-column prop="title" label="Title" width="250" />
        <el-table-column prop="description" label="Description" width="320" />
        <el-table-column prop="status" label="Status" width="100" />
        <el-table-column label="Actions" fixed='right' width="130" :align="'center'">
            <template v-slot='scope' #default>
                <el-tooltip effect='dark' content='Edit' placement='bottom'>
                    <el-button :icon="Edit" @click="handleEdit(scope.row)" link />
                </el-tooltip>
                <el-tooltip effect='dark' content='Remove' placement='bottom'>
                    <el-button :icon="Delete" @click="handleDelete(scope.row)" link  />
                </el-tooltip>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>

</style>