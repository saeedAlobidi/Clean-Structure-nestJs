import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import IUser from 'src/application/Interfaces/Repositories/IUser';
import IlocalResources from 'src/application/Interfaces/LocalResources/IlocalResources';
import { IUserUsecase } from 'src/application/Interfaces/Usecase/IUserUsecase';
import User from 'src/domain/Entities/User';
import GenericUsecase from './GenericUsecase';
import { ClientProxy } from '@nestjs/microservices';



@Injectable()
export default class UserUsecase
  extends GenericUsecase<UserUsecase>
  implements IUserUsecase {


  constructor(@Inject('IUserRepository') private readonly Iuser: IUser,
    @Inject('LocalResources') private readonly local: IlocalResources,
    
    @Inject('GREETING_SERVICE') private client: ClientProxy,
    private jwtService: JwtService,


  ) {
    super();

  }
  async addUser(UserTdo: User): Promise<any> {

    return await this.Iuser.AddPromise(UserTdo);
  }

  async GetHelloMessage(): Promise<any> {
    return this.local.getMessage("en", "key")

  }

  async GetUsers(): Promise<any> {
    //var x=   this.client.emit({cmd: 'greeting'}, 'Progressive Coder');
    var x=   this.client.send({cmd: 'greeting'}, 'Progressive Coder');
    var tt=await x.toPromise() 
    console.log(tt)
      
     return await this.Iuser.GetAllPromise();
  }
  async login(user: any) {
    const payload = { "user": "!" }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
