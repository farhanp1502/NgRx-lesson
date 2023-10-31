export interface blogmodel{
    id:number,
    title:string,
    description:string
}

export interface blogs{
    bloglist:blogmodel[]; 
    errorMsg:string;
    // isloaded:boolean;
}