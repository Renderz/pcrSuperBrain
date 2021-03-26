# 中邮前端开发框架说明文档

## lint(代码检查与格式化)
- lint的上下游包括: 编写代码时的"语法"与"格式"错误高亮提示, 保存时IDE自动修复错误, git commit时自动提示错误.
- lint的范围包括: js文件, ts文件, less文件.
- eslint可以处理"语法"与"格式"错误.
- prettier可以处理"格式"错误.
- stylelint可以处理"格式"错误.
- 通过eslint-config-prettier库屏蔽eslint中和prettier冲突的rules.
- 通过eslint-plugin-prettier库将prettier格式错误加入eslint提示中.
- eslint / prettier / stylelint最佳实践由@umi/fabric库提供.

## VSCode 配置相关
- eslint插件, 需要配置保存后自动修复
```
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        },
    ],
```
- 关闭IDE的editor格式规则保存自动修复
```
    "editor.formatOnSave": false,
```
- vscode的默认"格式修复"是走prettier配置的, 需要配置对less和css的自动修复
```
    "[less]": {
        "editor.formatOnSave": true
    },
    "[css]": {
        "editor.formatOnSave": true
    }
```
- less和css的"语法修复"需要安装stylelint-plus插件
```
    "stylelint.enable": true,
    "stylelint.autoFixOnSave": true,
```
