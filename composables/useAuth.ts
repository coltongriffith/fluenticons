const API_BASE = 'https://api.fluenticons.co'

export const useAuth = () => {
  const token = useCookie<string | null>('auth.token', {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'lax',
  })
  const user = useState<any>('auth.user', () => null)
  const loggedIn = computed(() => !!token.value && !!user.value)

  const fetchUser = async () => {
    if (!token.value) return
    try {
      user.value = await $fetch(`${API_BASE}/api/auth/user`, {
        headers: { Authorization: `Bearer ${token.value}` },
      })
    } catch {
      token.value = null
      user.value = null
    }
  }

  const signIn = async (credentials: { email: string; password: string }) => {
    const response = await $fetch<{ success: boolean; token: string; message?: string }>(
      `${API_BASE}/api/auth/login`,
      { method: 'POST', body: credentials }
    )
    if (response.success) {
      token.value = response.token
      await fetchUser()
    }
    return response
  }

  const setToken = async (newToken: string) => {
    token.value = newToken
    await fetchUser()
  }

  const signOut = () => {
    token.value = null
    user.value = null
  }

  return { token, user, loggedIn, signIn, signOut, setToken, fetchUser }
}
