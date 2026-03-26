export const useAppState = () => {
  const searchQuery = useState('app.searchQuery', () => '')
  const selectedIcon = useState('app.selectedIcon', () => ({
    name: 'Select and preview icons here',
    componentName: 'FluentIconOutlinedSticker',
    svgFileName: 'ic_fluent_sticker_24_regular.svg',
  }))
  return { searchQuery, selectedIcon }
}
