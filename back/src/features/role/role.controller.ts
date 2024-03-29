import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @MessagePattern('get-roles')
  findAll() {
    return this.roleService.findAll();
  }

  @MessagePattern('get-role')
  findOne(@Payload() id: number) {
    return this.roleService.findOne(id);
  }

  @MessagePattern('create-role')
  create(@Payload() dto: CreateRoleDto) {
    return this.roleService.create(dto);
  }

  @MessagePattern('update-role')
  update(@Payload('id') id: number, @Payload('dto') dto: UpdateRoleDto) {
    return this.roleService.update(id, dto);
  }

  @MessagePattern('delete-role')
  remove(@Payload() id: number) {
    return this.roleService.remove(id);
  }
}
