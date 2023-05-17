import { ApiProperty } from "@nestjs/swagger";

ApiProperty

export class CreateUserDto {

	@ApiProperty({example: 'user@gmail.com', description: 'Почтовый адрес'})
	readonly email: string;
	@ApiProperty({example: '12345', description: 'Пароль'})
	readonly password: string;
}