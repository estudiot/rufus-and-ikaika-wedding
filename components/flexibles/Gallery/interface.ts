interface Image {
  image: string
  alt: string
}

export default interface Gallery {
  title: string
  text: string
  images: Image[]
}
