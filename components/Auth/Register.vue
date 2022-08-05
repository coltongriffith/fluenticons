<template>
  <div>
    <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3 mb-4" role="alert" v-if="error.request">
      <p class="font-bold">Registeration was failed!</p>
      <p class="text-sm">{{ error.request }}</p>
    </div>
    <h1 class="font-semibold text-4xl mb-3">Create an account</h1>
    <p class="text-gray-400 text-sm mb-4 font-semibold">
      Start now and manage tabs, bookmakrs, your browser history, perform all sorts of actions and more.
    </p>
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
    <div class="flex flex-wrap mb-3">
      <div class="w-full text-left">
        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          v-model="confirmPassword"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <div class="text-red-500 text-sm font-medium">
          {{ error.confirmPassword }}
        </div>
      </div>
    </div>
    <button @click="register" class="font-semibold border text-center py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-700 rounded w-full mt-6">
      Join in with Email
    </button>
    <div class="text-center mt-4">
      <span class="text-gray-800 mt-4">Do you have an account?</span>
      <span class="text-blue-700 hover:text-blue-900 ml-2 cursor-pointer" @click="login">
        Sign in
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
      confirmPassword: '',
      error: {},
    }
  },
  methods: {
    register() {
      if (!this.email || !this.password) {
        this.error = {
          email: !this.email && 'Email is required' || '',
          password: !this.password && 'Password is required' || ''
        }
        return
      }
      if (this.password !== this.confirmPassword) {
        this.error = {
          ...this.error,
          confirmPassword: 'Password doesn\'t match'
        }
        return
      }
      this.$axios.$post("/api/auth/register", {
        email: this.email,
        password: this.password
      }).then(res => {
        if (res.success) this.login()
        else this.error = {
          request: res.message
        }
      }).catch(err => {
        console.log(err)
        this.error = {
          request: 'Please try again later!'
        }
      });
    },
    login() {
      this.$emit("login")
    }
  }
}
</script>