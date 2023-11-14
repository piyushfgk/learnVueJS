<template>
  <section>
    <header>
      <h1>My Friends List</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friendsList"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :mobile-number="friend.mobile"
        :email-id="friend.email"
        :favorite="friend.favorite"
        @toggle-favorite="setToogleFavorite(friend.id)"
        @delete-contact="deleteContact(friend.id)"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      friendsList: [
        {
          id: 1,
          name: "Rahul Samaddar",
          mobile: "+91 56898989",
          email: "samaddar@localhost.com",
          favorite: true,
        },
        {
          id: 2,
          name: "Abhishek Sahu",
          mobile: "+91 89856564",
          email: "sahu@localhost.com",
        },
      ],
    };
  },
  methods: {
    setToogleFavorite(id) {
      const index = this.friendsList.findIndex((friend) => friend.id === id);
      this.friendsList[index].favorite = !this.friendsList[index].favorite;
    },
    deleteContact(id) {
      const index = this.friendsList.findIndex((friend) => friend.id === id);
      this.friendsList.splice(index, 1);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin-left: 1rem;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app .contact--favorite {
  font-size: 0.5rem;
  background: dodgerblue;
  padding: 3px;
  border-radius: 3px;
  border-color: rgb(18, 129, 240);
  color: white;
  letter-spacing: 2px;
}

#app .btn--delete {
  background: rgb(213, 8, 8);
  border: 1px solid rgb(191, 10, 10);
  border-radius: 5px;
  font-size: 1rem;
}

#app .btn--delete:hover {
  background: rgb(151, 4, 4);
  border: 1px solid rgb(144, 9, 9);
}
</style>
