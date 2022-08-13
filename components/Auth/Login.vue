<template>
  <div>
    <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3 mb-4" role="alert" v-if="error.request">
      <p class="font-bold">Login was failed!</p>
      <p class="text-sm">{{ error.request }}</p>
    </div>
    <h1 class="font-semibold text-4xl mb-3">Welcome back!</h1>
    <p class="text-gray-400 text-sm mb-4 font-semibold">Log in with your data that you enterd during your registration.</p>
    <SocialLogin />
    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400">OR</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>
    <div class="flex flex-wrap mb-3">
      <div class="w-full text-left">
        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="name@email.com"
          v-model="email"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <div class="text-red-500 text-sm font-medium">
          {{ error.email }}
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mb-3">
      <div class="w-full text-left">
        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          v-model="password"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <div class="text-red-500 text-sm font-medium">
          {{ error.password }}
        </div>
      </div>
    </div>
    <button @click="login" class="font-semibold border text-center py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-700 rounded w-full mt-6">
      Log in with Email
    </button>
    <div class="text-center mt-4">
      <span class="text-gray-800 mt-4">Don't have an account?</span>
      <span class="text-blue-700 hover:text-blue-900 ml-2 cursor-pointer" @click="signup">
        Sign Up
      </span>
    </div>
  </div>
</template>

<script>
import SocialLogin from './SocialLogin'
export default {
  components: {
    SocialLogin
  },
  data() {
    return {
      email: '',
      password: '',
      error: {},
    }
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        this.error = {
          email: !this.email && 'Email is required' || '',
          password: !this.password && 'Password is required' || ''
        }
        return
      }
      try {
        const response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });
        if (response.data.success) {
          await this.$auth.setUserToken(response.data.token)
          this.$emit("close")
        } else {
          this.error = {
            request: response.data.message
          }
          console.log('error', this.error)
        }
      } catch (err) {
        console.log(err)
        this.error = {
          request: 'Please try again later!'
        }
      }
      
    },
    signup() {
      this.$emit("signup")
    },
  }
}
</script>