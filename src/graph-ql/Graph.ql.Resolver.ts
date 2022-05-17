import { Inject, UseGuards } from "@nestjs/common";
import { Resolver, Args, Int, Query } from "@nestjs/graphql";
import { IUserUsecase } from 'src/application/Interfaces/Usecase/IUserUsecase';
import User from "src/domain/Entities/User";
import { GqlAuthGuard } from "src/presentation/Auth/Guards/GqlAuthGuard";

@Resolver()
export class UserResolver {
    constructor(
        @Inject('IUserUsecase') private readonly IUserUsecase: IUserUsecase,
      ) {}
 
 
  @UseGuards(GqlAuthGuard)
  @Query(returns => [User])
  async GetAllUsers(): Promise<any> { 
    
    return await this.IUserUsecase.GetUsers();

  }
 
}