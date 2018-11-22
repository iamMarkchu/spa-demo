<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-8">
                    <div class="card article-card">
                        <div class="card-content">
                            <p class="title has-text-centered">我是文章标题</p>
                            <div class="tags has-addons level-item">
                                <span class="tag is-rounded is-info">@Chukui</span>
                                <span class="tag is-rounded">May 10, 2018</span>
                            </div>
                            <div class="content">
                                <div class="card-body markdown-body">
                                    <h1 class="card-title text-center">Go操作Redis</h1>
                                    <div class="info-block text-center text-muted">
                                        <span class="oi oi-timer"></span><span>2018-11-10 07:01:01</span>&nbsp;&nbsp;
                                        <span class="oi oi-person"></span><span>chukui</span>&nbsp;&nbsp;
                                        <span class="oi oi-eye"></span><span class="view_count">2</span>&nbsp;&nbsp;
                                    </div>
                                    <p><img src="http://qiniu.mcgoldfish.com/image/1/cDHxhDhK3jB2yWfo02xA3S1v6fNhPsAYuqvQRZre.png" alt="go redis" data-src="http://qiniu.mcgoldfish.com/image/1/cDHxhDhK3jB2yWfo02xA3S1v6fNhPsAYuqvQRZre.png" class="img-fluid">
                                        redis在生成环境中应用非常广泛，它优秀的性能，使构建高并发，高性能的应用变得更加容易。
                                        使用go进行程序开发时，免不了和redis打交道，所以掌握在go中操作redis是很有必要的</p>
                                    <h2 id="go-redis">go-redis</h2>
                                    <pre><code>这是一个golang的redis client, [github地址](https://github.com/go-redis/redis)</code></pre>
                                    <h3 id="安装">安装</h3>
                                    <pre><code class="language-golang">go get -u github.com/go-redis/redis

import "github.com/go-redis/redis"  // 在具体代码中引入</code></pre>
                                    <h3 id="示例代码">示例代码</h3>
                                    <pre><code class="language-golang">package main

import (
    "github.com/go-redis/redis"
    "log"
)

func main() {
    client := redis.NewClient(&amp;redis.Options{
        Addr:     "127.0.0.1:6379",
        Password: "",
        DB:       0,
    })

    // set, key,value,expiration
    client.Set("name", "mark", 0).Result()

    // get
    name, err := client.Get("name").Result()
    if err != nil {
        log.Println(err)
    }
    log.Println("name为", name)

    // 年龄增长
    _, err =client.Set("mark:age", 26, 0).Result()
    if err != nil {
        log.Println(err)
    }

    // 自增1
    age, err := client.Incr("mark:age").Result()
    if err != nil {
        log.Println(err)
    }
    log.Println("年龄:", age)

    // 增加指定数
    age, err = client.IncrBy("mark:age", 10).Result()
    log.Println("年龄:", age)
}</code></pre>
                                    <h3 id="后续">后续</h3>
                                    <p><a href="http://blog.mcgoldfish.com/link?target=https%3A%2F%2Fredis.io%2Fcommands" target="_blank" rel="nofollow">redis命令参考</a>，go-redis基本支持所有的redis命令.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <tag-list></tag-list>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TagList from './../components/tags/TagList'
    export default {
        name: "Article",
        components: {
            TagList
        }
    }
</script>

<style scoped>

</style>