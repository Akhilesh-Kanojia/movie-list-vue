import { createWebHistory, createRouter } from "vue-router";
import Movie from "../components/Movie.vue";
import Home from "../components/Home.vue";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
        path: '/movie/:id',
        component: Movie
        } 
    ]
});

export default router;