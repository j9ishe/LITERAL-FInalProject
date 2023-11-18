export class Post{
  constructor(
    public title: string,
    public img: string,
    public auth: string,
    public description: string,
    public date: Date,
    public likes: number = 0,
    public comments: string[] = []
  ){}
}
