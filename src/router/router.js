import {createRouter, createWebHistory} from "vue-router";
import {useAuthStore} from "@/stores/auth";


const routes = [
    {
        path: '/',
        component: () => import("@/layouts/MainLayout"),
        children: [
            {
                name: 'Home',
                path: '',
                component: () => import("@/pages/HomePage" /* webpackChunkName: "home" */)
            },
            {
                name: 'Login',
                path: 'login',
                component: () => import("@/pages/LoginPage" /* webpackChunkName: "login" */)
            },
            {
                name: 'Register',
                path: 'register',
                component: () => import("@/pages/RegisterPage" /* webpackChunkName: "register" */)
            },
            {
                name: 'Movies',
                path: 'movies',
                component: () => import("@/pages/MoviesPage" /* webpackChunkName: "movies" */)
            },
            {
                name: 'Movie',
                path: 'movies/:title',
                props: true,
                component: () => import("@/pages/MoviePage" /* webpackChunkName: "movie" */)
            },
            {
                name: 'Schedule',
                path: 'schedule',
                component: () => import("@/pages/SchedulePage" /* webpackChunkName: "schedule" */)
            },
            {
                name: 'Booking',
                path: 'schedule/:id',
                props: true,
                component: () => import("@/pages/BookingPage" /* webpackChunkName: "booking" */)
            },
            {
                name: 'Upcoming',
                path: 'upcoming',
                component: () => import("@/pages/UpcomingPage" /* webpackChunkName: "upcoming" */)
            },
            {
                name: 'UpcomingMovie',
                path: 'upcoming/:title',
                props: true,
                component: () => import("@/pages/UpcomingMoviePage" /* webpackChunkName: "upcoming-movie" */)
            },
            {
                name: 'Cinemas',
                path: 'cinemas',
                component: () => import("@/pages/CinemasPage" /* webpackChunkName: "cinemas" */)
            },
            {
                name: 'Cinema',
                path: 'cinemas/:title',
                props: true,
                component: () => import("@/pages/CinemaPage" /* webpackChunkName: "cinema" */)
            },
            {
                name: 'Hall',
                path: 'cinemas/:title/:hall',
                props: true,
                component: () => import("@/pages/HallPage" /* webpackChunkName: "hall" */)
            },
            {
                name: 'Specials',
                path: 'specials',
                component: () => import("@/pages/SpecialsPage" /* webpackChunkName: "specials" */)
            },
            {
                name: 'SpecialOffer',
                path: 'specials/:id',
                props: true,
                component: () => import("@/pages/SpecialOfferPage" /* webpackChunkName: "special-offer" */)
            },
            {
                name: 'News',
                path: 'news',
                component: () => import("@/pages/NewsPage" /* webpackChunkName: "news" */)
            },
            {
                name: 'OneNews',
                path: 'news/:id',
                props: true,
                component: () => import("@/pages/OneNewsPage" /* webpackChunkName: "one-news" */)
            },
            {
                name: 'Contacts',
                path: 'contacts',
                component: () => import("@/pages/ContactsPage" /* webpackChunkName: "contacts" */)
            },
            {
                name: 'Profile',
                path: 'profile',
                component: () => import("@/pages/ProfilePage" /* webpackChunkName: "profile" */),
                meta: {
                    requiresAuth: true
                },
            },
            {
                name: 'CustomPage',
                path: '/:title',
                props: true,
                component: () => import("@/pages/CustomPage" /* webpackChunkName: "custom" */)
            },
            {
                name: 'Not Found',
                path: '/:pathMatch(.*)*',
                component: () => import("@/pages/HomePage" /* webpackChunkName: "404" */)
            },
        ]
    },
    {
        path: '/admin/',
        component: () => import("@/layouts/AdminLayout"),
        meta: {
            requiresAdmin: true
        },
        children: [
            {
                name: 'Admin',
                path: '',
                component: () => import("@/pages/admin/AdminPanel" /* webpackChunkName: "admin" */)
            },
            {
                name: 'Banners',
                path: 'banners',
                component: () => import("@/pages/admin/AdminBanners" /* webpackChunkName: "posters" */)
            },
            {
                name: 'AdminMovies',
                path: 'movies',
                component: () => import("@/pages/admin/AdminMovies" /* webpackChunkName: "admin-movies" */),
            },
            {
                name: 'AdminMovie',
                path: 'movies/:id',
                props: true,
                component: () => import("@/pages/admin/AdminMovie" /* webpackChunkName: "admin-movie" */),
            },
            {
                name: 'AdminUpcoming',
                path: 'upcoming/:id',
                props: true,
                component: () => import("@/pages/admin/AdminUpcoming" /* webpackChunkName: "admin-upcoming" */),
            },
            {
                name: 'AdminCinemas',
                path: 'cinemas',
                component: () => import("@/pages/admin/AdminCinemas" /* webpackChunkName: "admin-cinemas" */)
            },
            {
                name: 'AdminCinema',
                path: 'cinemas/:id',
                props: true,
                component: () => import("@/pages/admin/AdminCinema" /* webpackChunkName: "admin-cinema" */)
            },
            {
                name: 'AdminHall',
                path: 'halls/:parent-:id',
                props: true,
                component: () => import("@/pages/admin/AdminHall" /* webpackChunkName: "admin-hall" */)
            },
            {
                name: 'AdminSchedule',
                path: 'schedule',
                component: () => import("@/pages/admin/AdminSchedule" /* webpackChunkName: "admin-schedule" */)
            },
            {
                name: 'AdminNews',
                path: 'news',
                component: () => import("@/pages/admin/AdminNews" /* webpackChunkName: "admin-news" */)
            },
            {
                name: 'AdminOneNews',
                path: 'news/:parent-:id',
                props: true,
                component: () => import("@/pages/admin/AdminOneNews" /* webpackChunkName: "onenews" */)
            },
            {
                name: 'AdminSpecials',
                path: 'specials',
                component: () => import("@/pages/admin/AdminSpecials" /* webpackChunkName: "admin-specials" */)
            },
            {
                name: 'AdminSpecialOffer',
                path: 'specials/:parent-:id',
                props: true,
                component: () => import("@/pages/admin/AdminSpecialOffer" /* webpackChunkName: "offer" */)
            },
            {
                name: 'Pages',
                path: 'pages',
                component: () => import("@/pages/admin/AdminPages" /* webpackChunkName: "pages" */)
            },
            {
              name: 'AdminPage',
              path: 'pages/edit/:parent-:id',
              props: true,
              component: () => import("@/pages/admin/AdminPage" /* webpackChunkName: "editpage" */)
            },
            {
                name: 'Users',
                path: 'users',
                component: () => import("@/pages/admin/AdminUsers" /* webpackChunkName: "users" */)
            },
            {
              name: 'User',
              path: 'users/edit/:parent-:id',
              props: true,
              component: () => import("@/pages/admin/AdminUser" /* webpackChunkName: "user" */)
            },
            {
                name: 'Newsletter',
                path: 'newsletter',
                component: () => import("@/pages/admin/AdminNewsletter" /* webpackChunkName: "newsletter" */)
            },
            {
                name: 'ChooseUsers',
                path: 'newsletter/select-:id',
                props: true,
                component: () => import("@/pages/admin/AdminUsers")
            }
        ]
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return {
                top: 0,
                behavior: "smooth"
            }
        }
    }
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    authStore.checkAuthStatus().then(() => {
        if (to.matched.some((record) => record.meta.requiresAdmin)) {
            if (JSON.parse(window.localStorage.isAdmin)) {
                next();
            }
            else {
                next('/');
            }
        }
        else if (to.matched.some((record) => record.meta.requiresAuth)) {
            if (JSON.parse(window.localStorage.currentUser) && !JSON.parse(window.localStorage.isAdmin)) {
                next();
            }
            else {
                next('/');
            }
        }
        else {
            next();
        }
    });
})

export default router;