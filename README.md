# 滕亦凡 · 关卡设计作品集

本仓库保存公开作品集的页面、资料和内容模板。网站地址：https://1291043470-boop.github.io/

## 内容维护

- 个人信息与简历：`content/profile.mjs`。
- 项目内容与排序：`content/projects.mjs`，`order` 越小越靠前。
- 图片、视频与附件：`docs/assets/`。
- 添加新作品：复制一个项目对象，填写唯一的 `slug`，补齐封面、视频和章节。
- 执行 `node build.mjs` 更新首页、详情页和站点地图，再执行 `node check.mjs` 检查链接、视频完整性和文件大小。
- 将修改推送到 `main` 后，GitHub Pages 从 `docs/` 自动发布。

当前页面使用资料文件管理内容，没有网页后台。网站内的视频、图片、项目资料及简历均经作者提供用于公开展示。播放器使用 hls.js，许可证见 `docs/assets/vendor/hls.LICENSE`。
