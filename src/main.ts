import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()

//mongodb+srv://hrkcz001:<password>@cluster0.oh7zz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
