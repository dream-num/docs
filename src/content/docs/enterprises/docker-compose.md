---
title: 试用商业版
---

:::note
在部署试用版本之前，请先[联系我们](/enterprises/#获取商业版)获取部署镜像。
:::

> 请使用 Docker Compose 运行 Univer 服务端, 此方法不适用于生产环境。

## 环境要求

1. CPU: 1 核
2. 内存: 2G
3. 磁盘：10G
4. 系统: Linux, Mac

## 快速上手

1. 安装 [docker >= 23 版本](https://docs.docker.com/engine/install/)

2. 克隆本仓库

```bash
git clone https://github.com/dream-num/helm-charts.git
```

3. 进入 `docker-compose` 目录

```bash
cd helm-charts/docker-compose
```

4. 发送邮件到 `developer@univer.ai` 或联系官方微信申请试用资格,获取 `LICENSE` 和 `public_key.crt` 文件

5. 将 `LICENSE` 和 `public_key.crt` 文件放到 ./configs 目录下

6. 启动服务

```bash
bash run.sh
```

7. 创建一个试用表格

```bash
curl -i -X 'POST' \
  'http://localhost:8000/universer-api/snapshot/2/unit/-/create' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": 2,
    "name": "New Sheet - 12/13",
    "creator": "user",
    "workbookMeta": {
        "name": "New Sheet - 12/13",
        "locale": "en_US"
    }
}'

# response:
# {"error":{"code":"OK","message":"success"},"unitID":"1735864608675115008"}
```

8. 可以利用我们提供的 demo 打开对应的表格

```bash
docker pull univer-acr-registry.cn-shenzhen.cr.aliyuncs.com/release/univer-collaboration-demo:latest

docker run -it -d \
  -p 3010:3010 \
  univer-acr-registry.cn-shenzhen.cr.aliyuncs.com/release/univer-collaboration-demo:latest

# open http://localhost:3010?unit=${unitID}&type=2
```

## 占用端口

| service   | port | description     |
| --------- | ---- | --------------- |
| universer | 8000 | api http server |
