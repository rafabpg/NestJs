abstract class CreateUserRepository{
    abstract create(name:string,email:string):Promise<void>;
}
export { CreateUserRepository}