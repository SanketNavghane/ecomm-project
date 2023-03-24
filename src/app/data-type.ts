export interface signUp{
    name:string,
    password:string,
    email:string
}
export interface login{
    email:String,
    password:String
}

export interface product{
    name:String,
    price:number,
    category:String,
    color:String,
    description:String,
    image:String,
    id:number
}