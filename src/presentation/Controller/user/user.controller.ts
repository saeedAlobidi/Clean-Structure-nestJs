import {
  Controller,
  UseFilters,
  Get,
  Param,
  Res,
  Req,
  HttpCode,
  Post,
  Body,
  Header,
  Inject,
  Scope,
  UseGuards,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  UseInterceptors,
  Request
  
} from '@nestjs/common'; 
import { IUserUsecase } from 'src/application/Interfaces/Usecase/IUserUsecase';
 import { UserModal } from '../../Modal/UserModal';
import { DomainGuard } from '../../Core/Guard/DomainGuard';
import { CustomException } from '../../Core/Filter/CustomException.Filter';
import {AuthGuard} from '@nestjs/passport'
import {LocalAuthGuard} from '../../Auth/Guards/LocalStrategy.Guard';
import { JwtAuthGuard } from '../../Auth/Guards/JwtAuth.Guard';
import { Roles } from '../../Core/Decorator/Auth.Type';


//@UseGuards(DomainGuard)
@Controller({
  path: 'user',
  // scope: Scope.REQUEST,
})
export class UserController {
  constructor(
    @Inject('IUserUsecase') private readonly IUserUsecase: IUserUsecase,
  ) {}


   
   
  // example to get Data
  @Get('GetUsers')
  @HttpCode(200)
  async GetUsers(): Promise<any> {
    return await this.IUserUsecase.GetUsers();
  }


  @Post('Login') // endpoint name 
  @HttpCode(200) // return status
  async login(): Promise<any> {
    
    // this just example 
  var data =await this.IUserUsecase.GetUsers()[0];
    return await this.IUserUsecase.login(data);
  
  }

/*

*/
  @UseGuards(LocalAuthGuard ) // endpoint name 
  @Post('addUser') // endpoint name 
  @HttpCode(200) // return status
  @UsePipes(new ValidationPipe({ transform: true })) // validate the modal post
 // @UseFilters(CustomException)
  async addUser(@Body() userModal: UserModal): Promise<any> {

  var data =await this.IUserUsecase.addUser(userModal);
    return   data
  // throw new NotFoundException();
  }


 //this example used authorization Role base jwt
  @Get('/jwt')
  @Roles("Admin")
  findById(@Request() req): any {
  return "saeed"
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
