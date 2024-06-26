import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-member',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('Users before enter');
        console.log({to:to, from: from});
        next();
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global before each');
  console.log({to:to, from: from});
  // if(to.name === 'team-member') {
  //   next();
  // } else {
  //   next({
  //     name: 'team-member',
  //     params: {teamId: 't3'}
  //   })
  // }
  if(to.meta.needsAuth) {
    // Write your authentication logic here, if auth then use next()
    console.error("This route Needs Authentication.")
    next();
  } else {
    next();
  }

});

router.afterEach(function(to, from) {
  // After a component is loaded, this is not to guard a route but to load or send data to something
  console.log("Global after each");
  console.log({to:to, from:from});
});

export default router;