# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/docs/reference/configuration)
- [CLI Usage](https://turbo.build/docs/reference/command-line-reference)

## 步骤

### 安装turbo
- npm install turbo --global
* install in repository
- npm install turbo --save-dev
### 使用脚手架 初始化turbo
需要一个空目录
pnpm dlx create-turbo@latest
### 依赖管理
- 指定包安装依赖
pnpm install jest --save-dev --recursive --filter=web --filter=@repo/ui
- 更新依赖项版本
pnpm up --recursive typescript@latest
- 通过规则让所有包都依赖相同的版本
turborepo syncpack、、manypkg和等工具sherif可用于此特定目的。
### 创建内部包
packages/math
packages.exports：为包定义多个入口点，以便它可以在其他包中使用（import { add } from '@repo/math'）
- 将新的包安装在web
pnpm add @repo/math -S --filter=web
pnpm uninstall @repo/math -D --filter=web

pnpm add pkg 会去远端下载,使用 pnpm add b --workspace 会去本地的 workspace 中下载，或在 package.json 中添加 "workspace:*"

- 新增jest的test命令
- 在turbo 中配置test命令，才可以使用tur执行所有的test命令

### 在 web 中使用 math 包
引入add方法并使用
### 配置产物路径
在 turbo.json 中配置任务编排。build 新增 math 打包产物的路径。确保其构建产物将被 Turborepo 缓存
task.build.outputs: ['./dist/**']
