```txt
first-project/
│
├── dist
├── node_modules
├── public
│
├── src/                 # 源代码目录
│   ├── hello   		# helloworld
│   │   ├── app.controller.spec.ts  # 测试文件
│   │   └── app.controller.ts   # 控制器文件
│   ├── app.controller.spec.ts   # 测试根控制器
│   ├── app.module.ts   # 根模块
│   ├── app.service.ts  # 业务逻辑
│   └── main.ts         # 应用入口文件
│
├── test/               # 测试配置和脚本
│   ├── app.e2e-spec.ts # 端到端测试
│   └── jest-e2e.json   # Jest 端到端测试配置
│
├── .editorconfig           # 编辑器配置
├── .eslintignore          # ESLint忽略配置
├── .eslintrc.js           # ESLint规则
├── .gitignore             # Git忽略配置
├── .prettierignore        # Prettier忽略配置
├── .prettierrc            # Prettier规则
├── nest-cli.json         # Nest CLI配置
├── package-lock.json      # 依赖锁定
├── package.json          # 项目依赖和脚本
├── README.md              # 项目说明书
├── tsconfig.build.json   # TypeScript构建配置
└── tsconfig.json          # TypeScript配置
```

