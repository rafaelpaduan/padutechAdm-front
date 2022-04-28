<template>
  <div class="page page-center">
	  <div class="d-flex justify-content-center">
		  	<form @submit.prevent="userLogin" class="card card-md" action="." method="get" autocomplete="off">
				<div class="card-body">
					<div class="text-center mb-4">
						<a href="/" class="navbar-brand navbar-brand-autodark"><img src="~/assets/img/logo/padutech/padutech.png" height="36" alt=""></a>
					</div>
					<div class="mb-3">
						<label class="form-label">Usuário</label>
						<input v-model="login.username" type="text" class="form-control" placeholder="Usuário">
					</div>
					<div class="mb-2">
						<label class="form-label">
							Senha
							<span class="form-label-description">
								<!-- <a href="./forgot-password.html">esqueci minha senha</a> -->
							</span>
						</label>
						<div class="input-group input-group-flat">
							<input v-model="login.password" :type="showPass ? 'text' : 'password'" class="form-control" placeholder="Senha" autocomplete="off">
							<span class="input-group-text">
								<a @click="showPass = !showPass" href="#" class="link-secondary" title="" data-bs-toggle="tooltip" data-bs-original-title="Show password"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
									<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="2"></circle><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
								</a>
							</span>
						</div>
					</div>
					<div class="mb-2">
						<!-- <label class="form-check">
							<input type="checkbox" class="form-check-input">
							<span class="form-check-label">Remember me on this device</span>
						</label> -->
					</div>
					<div class="form-footer">
						<button :disabled="login.username && login.password ? false : true" type="submit" class="btn btn-primary w-100">Login</button>
					</div>
				</div>
			</form>
	  </div>
  </div>
</template>

<script>

import qs from 'qs';

export default {

	layout: 'blank',

	data() {
		return {
			showPass: false,
			login: {
				username: "",
				password: ""	
			},
		};
	},
	methods: {
		async userLogin() {

			const data = qs.stringify({
				client_id: 'padutechAdm-front',
				grant_type: 'password',
				username: this.login.username,
				password: this.login.password 
			});

			await this.$auth.loginWith("local", {
				data: data
			}).then((response) => {}).catch((error) => {
				this.$toast.error(error.response.data.error_description)
			})
		},
	}
};
</script>

<style scoped>
.page {
	background-image: url('/background/bg.jpg');
}
</style>