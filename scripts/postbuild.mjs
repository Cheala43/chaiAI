// 构建后处理：SPA 兜底页（404.html）+ 深链副本（chaibuddy/index.html）
// 用 Node 实现，避免 Windows(cmd) 与 Linux(CI) 下 shell 命令差异
import { mkdir, copyFile } from 'node:fs/promises'

await copyFile('dist/index.html', 'dist/404.html')
await mkdir('dist/chaibuddy', { recursive: true })
await copyFile('dist/index.html', 'dist/chaibuddy/index.html')

console.log('postbuild: dist/404.html + dist/chaibuddy/index.html 已生成')
