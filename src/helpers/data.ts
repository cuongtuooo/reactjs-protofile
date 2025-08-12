import nestImg from 'assets/project/nestjs.png';
import nextjsImg from 'assets/project/nextjs.jpeg';
import reactNativeImg from 'assets/project/react-native.png';
import reactUltimateImg from 'assets/project/react-ultimate.png';
import springMvcImg from 'assets/project/spring-mvc.png';
import springRestImg from 'assets/project/spring-rest.png';

export const APP_DATA = {
    // YOUTUBE_URL: "https://www.youtube.com/@hoidanit",
    TIKTOK_URL: "https://www.tiktok.com/@manhcuong742",
    // UDEMY_URL: "https://www.udemy.com/user/eric-7039/",
    FACEBOOK_URL: "https://www.facebook.com/profile.php?id=100005923727410"
}

export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "Lập Trình Viên",
            en: "Fullstack Developer"
        },

        company: {
            vi: "freelancer",
            en: "freelancer"
        },
        duration: {
            vi: "Tháng 6/2023 - Nay",
            en: "Jun 2023 - Present"
        }
    },
    {
        id: 2,
        title: {
            vi: "Lập Trình Viên",
            en: "Fullstack Developer"
        },
        company: {
            vi: "Công ty VietNetWork Ltd.",
            en: "VietNetWork Ltd."
        },
        duration: {
            vi: "Jan 2024 ",
            en: "Jan 2024 "
        }
    },
    
    {
        id: 3,
        title: {
            vi: "Thực tập sinh",
            en: "Intern"
        },
        company: {
            vi: "Bac Ha software",
            en: "Bac Ha software."
        },
        duration: {
            vi: "Tháng 11/2022 - Tháng 2/2023",
            en: "November 2022 - February 2023"
        }
    }
]

export const PROJECTS = [
    {
        id: 1,
        imgPath: "images/quan-trac-hai-van.jpg",
        title: "Backend book store",
        description: "Cung cấp API bảo mật với JWT AuthGuard. CRUD cho sản phẩm, danh mục, đơn hàng, người dùng. Xử lý upload ảnh sản phẩm, lưu trữ file tĩnh. Xóa mềm dữ liệu với Soft-delete.",
        githubLink: "https://github.com/cuongtuooo/bookshop-backend",
        // demoLink: "https://hoidanit.vn/khoa-hoc/react-native-ultimate-phat-trien-ung-dung-mobile-66e7ab4578aaf477418cb538.html"
    },
    {
        id: 2,
        imgPath: "images/ve-tinh.jpg",
        title: "Frontend book store",
        description: "Giao diện quản trị quản lý sản phẩm, danh mục, đơn hàng, người dùng. Trang khách hàng cho phép duyệt sản phẩm, tìm kiếm, xem chi tiết, thêm giỏ hàng, đặt hàng. Tích hợp trình soạn thảo văn bản để nhập mô tả sản phẩm dạng HTML. Xuất báo cáo dạng Excel/CSV, hiển thị ảnh dạng slider/gallery. Responsive, tối ưu tốc độ build bằng Vite.",
        githubLink: "https://github.com/cuongtuooo/bookshop-frontend",
        // demoLink: "https://hoidanit.vn/khoa-hoc/java-spring-rest-ultimate-for-beginners-6631cb577353ab6861b188f6.html"
    },
    {
        id: 3,
        imgPath: "images/dien-gio-ngoai-khoi.jpg",
        title: "protofile",
        description: "Giao diện hiện đại sử dụng component-based architecture của React, tối ưu hiệu năng qua Vite. Hỗ trợ đa ngôn ngữ qua i18n, cho phép người dùng chuyển đổi ngôn ngữ linh hoạt. Hiệu ứng trực quan bằng Lottie animation và SVG, nâng cao trải nghiệm người dùng. Responsive Design tương thích trên nhiều kích thước màn hình.",
        githubLink: "https://github.com/cuongtuooo/reactjs-protofile",
        // demoLink: "https://hoidanit.vn/khoa-hoc/java-spring-mvc-ultimate-for-beginners-65ce0b770c05f4450fbd86ac.html"
    },
    {
        id: 4,
        imgPath: "images/dich-vu2.jpg",
        title: "Frontend Web giới thiệu công ty EyeSea",
        description: "Giao diện quản trị quản lý sản phẩm, danh mục, đơn hàng, người dùng. Tích hợp trình soạn thảo văn bản để nhập mô tả sản phẩm dạng HTML. Xuất báo cáo dạng Excel/CSV, hiển thị ảnh dạng slider/gallery. Responsive, tối ưu tốc độ build bằng Vite.",
        githubLink: "https://github.com/cuongtuooo/seaport-frontend",
        // demoLink: "https://hoidanit.vn/khoa-hoc/react-pro-max-voi-nextjs-lam-chu-toan-dien-reactjs-hien-dai-65198100e6bafa8caad417a6.html"
    },
    {
        id: 5,
        imgPath: "images/do-goc-thuyen-cap-cang.jpg",
        title: "Backend Web giới thiệu công ty EyeSea",
        description: "Cung cấp API bảo mật với JWT AuthGuard. CRUD cho sản phẩm, danh mục, đơn hàng, người dùng. Xử lý upload ảnh sản phẩm, lưu trữ file tĩnh. Xóa mềm dữ liệu với Soft-delete.",
        githubLink: "https://github.com/cuongtuooo/seaport-backend",
        // demoLink: "https://hoidanit.vn/khoa-hoc/nestjs-voi-typescript-mongodb-sieu-de-64686ec6fb456bbb90663dd6.html"
    },
    // {
    //     id: 6,
    //     imgPath: reactUltimateImg,
    //     title: "React Ultimate",
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //     githubLink: "https://hoidanit.vn/khoa-hoc/react-ultimate-react-co-ban-tu-z-toi-a-640b50b96cc592d780aab976.html",
    //     demoLink: "https://hoidanit.vn/khoa-hoc/react-ultimate-react-co-ban-tu-z-toi-a-640b50b96cc592d780aab976.html"
    // }
]

export const SKILLS_DATA = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    // 'Next JS',
    // 'Tailwind',
    // 'MongoDB',
    'MySQL',
    // 'PostgreSQL',
    'Git',
    // 'AWS',
    'Bootstrap',
    // 'Docker',
    // 'Go',
    // 'Figma',
    // 'Firebase',
    // 'MaterialUI',
    // 'Nginx',
    // 'Strapi'
  ]
  
  // Choose your skills from below. Make sure it's in the same format and spelled correctly.
  // Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
  
  
  // AVAILABLE SKILLS
  
  /* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */