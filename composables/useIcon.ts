import { ref, watch } from 'vue'

interface GradientPoint {
  left: number
  red: number
  green: number
  blue: number
  alpha: number
}

interface Gradient {
  type: string
  degree: number
  points: GradientPoint[]
}

export function useIcon(props: { type?: string; gradient?: Gradient }) {
  const fill = ref('currentColor')
  const opacity = ref(1)
  const angle = ref(0)
  const start = ref('white')
  const end = ref('black')

  watch(
    () => props.type,
    (val) => {
      if (val === 'single') fill.value = 'currentColor'
    }
  )

  watch(
    () => props.gradient,
    (gradient) => {
      if (!gradient) return
      fill.value = ''
      const { degree, points, type } = gradient
      angle.value = degree
      start.value = `rgba(${points[0].red}, ${points[0].green}, ${points[0].blue}, ${points[0].alpha})`
      end.value = `rgba(${points[1].red}, ${points[1].green}, ${points[1].blue}, ${points[1].alpha})`
      if (type === 'linear') fill.value = 'url(#g1)'
      else fill.value = 'url(#g2)'
    },
    { deep: true }
  )

  return { fill, opacity, angle, start, end }
}
