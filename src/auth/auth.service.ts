import { Injectable } from '@nestjs/common';
import { AuthBody, RegisterBody } from './auth.controller';
import { PrismaService } from 'src/utils/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './jwt.strategy';

@Injectable()
export class AuthService {

    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService){}

    async login({authBody} : {authBody: AuthBody}) {

        const {email, password} = authBody;

        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!existingUser) {
            throw new Error('User not found');
        }
        
        const isPasswordValid = await this.isPasswordValid({password, hashedPassword: existingUser.password});

        if(!isPasswordValid) {
            throw new Error('Invalid password');
        }

        return this.authenticateUser({userId: existingUser.id});
    }

    async register({registerBody} : {registerBody: RegisterBody}) {

        const {email, password, username} = registerBody;

        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            throw new Error('User is already registered with this email');
        }
        
        const hashedPassword = await this.hashPassword({password});

        const createdUser = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username
            }
        });

        return this.authenticateUser({userId: createdUser.id});
    }

    private async hashPassword( {password} : {password: string}) {
        const hasedPassword = await bcrypt.hash(password, 10);
        return hasedPassword;
    }

    private async isPasswordValid( {password, hashedPassword} : {password: string; hashedPassword: string}) {
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        return isPasswordValid;
    }

    private authenticateUser({userId}: UserPayload){
        const payload : UserPayload = {userId};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

}
