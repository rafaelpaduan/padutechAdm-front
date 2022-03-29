<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>

import qs from 'qs';

export default {

	layout: 'blank',

	data() {
		return {
			login: {
				username: "",
				password: "",
				client_id: "padutechAdm-front",
				grant_type: "password"
			},
		};
	},
	methods: {
		async userLogin() {

			console.log("gonna login")

			const data = qs.stringify({
				client_id: 'padutechAdm-front',
				grant_type: 'password',
				username: this.login.username,
				password: this.login.password 
			});

			await this.$auth.loginWith("local", {
				data: data
			}).then((response) => {
				console.warn(response.data.refresh_token)

				console.log(this.$auth)

				this.$auth.strategy.refreshToken.set(response.data.refresh_token)

			}).catch((error) => {
				console.error(error.message)
			})
		},
	}
};
</script>