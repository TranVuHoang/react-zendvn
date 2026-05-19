# Chương 1: ReactJS cơ bản

```
1. Introduce và phân tích kiến thức
2. ReactJS thông tin cần biết
  - ReactJS
    - Javascript library for building dynamic user interfaces
    - View in MVC
    - SPA - Single Page Application
    - Mainteined by Meta and community of individual developers

  - Enviroment
  - Hello Component
3. Tích hợp Bootstrap
4. Xây dựn component
  - Component
  - JSX
5. Sử dụng Props, Event, Ref và State
  - props
  - event
  - state
  - ref
6. Tìm hiểu LifeCycle
7. Hệ thống kiến thức mở rộng
```

## 1. React cơ bản

## 2. ReactJS thông tin cần biết

```
- Javascript library for building dynamic user interfaces
- View in MVC
- SPA - Single Page Application
- Mainteined by Meta and community of individual developers
```

## 3. Cài đặt môi trường học tập

```
- VSCode
- Chorme dev tools
- React develop tools
- Nodejs
```

## 4. Tìm hiểu ReactJS phần 1

```
Tạo ứng dụng react đầu tiên với lệnh:

npx create-react-app my-app
```

## 5. Tìm hiểu ReactJS phần 2

```
Tìm hiểu component trong React

HEADER
  LogoComponent
  MenuComponent
CONTENT
  MainContentComponent
  SidebarComponent
FOOTER
  FooterTopComponent
  FooterBottomComponent
```

## 6. Tìm hiểu ReactJS phần 3

```
TÌM HIỂU CẤU TRÚC THƯ MỤC CỦA DỰ ÁN REACT

- 📁 node_modules: Chứa những thành phần thư viện
- 📁 public: Chứa file index.html hiển thị trên trình duyệt
- 📁 src: Chứa các file code chính
  - App.css : file css
  - App.jsx: code js chính ở đây
- file:
  - .gitignore (quản lý git)
  - REAMDE.md: miêu tả cho project
  - package.json: file cấu hình cho dự án
```

## 7. Tạo component Hello

```
Tạo Component Hello bằng cách:

trong 📁src tạo mới file: Hello.jsx và thêm nội dung:
```

```jsx
// Hello.jsx (tạo nội dung nhanh: rsc + tab)
const Hello = () => {
  return (
    <div>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Hello;
```

Trong file App.jsx cần import Component Hello:

```jsx
// App.jsx
import Hello from "./Hello";
```

## 8. Tích hợp Bootstrap

CDN BOOTSTRAP

```css
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
```

## 9. Xây dựng App Component

```
TẠO COMPONENT VỚI CẤU TRÚC:

ReactJS
  Chương 1: ABC
  Chương 2: ABC
  Chương 3: ABC

VueJS
  Chương 1: ABC
  Chương 2: ABC
  Chương 3: ABC
```

## 12 Tìm hiểu JSX

```
JSX - Javascript XML: Cú pháp để thay thế js, cách viếtteiv gần giống XML
thay thế React.createElement()
JSX không phải HTML

<App />
thuộc tính class thay bằng className
...
```
