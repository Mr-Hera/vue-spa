<template>
    <h4>Pages</h4>
    <div class="text-end">
        <router-link
          class="btn btn-primary btn-sm"
          to="/pages/create"
        >New Page</router-link>
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Is Published</th>
            </tr>
        </thead>
        <tbody>
            <tr
              v-for="(page, index) in $pages.getAllPages()"
              :key="index"
              @click.prevent="goToPage(index)"
            >
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.link.text }}</td>
                <td>{{ page.published ? 'Yes' : 'No' }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import { ref, reactive, inject } from 'vue';
    import { useRouter } from 'vue-router';

    // const counter = ref(0);
    const data = reactive({ counter: 0 });
    const $pages = inject('$pages');
    const router = useRouter();

    function click() {
        data.counter++;
    }

    function goToPage(index) {
        router.push({ path: `/pages/${index}/edit` });
    };

    // export default {
    //     data() {
    //         return {
    //             counter: 0
    //         }
    //     },
    //     methods: {
    //         click() {
    //             this.counter++
    //         }
    //     }
    // }
</script>

<style>
    .table.table-hover tr:hover {
        cursor: pointer;
    }
</style>