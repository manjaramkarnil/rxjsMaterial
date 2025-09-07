export interface IcousRespons {
  courses: Icours[]
}

export interface Icours {
  id: number
  title: string
  description: string
  image: string
  category: "Beginers" | "Advanced"
  duration: string
  rating: number
  author: string
}
