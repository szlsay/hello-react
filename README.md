# hello-react
前端框架的核心价值: 组件化 和 数据驱动视图

## 2、JSX语法
标签
首字母小写 - HTML tag, 首字母大写为自定义组件 如 <input/> 和 <Input/> 就不一样
JSX 里的标签必须是闭合的，<input> <br> 这样写在 JSX 会报错（在 HTML 中不会报错），必须闭合 <input/>
每一段 JSX 只能有一个根节点，或者使用 <></> （ Fragment ）

属性
和 HTML 属性基本一样
class 要改为 className
style 要写成 JS 对象（不能是 string），key 采用驼峰写法
for 要改为 htmlFor

## vite安装
https://cn.vitejs.dev/

npm create vite@latest react-demo-vite --template react-ts

## 1、安装
### 安装node.js
https://nodejs.org/en

### Create React App 中文文档
https://create-react-app.bootcss.com/

### react官网
https://react.dev/
https://zh-hans.react.dev/ 

### 安装命令
npx create-react-app react-ts-demo --template typescript
