<template>
  <div class="container">
    <img id="avatar" alt="avatar" src="./../assets/images/avatar.webp" />
    <h1>张振宇</h1>
    <h2>🍖 👨‍💻 🙋‍♂️</h2>

    <p>吃货 / 程序员 / 学生</p>
    <p>まだまだだね</p>

    <hr id="top-hr" />
    <h3>🎉从来没有真正的绝境，只有心灵的迷途</h3>
    <div id="card-container">
      <Card
        msg="博客 Blog"
        backgroundColor="#0083c0"
        description="🤹‍♂️ 学习与工作得事儿"
        textColor="#FFFFFF"
        icon="blog-cover.png"
        link="https://blog.zz-yy.top"
      />
      <Card
        msg="我的学习计划"
        backgroundColor="#ca2c2a"
        description="📒 共勉！"
        textColor="#FFFFFF"
        icon="plan.png"
        link="/StudyStep"
      />
      <Card
        msg="GitHub"
        backgroundColor="#24292E"
        description="📦(还是空的)"
        textColor="#FFFFFF"
        icon="github.png"
        link="https://github.com/Junior125306"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card,
  },
}
</script>

<style lang="css" scoped>
#copyright:hover {
  border: none;
}
</style>
