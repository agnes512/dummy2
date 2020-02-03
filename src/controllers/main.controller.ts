// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Order, User} from '../models';
import {OrderRepository, UserRepository} from '../repositories';

export class MainController {
  constructor(
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/users/abc', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUser',
            exclude: ['id'],
          }),
        },
      },
    })
    user: Omit<User, 'id'>,
  ): Promise<User> {
    const myUser = await this.userRepository.create({
      email: 'ujjt@28@mail.com',
      firstName: 'Ujjwal',
      lastName: 'Tiwari',
      contactNo: 133334566,
    });
    console.log(myUser);
    const order = await this.orderRepository.create({
      userId: myUser.id,
    }); // the order instance must contain the foreign key
    console.log(order);
    // the following is for hasMany relation:
    const resultUser = await this.userRepository.find({
      where: {id: myUser.id},
      include: [{relation: 'orders'}],
    });
    console.log(resultUser);
    // the following is for belongsTo relation:
    const resultOrder = await this.orderRepository.find({
      where: {orderId: order.orderId},
      include: [{relation: 'user'}],
    });
    console.log(resultOrder);

    return resultUser[0]; //returning a user with its orders
  }
}
