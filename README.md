# nest-sever
###创建后台接口
nest g app admin
###运行服务端接口（开发）
nest start -w admin
###创建数据库
nest g lib db  
@libs
添加数据库模块
npm add nestjs-typegoose @typegoose/typegoose
npm add mongoose @types/mongoose
### 在子项目中创建模型等
nest g mo -p admin users
### swagger
npm install --save @nestjs/swagger swagger-ui-express
###curd 
npm add nestjs-mongoose-crud
###  ts vue 
cd admin
 vue add typescript
