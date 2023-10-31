import { blogmodel, blogs } from "../blog/blog.model";
import { Countermodel } from "../counter.model";

export interface appModel{
    counter:Countermodel,
    blog:blogs,
    isloaded:boolean
}