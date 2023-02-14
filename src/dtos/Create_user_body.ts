import { IsNotEmpty, Length } from "class-validator";

class Create_user_body{
    @IsNotEmpty()
    @Length(5,100)
    name:string;

    @IsNotEmpty({
        message:"This field need to be fulfield"
    })
    email:string;
}
export { Create_user_body}