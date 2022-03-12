export default interface Text {
  alignment: 'left' | 'right'
  title: string
  children: React.ReactNode
  headingType?: 'h1' | 'h2'
}
