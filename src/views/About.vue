<template>
  <div class="container">
    <h1>👓</h1>
    <h1>About</h1>
    <!-- <p>这人是谁啊，这么牛逼哄哄的？</p> -->

    <hr id="top-hr" />
    <div class="article">
      <center>
        <p>大家好，我是 張振宇，刚毕业的小程序员，目前还在实习阶段。给大家鞠躬了。🙇</p>
      </center>
      
      <h2>我的项目</h2>
      <p>
        我所做过的项目几乎都开源于
        <a href="https://github.com/Junior125306">GitHub</a> 上面，欢迎 Star + Fork，笔芯 (✿◡‿◡)
      </p>

      <GitHubCard
        title="🌸 我的 md日语汉字标注假名插件"
        link="https://github.com/Junior125306/JaPn"
        :info="dotfilesInfo"
        :loading="loading"
      >
        <p>刚开始有了方向开发</p>
      </GitHubCard>

      <h2>我的设备</h2>
      <!-- <ul>
        <li>
          主力台式机：Intel® NUC Kit NUC8I5BEK
          <ul>
            <li>
              配置清单：
              <ul>
                <li>CPU: Intel® Core™ i5-8295U</li>
                <li>RAM: ADATA 16GB (8GB×2) DDR4 2666MHz</li>
                <li>M.2 SSD: SAMSUNG PM981 M.2 NVME 256GB</li>
              </ul>
            </li>
            <li>
              介绍：
              <a href="https://sspai.com/post/54788">性能强劲的「迷你台式机」，Intel NUC 一周使用体验</a>
            </li>
          </ul>
        </li>
        <li>
          ThinkPad X1 Carbon 7th Gen：<a href="https://sspai.com/post/45742"
            >迁移到 Windows 后，我如何找回熟悉的 macOS 体验</a
          >
        </li>
        <li>12" MacBook (Early 2016)：观赏性质 > 实用价值</li>
        <li>
          Sony 1000XM3： <a href="https://sspai.com/post/47794">降噪、音质、续航一网打尽：索尼 1000XM3 降噪耳机体验</a>
        </li>
        <li>iPhone XR</li>
        <li>iPad Air 3rd Gen</li>
        <li>Apple Watch Series 3</li>
        <li>AirPods Pro</li>
      </ul>-->

      <p>自己笔记本</p>
      <h2>联系我</h2>
      <!-- <p>
        欢迎大家直接订阅我的发布，详情请参考：
        <router-link to="/subscribe">Spencer Woo - Subscribe</router-link>
      </p>-->
      <p>我的联系方式：</p>
      <ul>
        <li>
          📫 邮箱：
          <a href="mailto:dayu429@qq.com">dayu429@qq.com</a>
        </li>
        <li>📍 XiAn, China</li>
      </ul>
    </div>
  </div>
</template>

<script>
import GitHubCard from '@/components/GitHubCard.vue'

export default {
  components: {
    GitHubCard,
  },
  data() {
    return {
      loading: true,
      dowwwInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
      substatsInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
      fatesInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
      sspaiCardInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
      dotfilesInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
    }
  },
  mounted() {
    const githubApiUrl = 'https://api.github.com/repos'

    const dowwwAxios = this.axios.get(`${githubApiUrl}/spencerwooo/dowww`)
    const substatsAxios = this.axios.get(`${githubApiUrl}/spencerwooo/Substats`)
    const fatesAxios = this.axios.get(`${githubApiUrl}/SecureCats/Evaluation_BackEnd`)
    const sspaiCardAxios = this.axios.get(`${githubApiUrl}/spencerwooo/jsbox-sspai-namecard`)
    const dotfilesAxios = this.axios.get(`${githubApiUrl}/spencerwooo/dotfiles`)

    this.axios
      .all([dowwwAxios, substatsAxios, fatesAxios, sspaiCardAxios, dotfilesAxios])
      .then(
        this.axios.spread((...resp) => {
          this.loading = false
          this.dowwwInfo = resp[0].data
          this.substatsInfo = resp[1].data
          this.fatesInfo = resp[2].data
          this.sspaiCardInfo = resp[3].data
          this.dotfilesInfo = resp[4].data
        }),
      )
      .catch((err) => {
        this.loading = false
        // eslint-disable-next-line no-console
        console.error(err)
      })
  },
}
</script>

<style lang="css" scoped>
h2 {
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;
}

ul {
  padding-left: 15px;
  line-height: 30px;
  margin: 0;
}

p {
  line-height: 30px;
}
</style>
